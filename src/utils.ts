import * as Types from './Types';

// Extended types used but not defined in the spec
export const bufferSourceTypes = new Set([
  'ArrayBuffer',
  'ArrayBufferView',
  'DataView',
  'Int8Array',
  'Uint8Array',
  'Int16Array',
  'Uint16Array',
  'Uint8ClampedArray',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array',
]);
export const integerTypes = new Set([
  'byte',
  'octet',
  'short',
  'unsigned short',
  'long',
  'unsigned long',
  'long long',
  'unsigned long long',
]);
export const stringTypes = new Set(['ByteString', 'DOMString', 'USVString', 'CSSOMString']);
const floatTypes = new Set(['float', 'unrestricted float', 'double', 'unrestricted double']);
const sameTypes = new Set(['any', 'boolean', 'Date', 'Function', 'Promise', 'void']);
export const baseTypeConversionMap = new Map<string, string>([
  ...[...bufferSourceTypes].map(type => [type, type] as [string, string]),
  ...[...integerTypes].map(type => [type, 'number'] as [string, string]),
  ...[...floatTypes].map(type => [type, 'number'] as [string, string]),
  ...[...stringTypes].map(type => [type, 'string'] as [string, string]),
  ...[...sameTypes].map(type => [type, type] as [string, string]),
  ['DOMStringMap', 'Record<string, string>'],
  ['object', 'any'],
  ['sequence', 'Array'],
  ['record', 'Record'],
  ['Void', 'void'],
  ['FrozenArray', 'ReadonlyArray'],
  ['EventHandler', 'EventHandler'],
]);

export function filter<T>(obj: T, fn: (o: any, n: string | undefined) => boolean): T {
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      return (mapDefined(obj, e => (fn(e, undefined) ? filter(e, fn) : undefined)) as any) as T;
    }
    const result: any = {};
    for (const e in obj) {
      if (fn(obj[e], e)) {
        result[e] = filter(obj[e], fn);
      }
    }
    return result;
  }
  return obj;
}

export function exposesTo(o: { exposed?: string }, target: string) {
  if (!o || typeof o.exposed !== 'string') {
    return true;
  }
  return o.exposed.includes(target);
}

export function merge<T>(target: T, src: T, shallow?: boolean): T {
  if (typeof target !== 'object' || typeof src !== 'object') {
    return src;
  }
  for (const k in src) {
    if (Object.getOwnPropertyDescriptor(src, k)) {
      if (Object.getOwnPropertyDescriptor(target, k)) {
        const targetProp = target[k];
        const srcProp = src[k];
        if (Array.isArray(targetProp) && Array.isArray(srcProp)) {
          mergeNamedArrays(targetProp, srcProp);
        } else {
          if (Array.isArray(targetProp) !== Array.isArray(srcProp)) {
            throw new Error(`Mismatch on property: ${k}${JSON.stringify(srcProp)}`);
          }
          if (shallow && typeof (target[k] as any).name === 'string' && typeof (src[k] as any).name === 'string') {
            target[k] = src[k];
          } else {
            target[k] = merge(target[k], src[k], shallow);
          }
        }
      } else {
        target[k] = src[k];
      }
    }
  }
  return target;
}

function mergeNamedArrays<T extends { name: string; newType: string }>(targetProp: T[], srcProp: T[]) {
  const mapped: any = {};

  targetProp.forEach(t => {
    const name = t.name || t.newType;
    if (name) {
      mapped[name] = t;
    }
  });

  srcProp.forEach(s => {
    const name = s.name || s.newType;
    if (name && mapped[name]) {
      merge(mapped[name], s);
    } else {
      targetProp.push(s);
    }
  });
}

export function distinct<T>(a: T[]): T[] {
  return Array.from(new Set(a).values());
}

export function mapToArray<T>(m: Record<string, T>): T[] {
  return Object.keys(m || {}).map(k => m[k]);
}

export function arrayToMap<T, U>(
  array: ReadonlyArray<T>,
  makeKey: (value: T) => string,
  makeValue: (value: T) => U,
): Record<string, U> {
  const result: Record<string, U> = {};
  for (const value of array) {
    result[makeKey(value)] = makeValue(value);
  }
  return result;
}

export function map<T, U>(obj: Record<string, T> | undefined, fn: (o: T) => U): U[] {
  return Object.keys(obj || {}).map(k => fn(obj![k]));
}

export function mapDefined<T, U>(array: ReadonlyArray<T> | undefined, mapFn: (x: T, i: number) => U | undefined): U[] {
  const result: U[] = [];
  if (array) {
    for (let i = 0; i < array.length; i += 1) {
      const mapped = mapFn(array[i], i);
      if (mapped !== undefined) {
        result.push(mapped);
      }
    }
  }
  return result;
}

export function toNameMap<T extends { name: string }>(array: T[]) {
  const result: Record<string, T> = {};
  for (const value of array) {
    if (!value.name) {
      console.log('value: ', value);
    }
    result[value.name] = value;
  }
  return result;
}

export function isArray(value: any): value is ReadonlyArray<{}> {
  return Array.isArray ? Array.isArray(value) : value instanceof Array;
}

export function flatMap<T, U>(
  array: ReadonlyArray<T> | undefined,
  mapfn: (x: T, i: number) => U | ReadonlyArray<U> | undefined,
): U[] {
  let result: U[] | undefined;
  if (array) {
    result = [];
    for (let i = 0; i < array.length; i += 1) {
      const v = mapfn(array[i], i);
      if (v) {
        if (isArray(v)) {
          result.push(...v);
        } else {
          result.push(v);
        }
      }
    }
  }
  return result || [];
}

