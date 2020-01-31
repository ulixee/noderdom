import Components from './Components';
import * as Browser from './types';
import { filter, exposesTo, followTypeReferences, mapToArray, arrayToMap } from './utils';
import { baseComponentNames } from './ComponentOverrides';

export default class ComponentCleaner {
  private referencedIDLTypes: Set<string>;
  private unexposedTypes = new Set<string>();

  constructor(private components: Components, private target: 'Window') {}

  public run() {
    const original = this.components;
    const target = this.target;
    const filtered = new Components();

    filtered.namespaces = original.namespaces.filter(o => exposesTo(o, target));
    filtered.interfaces = filter(original.interfaces, i => exposesTo(i, target));
    const unexposedInterfaces = mapToArray(original.interfaces).filter(i => !i.exposed || !i.exposed.includes(target));
    for (const i of unexposedInterfaces) {
      this.unexposedTypes.add(i.name);
    }

    this.referencedIDLTypes = new Set([
      ...baseComponentNames,
      ...followTypeReferences(original, filtered.interfaces!),
      ...followTypeReferences(
        original,
        arrayToMap(
          filtered.namespaces!,
          i => i.name,
          i => i,
        ),
      ),
    ]);

    const referencedTypes = original.typedefs.filter(t => this.referencedIDLTypes.has(t['new-type']));
    const { exposed, removed } = this.filterTypedefs(referencedTypes, this.unexposedTypes);
    const exposedMixins = filter(original.mixins, o => exposesTo(o, target));

    removed.forEach(s => this.unexposedTypes.add(s));
    filtered.typedefs = exposed;

    filtered.callbackFunctions! = this.filterProperties(original.callbackFunctions, 'callbackFunction');
    filtered.callbackInterfaces! = this.filterProperties(original.callbackInterfaces, 'callbackInterface');
    filtered.dictionaries = this.filterProperties(original.dictionaries, 'dictionary');
    filtered.enums = this.filterProperties(original.enums, 'enum');
    filtered.mixins = this.filterProperties(exposedMixins, 'mixin');

    const final = this.deepClone(filtered, c => {
      if (Array.isArray(c.type)) {
        const type = this.filterUnexposedTypeFromUnion(c.type, this.unexposedTypes);
        return { ...c, type };
      }
      if (Array.isArray(c.signature)) {
        const signature = c.signature.map((s: Browser.Signature) =>
          this.filterUnknownTypeFromSignature(s, this.unexposedTypes),
        );
        return { ...c, signature };
      }
    });

    this.mergeNamesakes(final);

    return this.components.load(final);
  }

  private filterProperties<T, U extends T>(obj: Record<string, U>, objName: string): Record<string, U> {
    const result: Record<string, U> = {};
    for (const e of Object.keys(obj)) {
      const { name } = (obj[e] as unknown) as { name: string };
      const shouldKeep = this.isReferencedType(name);
      if (shouldKeep) {
        result[e] = obj[e];
      } else {
        console.log(`- Unreferenced ${objName}: ${name}`);
      }
    }
    return result;
  }

  private filterUnexposedTypeFromUnion(union: Browser.Typed[], unexposedTypes: Set<string>): Browser.Typed[] {
    const result: Browser.Typed[] = [];
    for (const type of union) {
      if (Array.isArray(type.type)) {
        const filteredUnion = this.filterUnexposedTypeFromUnion(type.type, unexposedTypes);
        if (filteredUnion.length) {
          result.push({ ...type, type: this.flattenType(filteredUnion) });
        }
      } else if (!unexposedTypes.has(type.type)) {
        result.push(type);
      }
    }
    return result;
  }

  private deepClone<T>(o: T, custom: (o: any) => any): T {
    if (!o || typeof o !== 'object') {
      return o;
    }
    if (Array.isArray(o)) {
      return (o.map(v => this.deepClone(v, custom)) as any) as T;
    }
    const mapped = custom(o);
    if (mapped !== undefined) {
      return mapped;
    }
    const clone: any = {};
    for (const key of Object.getOwnPropertyNames(o)) {
      clone[key] = this.deepClone((o as any)[key], custom);
    }
    return clone;
  }

  private isReferencedType(name: string) {
    return this.referencedIDLTypes.has(name);
  }

  private flattenType(type: Browser.Typed[]) {
    if (type.length > 1) {
      return type;
    }
    if (type.length === 1) {
      return type[0].type;
    }
    throw new Error('Cannot process empty union type');
  }

  private mergeNamesakes(filtered: Components) {
    const targets = [
      ...Object.values(filtered.interfaces!),
      ...Object.values(filtered.mixins!),
      ...filtered.namespaces!,
    ];
    for (const i of targets) {
      if (!i.properties || !i.properties.namesakes) {
        continue;
      }
      const { property } = i.properties!;
      for (const [prop] of Object.values(i.properties.namesakes)) {
        if (prop && !(prop.name in property)) {
          property[prop.name] = prop;
        }
      }
    }
  }

  private filterUnknownTypeFromSignature(signature: Browser.Signature, unexposedTypes: Set<string>) {
    if (!signature.param) {
      return signature;
    }
    const param: Browser.Param[] = [];
    for (const p of signature.param) {
      const types = Array.isArray(p.type) ? p.type : [p];
      const filtered = this.filterUnexposedTypeFromUnion(types, unexposedTypes);
      if (filtered.length >= 1) {
        param.push({ ...p, type: this.flattenType(filtered) });
      } else if (!p.optional) {
        throw new Error('A non-optional parameter has unknown type');
      } else {
        // safe to skip
        break;
      }
    }
    return { ...signature, param };
  }

  /**
   * Filters unexposed types out from typedefs and
   * removes typedefs that only contains unexposed type names
   * @param typedefs target typedef array
   * @param unexposedTypes type names to be filtered out
   */
  private filterTypedefs(
    typedefs: Browser.TypeDef[],
    unexposedTypes: Set<string>,
  ): { exposed: Browser.TypeDef[]; removed: Set<string> } {
    const exposed: Browser.TypeDef[] = [];
    const removed = new Set<string>();

    typedefs.forEach(typedef => {
      if (Array.isArray(typedef.type)) {
        const filteredType = this.filterUnexposedTypeFromUnion(typedef.type, unexposedTypes);
        if (!filteredType.length) {
          removed.add(typedef['new-type']);
        } else {
          exposed.push({ ...typedef, type: this.flattenType(filteredType) });
        }
      } else if (unexposedTypes.has(typedef.type)) {
        removed.add(typedef['new-type']);
      } else {
        exposed.push(typedef);
      }
    });

    if (removed.size) {
      const result = this.filterTypedefs(exposed, removed);
      result.removed.forEach(s => removed.add(s));
      return { exposed: result.exposed, removed };
    }

    return { exposed, removed };
  }
}
