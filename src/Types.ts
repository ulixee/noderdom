import * as webidl2 from 'webidl2';
import { IElementMeta } from './ElementsMeta';

export interface Typed {
  type: string | Typed[];
  subtype?: Typed | Typed[];
  nullable?: 1;
}

export interface Param extends Typed {
  name: string;
  optional?: 1;
  variadic?: 1;
}

export interface Signature extends Typed {
  params?: Param[];
}

export interface Member extends Typed {
  name: string;
  default?: string;
  required?: 1;
  specs?: string;
  comment?: string;
}

export interface Property extends Typed {
  name: string;
  eventHandler?: string;
  readOnly?: 1;
  replaceable?: string;
  putForwards?: string;
  stringifier?: 1;
  tags?: string;
  static?: 1;
  comment?: string;
  required?: 1;
  specs?: string;
  interop?: 1;
  exposed?: string;
  constant?: 1;
  isLocal?: 1;
}

export interface Event {
  name: string;
  type: string;
  dispatch?: string;
  skipsWindow?: string;
  bubbles?: 1;
  cancelable?: 1;
  follows?: string;
  precedes?: string;
  tags?: string;
  aliases?: string;
  specs?: string;
}

export interface AnonymousMethod {
  tags?: string;
  static?: 1;
  getter?: 1;
  stringifier?: 1;
  serializer?: 1;
  serializerInfo?: string;
  comment?: string;
  specs?: string;
  exposed?: string;
  signatures: Signature[];
  isLocal?: 1;
}

export interface Method extends AnonymousMethod {
  name: string;
}

export interface CallbackFunction {
  name: string;
  callback: 1;
  signatures: Signature[];
  tags?: string;
  specs?: string;
  typeParameters?: TypeParameter[];
}

export interface Constructor {
  signatures: Signature[];
  comment?: string;
  specs?: string;
}

export interface NamedConstructor {
  name: string;
  signatures: Signature[];
  specs?: string;
}

export interface Constant extends Typed {
  name: string;
  value: string;
  tags?: string;
  exposed?: string;
  specs?: string;
  comment?: string;
}

export interface TypeParameter {
  name: string;
  extends?: string;
  default?: string;
}

export interface Interface {
  name: string;
  mixin?: boolean;
  extends: string;
  comment?: string;
  constants?: Record<string, Constant>;
  methods: Record<string, Method>;
  events?: Event[];
  attributelessEvents?: Event[];
  properties?: Record<string, Property>;
  constructor?: Constructor;
  implements?: string[];
  static?: 1;
  anonymousMethods?: AnonymousMethod[];
  element?: IElementMeta;
  namedConstructor?: NamedConstructor;
  exposed?: string;
  tags?: string;
  implicitThis?: 1;
  primaryGlobal?: string;
  noInterfaceObject?: 1;
  global?: string;
  typeParameters?: TypeParameter[];
  specs?: string;
  iterable?: 'value' | 'pair' | 'pair-iterator';
  iterator?: Iterator;
  legacyWindowAlias?: string[];
  legacyNamespace?: string;
  nested?: {
    interfaces: Interface[];
    enums: Enum[];
    dictionaries: Dictionary[];
    typedefs: TypeDef[];
  };
}

export interface Iterator {
  kind: 'iterable' | 'setlike' | 'maplike';
  readonly: boolean;
  type: Typed[];
  comments?: Record<string, string>;
}

export interface Enum {
  name: string;
  value: string[];
  specs?: string;
  legacyNamespace?: string;
}

export interface TypeDef extends Typed {
  newType: string;
  legacyNamespace?: string;
  typeParameters?: TypeParameter[];
}

export interface Dictionary {
  name: string;
  extends: string;
  members: Record<string, Member>;
  specs?: string;
  typeParameters?: TypeParameter[];
  legacyNamespace?: string;
}

export type Include = webidl2.IncludesType;

export interface WebIdl {
  callbackFunctions: Record<string, CallbackFunction>;
  callbackInterfaces: Record<string, Interface>;
  dictionaries: Record<string, Dictionary>;
  enums: Record<string, Enum>;
  interfaces: Record<string, Interface>;
  mixins: Record<string, Interface>;
  typedefs: TypeDef[];
}

// Note:
// Eventhandler's name and the eventName are not just off by "on".
// For example, handlers named "onabort" may handle "SVGAbort" event in the XML file
export interface EventHandler {
  name: string;
  eventName: string;
  eventType: string;
}

// Decide which members of a function to emit
export enum EmitScope {
  StaticOnly,
  InstanceOnly,
  All,
}
