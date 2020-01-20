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
  'treat-null-as'?: string;
}

export interface Signature extends Typed {
  param?: Param[];
  'param-min-required'?: number;
  deprecated?: 1;
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
  'event-handler'?: string;
  'read-only'?: 1;
  replaceable?: string;
  'put-forwards'?: string;
  stringifier?: 1;
  tags?: string;
  'property-descriptor-not-enumerable'?: string;
  'content-attribute'?: string;
  'content-attribute-reflects'?: string;
  'content-attribute-value-syntax'?: string;
  'content-attribute-enum-values'?: string;
  'content-attribute-aliases'?: string;
  'content-attribute-boolean'?: string;
  'css-property'?: string;
  'css-property-enum-values'?: string;
  'css-property-initial'?: string;
  'css-property-value-syntax'?: string;
  'css-property-shorthand'?: string;
  'css-property-subproperties'?: string;
  'css-property-animatable'?: string;
  'css-property-aliases'?: string;
  'lenient-this'?: string;
  'treat-null-as'?: string;
  'event-handler-map-to-window'?: string;
  static?: 1;
  comment?: string;
  required?: 1;
  specs?: string;
  deprecated?: 1;
  interop?: 1;
  exposed?: string;
  constant?: 1;
}

export interface Event {
  name: string;
  type: string;
  dispatch?: string;
  'skips-window'?: string;
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
  'serializer-info'?: string;
  comment?: string;
  specs?: string;
  exposed?: string;
  deprecated?: 1;
  signature: Signature[];
}

export interface Method extends AnonymousMethod {
  name: string;
}

export interface CallbackFunction {
  name: string;
  callback: 1;
  signature: Signature[];
  tags?: string;
  specs?: string;
  'type-parameters'?: TypeParameter[];
}

export interface Constructor {
  signature: Signature[];
  comment?: string;
  specs?: string;
}

export interface NamedConstructor {
  name: string;
  signature: Signature[];
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

export interface ParsedAttribute {
  'enum-values'?: string;
  name: string;
  'value-syntax'?: string;
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
  constants?: {
    constant: Record<string, Constant>;
  };
  methods: {
    method: Record<string, Method>;
  };
  events?: {
    event: Event[];
  };
  'attributeless-events'?: {
    event: Event[];
  };
  properties?: {
    property: Record<string, Property>;
    namesakes?: Record<string, Property[]>;
  };
  constructor?: Constructor;
  'secure-context'?: 1;
  implements?: string[];
  static?: 1;
  'anonymous-methods'?: {
    method: AnonymousMethod[];
  };
  'anonymous-content-attributes'?: {
    parsedattribute: ParsedAttribute[];
  };
  element?: IElementMeta;
  'named-constructor'?: NamedConstructor;
  exposed?: string;
  tags?: string;
  'implicit-this'?: 1;
  'primary-global'?: string;
  'no-interface-object'?: 1;
  global?: string;
  'type-parameters'?: TypeParameter[];
  specs?: string;
  iterable?: 'value' | 'pair' | 'pair-iterator';
  iterator?: Iterator;
  'legacy-window-alias'?: string[];
  'legacy-namespace'?: string;
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
  comments?: {
    comment: Record<string, string>;
  };
}

export interface Enum {
  name: string;
  value: string[];
  specs?: string;
  'legacy-namespace'?: string;
}

export interface TypeDef extends Typed {
  'new-type': string;
  deprecated?: 1;
  'legacy-namespace'?: string;
  'type-parameters'?: TypeParameter[];
}

export interface Dictionary {
  name: string;
  extends: string;
  members: {
    member: Record<string, Member>;
  };
  specs?: string;
  'type-parameters'?: TypeParameter[];
  'legacy-namespace'?: string;
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
  namespaces: Interface[];
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
