import {
  arrayify,
  baseTypeConversionMap,
  isCustomType,
  isNativeType,
  makeArrayType,
  makeNullable,
  toIType,
} from './utils';
import * as Types from './Types';
import SuperGenerator from './SuperGenerator';

export default class TypeUtils {
  public static extractCustomTypes(type: Types.Typed, superize = true): string[] {
    let names: string[] = [];
    if (typeof type.type === 'string') {
      names.push(this.convertDomTypeToTsTypeSimple(type.type, superize));
    } else {
      for (const t of type.type) {
        names.push(...this.extractCustomTypes(typeof t === 'string' ? { type: t } : t, superize));
      }
      if (names.find(t => t === 'any')) {
        names.splice(0, names.length);
      }
    }
    arrayify(type.subtype).forEach(t => names.push(...this.extractCustomTypes(t, superize)));

    names = names.filter(isCustomType).map(n => (superize ? this.trySuperize(n) : this.tryIsolate(n)));

    return Array.from(new Set(names.filter(isCustomType)) as Set<string>);
  }

  public static extractNativeTypes(type: Types.Typed): string[] {
    const names: string[] = [];
    if (typeof type.type === 'string') {
      names.push(this.convertDomTypeToTsTypeSimple(type.type));
    } else {
      for (const t of type.type) {
        names.push(...this.extractNativeTypes(typeof t === 'string' ? { type: t } : t));
      }
      if (names.find(t => t === 'any')) {
        names.splice(0, names.length);
      }
    }
    arrayify(type.subtype).forEach(t => names.push(...this.extractNativeTypes(t)));
    return Array.from(new Set(names.filter(isNativeType)) as Set<string>);
  }

  public static extractCustomTypesFromParams(params: Types.Param[] | undefined): string[] {
    if (!params) return [];
    let customTypes: string[] = [];
    params.forEach(p => {
      if (p.type === 'Promise' && !Array.isArray(p.subtype)) {
        p = { name: p.name, type: [p.subtype!, p] };
      }
      customTypes.push(...this.extractCustomTypes(p, false));
    });

    customTypes = customTypes.map(t => this.tryIsolate(t));

    return Array.from(new Set(customTypes));
  }

  public static extractNativeTypesFromParams(params: Types.Param[] | undefined): string[] {
    if (!params) return [];
    const nativeTypes: string[] = [];
    params.forEach(p => {
      if (p.type === 'Promise' && !Array.isArray(p.subtype)) {
        p = { name: p.name, type: [p.subtype!, p] };
      }
      nativeTypes.push(...this.extractNativeTypes(p));
    });

    return Array.from(new Set(nativeTypes));
  }

  /// Get typescript type using object dom type, object name, and it's associated interface name
  public static convertDomTypeToTsType(obj: Types.Typed, convertToIType = false, superize = true): string {
    if (!obj.type) throw new Error(`Missing type ${JSON.stringify(obj)}`);
    const type = this.convertDomTypeToTsTypeWorker(obj, convertToIType, superize);
    return type.nullable ? makeNullable(type.name) : type.name;
  }

  public static convertDomTypeToTsTypeSimple(domType: string, superize = true): string {
    if (domType === 'sequence') {
      return 'Iterable';
    }
    if (baseTypeConversionMap.has(domType)) {
      return baseTypeConversionMap.get(domType)!;
    }
    switch (domType) {
      case 'DOMHighResTimeStamp':
        return 'number';
      case 'DOMTimeStamp':
        return 'number';
    }

    if (!superize) return this.tryIsolate(domType);

    return this.trySuperize(domType);
  }

  private static convertDomTypeToTsTypeWorker(
    obj: Types.Typed,
    convertToIType = false,
    superize = true,
  ): { name: string; nullable: boolean } {
    let type;
    if (typeof obj.type === 'string') {
      const name = this.convertDomTypeToTsTypeSimple(obj.type, superize);
      type = { name: convertToIType ? toIType(name) : name, nullable: !!obj.nullable };
    } else {
      const typ = obj.type.map(t => {
        const typeObj = typeof t === 'string' ? { type: t } : t;
        return this.convertDomTypeToTsTypeWorker(typeObj, convertToIType, superize);
      });
      const isAny = typ.find(t => t.name === 'any');
      if (isAny) {
        type = {
          name: 'any',
          nullable: false,
        };
      } else {
        type = {
          name: typ.map(t => t.name).join(' | '),
          nullable: !!typ.find(t => t.nullable) || !!obj.nullable,
        };
      }
    }

    const subtypes = arrayify(obj.subtype).map(t => this.convertDomTypeToTsTypeWorker(t, convertToIType));
    const subtypeString = subtypes
      .map(subtype => (subtype.nullable ? makeNullable(subtype.name) : subtype.name))
      .join(', ');

    return {
      name:
        type.name === 'Array' && subtypeString
          ? makeArrayType(subtypeString, obj)
          : `${type.name}${subtypeString ? `<${subtypeString}>` : ''}`,
      nullable: type.nullable,
    };
  }

  private static trySuperize(baseName: string) {
    // ToDo: ensure this isn't run if DomType !== 'awaited'
    return SuperGenerator.baseNames.includes(baseName) ? `Super${baseName}` : baseName;
  }

  private static tryIsolate(baseName: string) {
    // ToDo: ensure this isn't run if DomType !== 'awaited'
    return SuperGenerator.baseNames.includes(baseName) ? `${baseName}Isolate` : baseName;
  }
}
