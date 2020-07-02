import * as Fs from 'fs';
import Components from './Components';
import * as Types from './Types';
import { filter, exposesTo, followTypeReferences, mapToArray } from './utils';
import IComponentFilters, { IComponentFilter } from './interfaces/IComponentFilters';

export default class ComponentCleaner {
  private referencedIDLTypes: Set<string>;
  private unexposedTypes = new Set<string>();
  private readonly components: Components;
  private readonly componentFilteringPath: string;

  constructor(components: Components, componentFilteringPath?: string) {
    this.components = components;
    this.componentFilteringPath = componentFilteringPath || '';
  }

  public run() {
    this.runComponentFiltering();

    const original = this.components;
    const filtered = new Components();
    const target = 'Window';

    filtered.interfaces = filter(original.interfaces, i => exposesTo(i, target));
    const unexposedInterfaces = mapToArray(original.interfaces).filter(i => !i.exposed || !i.exposed.includes(target));
    for (const i of unexposedInterfaces) {
      this.unexposedTypes.add(i.name);
    }

    this.referencedIDLTypes = new Set([...followTypeReferences(original, filtered.interfaces!)]);

    const referencedTypes = original.typedefs.filter(t => this.referencedIDLTypes.has(t.newType));
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
      if (Array.isArray(c.signatures)) {
        let signatures = c.signatures.map((s: Types.Signature) =>
          this.filterUnknownTypeFromSignature(s, this.unexposedTypes),
        );

        if (signatures.length > 1) {
          signatures = this.filterDuplicateSignatures(signatures);
        }

        return { ...c, signatures };
      }
    });

    final.awaitedSupers = original.awaitedSupers;
    final.awaitedIsolates = original.awaitedIsolates;

    this.components.load(final);

    return this.components;
  }

  private runComponentFiltering() {
    if (!this.componentFilteringPath) return;
    const componentFilters: IComponentFilters = JSON.parse(Fs.readFileSync(this.componentFilteringPath, 'utf-8'));

    const callbackInterfaceNames = Object.keys(this.components.callbackInterfaces);
    const interfacesNames = Object.keys(this.components.interfaces);
    const mixinNames = Object.keys(this.components.mixins);
    const names = [...callbackInterfaceNames, ...interfacesNames, ...mixinNames];
    names.forEach(name => {
      const i = this.components.allInterfacesMap[name];
      const componentFilter: IComponentFilter = componentFilters[name];

      if (!componentFilter) {
        console.log(`${name} IS MISSING from Component Filters`);
      }
      if (!componentFilter || !componentFilter.isEnabled) {
        delete this.components.interfaces[name];
        delete this.components.callbackInterfaces[name];
        delete this.components.mixins[name];
        return;
      }

      if (i.extends && componentFilters[i.extends] && !componentFilters[i.extends].isEnabled) {
        i.extends = 'Object';
      }

      if (i.implements) {
        i.implements = i.implements.filter(n => {
          return !componentFilters[n] || componentFilters[n].isEnabled;
        });
      }

      Object.keys(i.properties!).forEach(pName => {
        const cFilter = componentFilter.propertiesByName[pName];
        if (!componentFilter.isEnabled || (cFilter && !cFilter.isEnabled)) {
          delete i.properties![pName];
          return;
        }
        if (!cFilter) return;
        if (!cFilter.isWritable) {
          i.properties![pName].readOnly = 1;
        }
        if (cFilter.isAbstract) {
          i.properties![pName].isAbstract = 1;
        }
      });

      Object.keys(i.methods!).forEach(mName => {
        const cFilter = componentFilter.methodsByName[mName];
        if (!componentFilter.isEnabled || (cFilter && !cFilter.isEnabled)) {
          delete i.methods![mName];
          return;
        }
        if (!cFilter) return;
        if (cFilter.isAbstract) {
          i.methods![mName].isAbstract = 1;
        }
      });
    });
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

  private filterUnexposedTypeFromUnion(union: Types.Typed[], unexposedTypes: Set<string>): Types.Typed[] {
    const result: Types.Typed[] = [];
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

  private flattenType(type: Types.Typed[]) {
    if (type.length > 1) {
      return type;
    }
    if (type.length === 1) {
      return type[0].type;
    }
    throw new Error('Cannot process empty union type');
  }

  private filterDuplicateSignatures(signatures: Types.Signature[]) {
    if (!signatures.length || signatures.length <= 1) return signatures;

    let maxParamsSignature: Types.Signature | undefined = signatures.find(x => x.params && x.params.length);
    if (!maxParamsSignature) return signatures[0];

    for (const signature of signatures) {
      if (!signature.params) continue;
      const params = signature.params;
      if (params.length > maxParamsSignature.params!.length) {
        maxParamsSignature = signature;
      }
    }

    for (const param of maxParamsSignature.params!) {
      let isInAllSignatures = true;
      for (const signature of signatures) {
        if (!signature.params) {
          isInAllSignatures = false;
        } else {
          const matchingParam = signature.params.find(x => x.name === param.name);
          if (!matchingParam || matchingParam.optional) {
            isInAllSignatures = false;
          }
        }
      }
      if (!isInAllSignatures) {
        param.optional = 1;
      }
    }

    return [maxParamsSignature];
  }

  private filterUnknownTypeFromSignature(signature: Types.Signature, unexposedTypes: Set<string>) {
    if (!signature.params) {
      return signature;
    }
    const params: Types.Param[] = [];
    for (const p of signature.params) {
      const type = Array.isArray(p.type) ? p.type : [p];
      const filtered = this.filterUnexposedTypeFromUnion(type, unexposedTypes);
      if (filtered.length >= 1) {
        params.push({ ...p, type: this.flattenType(filtered) });
      } else if (!p.optional) {
        throw new Error('A non-optional parameter has unknown type');
      } else {
        // safe to skip
        break;
      }
    }
    return { ...signature, params };
  }

  /**
   * Filters unexposed types out from typedefs and
   * removes typedefs that only contains unexposed type names
   * @param typedefs target typedef array
   * @param unexposedTypes type names to be filtered out
   */
  private filterTypedefs(
    typedefs: Types.TypeDef[],
    unexposedTypes: Set<string>,
  ): { exposed: Types.TypeDef[]; removed: Set<string> } {
    const exposed: Types.TypeDef[] = [];
    const removed = new Set<string>();

    typedefs.forEach(typedef => {
      if (Array.isArray(typedef.type)) {
        const filteredType = this.filterUnexposedTypeFromUnion(typedef.type, unexposedTypes);
        if (!filteredType.length) {
          removed.add(typedef.newType);
        } else {
          exposed.push({ ...typedef, type: this.flattenType(filteredType) });
        }
      } else if (unexposedTypes.has(typedef.type)) {
        removed.add(typedef.newType);
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
