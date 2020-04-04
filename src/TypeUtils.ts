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

export default class TypeUtils {
  public static extractCustomTypes(type: Types.Typed): string[] {
    const names: string[] = [];
    if (typeof type.type === 'string') {
      names.push(this.convertDomTypeToTsTypeSimple(type.type));
    } else {
      for (const t of type.type) {
        names.push(...this.extractCustomTypes(typeof t === 'string' ? { type: t } : t));
      }
      if (names.find(t => t === 'any')) {
        names.splice(0, names.length);
      }
    }
    arrayify(type.subtype).forEach(t => names.push(...this.extractCustomTypes(t)));
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
    const customTypes: string[] = [];
    params.forEach(p => {
      if (p.type === 'Promise' && !Array.isArray(p.subtype)) {
        p = { name: p.name, type: [p.subtype!, p] };
      }
      customTypes.push(...this.extractCustomTypes(p));
    });
    return Array.from(new Set(customTypes));
  }

  /// Get typescript type using object dom type, object name, and it's associated interface name
  public static convertDomTypeToTsType(obj: Types.Typed, convertToIType: boolean = false): string {
    if (!obj.type) throw new Error(`Missing type ${JSON.stringify(obj)}`);
    const type = this.convertDomTypeToTsTypeWorker(obj, convertToIType);
    return type.nullable ? makeNullable(type.name) : type.name;
  }

  public static convertDomTypeToTsTypeSimple(objDomType: string): string {
    if (objDomType === 'sequence') {
      return 'Iterable';
    }
    if (baseTypeConversionMap.has(objDomType)) {
      return baseTypeConversionMap.get(objDomType)!;
    }
    switch (objDomType) {
      case 'DOMHighResTimeStamp':
        return 'number';
      case 'DOMTimeStamp':
        return 'number';
    }

    return objDomType;
  }

  private static convertDomTypeToTsTypeWorker(
    obj: Types.Typed,
    convertToIType: boolean = false,
  ): { name: string; nullable: boolean } {
    let type;
    if (typeof obj.type === 'string') {
      const name = this.convertDomTypeToTsTypeSimple(obj.type);
      type = { name: convertToIType ? toIType(name) : name, nullable: !!obj.nullable };
    } else {
      const typ = obj.type.map(t => {
        const typeObj = typeof t === 'string' ? { type: t } : t;
        return this.convertDomTypeToTsTypeWorker(typeObj, convertToIType);
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
}