export function concat<T>(a: T[] | undefined, b: T[] | undefined): T[] {
  return !a ? b || [] : a.concat(b || []);
}

export function resolveExposure(obj: any, exposure: string, override?: boolean) {
  if (!exposure) {
    throw new Error('No exposure set');
  }
  if ('exposed' in obj && (override || obj.exposed === undefined)) {
    obj.exposed = exposure;
  }
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key]) {
      resolveExposure(obj[key], exposure, override);
    }
  }
}

function collectTypeReferences(obj: any): string[] {
  const collection: string[] = [];
  if (typeof obj !== 'object') {
    return collection;
  }
  if (Array.isArray(obj)) {
    return collection.concat(...obj.map(collectTypeReferences));
  }

  if (typeof obj.type === 'string') {
    collection.push(obj.type);
  }
  if (Array.isArray(obj.implements)) {
    collection.push(...obj.implements);
  }
  if (typeof obj.extends === 'string') {
    collection.push(obj.extends);
  }

  for (const e of Object.keys(obj)) {
    collection.push(...collectTypeReferences(obj[e]));
  }
  return collection;
}

function getNonValueTypeMap(webidl: Types.WebIdl) {
  const namedTypes: { name: string }[] = [
    ...mapToArray(webidl.callbackFunctions!),
    ...mapToArray(webidl.callbackInterfaces!),
    ...mapToArray(webidl.dictionaries!),
    ...mapToArray(webidl.enums!),
    ...mapToArray(webidl.mixins!),
  ];
  const mapped = new Map(namedTypes.map(t => [t.name, t] as [string, any]));
  webidl.typedefs!.map(typedef => mapped.set(typedef.newType, typedef));
  return mapped;
}

export function followTypeReferences(webidl: Types.WebIdl, filteredInterfaces: Record<string, Types.Interface>) {
  const set = new Set<string>();
  const mapped = getNonValueTypeMap(webidl);

  new Set(collectTypeReferences(filteredInterfaces)).forEach(follow);
  return set;

  function follow(reference: string) {
    if (baseTypeConversionMap.has(reference) || reference in filteredInterfaces) {
      return;
    }
    const type = mapped.get(reference);
    if (!type) {
      return;
    }
    if (!set.has(type.name || type.newType)) {
      set.add(type.name || type.newType);
      collectTypeReferences(type).forEach(follow);
    }
  }
}

export function compareName(c1: { name: string }, c2: { name: string }) {
  const eventListenerRegexp = /^(add|remove)EventListener$/;
  if (!c1.name.match(eventListenerRegexp) && c2.name.match(eventListenerRegexp)) return -1;
  return c1.name < c2.name ? -1 : c1.name > c2.name ? 1 : 0;
}

function typeParameterWithDefault(type: Types.TypeParameter, convertToIType: boolean = false) {
  const extendsStr = type.extends ? ` extends ${convertToIType ? toIType(type.extends) : type.extends}` : '';
  const defaultStr = type.default ? ` = ${convertToIType ? toIType(type.default) : type.default}` : '';
  return `${type.name}${extendsStr}${defaultStr}`;
}

export function getNameWithTypeParameter(
  typeParameter: Types.TypeParameter[] | undefined,
  name: string,
  convertToIType: boolean = false,
) {
  const iName = convertToIType ? toIType(name) : name;
  if (!typeParameter) return iName;

  return `${iName}<${typeParameter.map(p => typeParameterWithDefault(p, true)).join(', ')}>`;
}

///////

export function isCustomType(type: string): boolean {
  if (['Iterable', 'Promise', 'ArrayBufferView', 'ArrayBuffer', 'T', 'Record'].includes(type) || type.startsWith('Record<')) return false;
  return type[0] === type[0].toUpperCase();
}

export function isNativeType(type: string): boolean {
  return !isCustomType(type);
}

export function toIType(type: string) {
  if (!isCustomType(type)) return type;
  return type[0] === 'I' && type[1] === type[1].toUpperCase() ? type : `I${type}`;
}

export function makeNullable(originalType: string) {
  switch (originalType) {
    case 'any':
      return 'any';
    case 'void':
      return 'void';
    default:
      if (originalType.includes('| null')) return originalType;
      if (originalType.includes('=>')) return `(${originalType}) | null`;
      return `${originalType} | null`;
  }
}

export function makeArrayType(elementType: string, obj: Types.Typed): string {
  if (obj.subtype && !Array.isArray(obj.subtype) && obj.subtype.type === 'float') {
    return 'number[] | Float32Array';
  }

  return elementType.includes('|') ? `(${elementType})[]` : `${elementType}[]`;
}

export function arrayify(obj: undefined | Types.Typed | Types.Typed[]) {
  if (!obj) {
    return [];
  }
  if (!Array.isArray(obj)) {
    return [obj];
  }
  return obj;
}

export function nameWithForwardedTypes(i: Types.Interface, convertToIType: boolean = false) {
  const typeParameters = i.typeParameters;

  if (!typeParameters) return convertToIType ? toIType(i.name) : i.name;
  if (!typeParameters.length) return convertToIType ? toIType(i.name) : i.name;

  return `${i.name}<${typeParameters.map(t => t.name)}>`;
}

export function isEventHandler(p: Types.Property) {
  return typeof p.eventHandler === 'string';
}
