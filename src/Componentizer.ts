import * as webidl2 from 'webidl2';
import * as Types from './Types';
import { merge, resolveExposure } from './utils';
import Components from './Components';
import ElementsMeta from './ElementsMeta';

export default class Componentizer {
  public components: Components;

  private callbackFunctions: Record<string, Types.CallbackFunction> = {};
  private callbackInterfaces: Record<string, Types.Interface> = {};
  private dictionaries: Record<string, Types.Dictionary> = {};
  private enums: Record<string, Types.Enum> = {};
  private interfaces: Record<string, Types.Interface> = {};
  private mixins: Record<string, Types.Interface> = {};
  private typedefs: Types.TypeDef[] = [];

  private partialInterfaces: Types.Interface[] = [];
  private partialMixins: Types.Interface[] = [];
  private partialDictionaries: Types.Dictionary[] = [];
  private includes: Types.Include[] = [];

  public addWebIDL(webIDL: string, filename: string) {
    const rootTypes = webidl2.parse(webIDL, { sourceName: filename });
    for (const rootType of rootTypes) {
      if (rootType.type === 'interface') {
        const converted = convertInterface(rootType);
        if (rootType.partial) {
          this.partialInterfaces.push(converted);
        } else {
          this.interfaces[rootType.name] = converted;
        }
      } else if (rootType.type === 'interface mixin') {
        const converted = convertInterfaceMixin(rootType);
        if (rootType.partial) {
          this.partialMixins.push(converted);
        } else {
          this.mixins[rootType.name] = converted;
        }
      } else if (rootType.type === 'namespace') {
        throw new Error('must handle namespaces... see TSJS-lib-generator');
      } else if (rootType.type === 'callback interface') {
        this.callbackInterfaces[rootType.name] = convertInterface(rootType);
      } else if (rootType.type === 'callback') {
        this.callbackFunctions[rootType.name] = convertCallbackFunctions(rootType);
      } else if (rootType.type === 'dictionary') {
        const converted = convertDictionary(rootType);
        if (rootType.partial) {
          this.partialDictionaries.push(converted);
        } else {
          this.dictionaries[rootType.name] = converted;
        }
      } else if (rootType.type === 'enum') {
        this.enums[rootType.name] = convertEnum(rootType);
      } else if (rootType.type === 'typedef') {
        this.typedefs.push(convertTypedef(rootType));
      } else if (rootType.type === 'includes') {
        this.includes.push(rootType);
      }
    }
  }

  public run() {
    if (this.components) {
      throw new Error('Componentizer cannot be run twice');
    }

    for (const partial of this.partialInterfaces) {
      // Fallback to mixins before every spec migrates to `partial interface mixin`.
      const base = this.interfaces[partial.name] || this.mixins[partial.name];
      if (base) {
        if (base.exposed) resolveExposure(partial, base.exposed);
        merge(base.constants, partial.constants, true);
        merge(base.methods, partial.methods, true);
        merge(base.properties, partial.properties, true);
        if (partial.typeParameters) {
          base.typeParameters = partial.typeParameters;
        }
        if (partial.extends && partial.extends !== 'Object') {
          base.extends = partial.extends;
        }
      }
    }

    for (const partial of this.partialMixins) {
      const base = this.mixins[partial.name];
      if (base) {
        if (base.exposed) resolveExposure(partial, base.exposed);
        merge(base.constants, partial.constants, true);
        merge(base.methods, partial.methods, true);
        merge(base.properties, partial.properties, true);
      }
    }

    for (const partial of this.partialDictionaries) {
      const base = this.dictionaries![partial.name];
      if (base) {
        merge(base.members, partial.members, true);
      }
    }

    for (const include of this.includes) {
      const target = this.interfaces[include.target];
      if (target) {
        if (!target.implements) {
          target.implements = [include.includes];
        } else if (!target.implements.includes(include.includes)) {
          target.implements.push(include.includes);
        }
      }
    }

    const allNonCallbackInterfaces = Object.values(this.interfaces).concat(Object.values(this.mixins));
    for (const i of allNonCallbackInterfaces) {
      const elementMeta = ElementsMeta.get(i.name);
      if (elementMeta) {
        i.element = elementMeta;
      }
    }

    this.components = new Components({
      callbackFunctions: this.callbackFunctions,
      callbackInterfaces: this.callbackInterfaces,
      dictionaries: this.dictionaries,
      enums: this.enums,
      interfaces: this.interfaces,
      mixins: this.mixins,
      typedefs: this.typedefs,
    });

    return this.components;
  }
}

function hasExtAttr(extAttrs: webidl2.ExtendedAttribute[], name: string) {
  return extAttrs.some(extAttr => extAttr.name === name);
}

function getExtAttr(extAttrs: webidl2.ExtendedAttribute[], name: string) {
  const attr = extAttrs.find(extAttr => extAttr.name === name);
  if (!attr || !attr.rhs) {
    return [];
  }
  return attr.rhs.type === 'identifier-list' ? attr.rhs.value.map(item => item.value) : [attr.rhs.value];
}

function getExtAttrConcatenated(extAttrs: webidl2.ExtendedAttribute[], name: string) {
  const extAttr = getExtAttr(extAttrs, name);
  if (extAttr.length) {
    return extAttr.join(' ');
  }
}

function convertInterface(i: webidl2.InterfaceType) {
  const result = convertInterfaceCommon(i);
  if (i.inheritance) {
    result.extends = i.inheritance;
  }
  return result;
}

function convertInterfaceMixin(i: webidl2.InterfaceMixinType) {
  const result = convertInterfaceCommon(i);
  result.mixin = true;
  result.noInterfaceObject = 1;
  return result;
}

function convertInterfaceCommon(i: webidl2.InterfaceType | webidl2.InterfaceMixinType) {
  const result: Types.Interface = {
    name: i.name,
    extends: 'Object',
    constants: {},
    methods: {},
    anonymousMethods: [],
    properties: {},
    constructor: getConstructor(i.members, i.name) || getOldStyleConstructor(i.extAttrs, i.name),
    namedConstructor: getNamedConstructor(i.extAttrs, i.name),
    exposed: getExtAttrConcatenated(i.extAttrs, 'Exposed'),
    global: getExtAttrConcatenated(i.extAttrs, 'Global'),
    noInterfaceObject: hasExtAttr(i.extAttrs, 'NoInterfaceObject') ? 1 : undefined,
    legacyWindowAlias: getExtAttr(i.extAttrs, 'LegacyWindowAlias'),
    legacyNamespace: getExtAttr(i.extAttrs, 'LegacyNamespace')[0],
  };
  if (!result.exposed && i.type === 'interface' && !i.partial) {
    result.exposed = 'Window';
  }
  for (const member of i.members) {
    if (member.type === 'const') {
      result.constants![member.name] = convertConstantMember(member);
    } else if (member.type === 'attribute') {
      const { properties } = result;
      const prop = convertAttribute(member, result.exposed);

      if (member.name in properties!) {
        throw new Error('need to handle adding to namesake... see TSJS-lib-generator');
      } else {
        properties![member.name] = prop;
      }
    } else if (member.type === 'operation') {
      const operation = convertOperation(member, result.exposed);
      const { methods } = result;
      if (!member.name) {
        result.anonymousMethods!.push(operation);
      } else if (methods.hasOwnProperty(member.name)) {
        methods[member.name].signatures.push(...operation.signatures);
      } else {
        methods[member.name] = operation as Types.Method;
      }
    } else if (member.type === 'iterable' || member.type === 'maplike' || member.type === 'setlike') {
      result.iterator = {
        kind: member.type,
        readonly: member.readonly,
        type: member.idlType.map(convertIdlType),
      };
    }
  }

  return result;
}

function getConstructor(members: webidl2.IDLInterfaceMemberType[], parent: string) {
  const constructor: Types.Constructor = {
    signatures: [],
  };
  for (const member of members) {
    if (member.type === 'constructor') {
      constructor.signatures.push({
        type: parent,
        params: member.arguments.map(convertArgument),
      });
    }
  }
  if (constructor.signatures.length) {
    return constructor;
  }
}

function getOldStyleConstructor(extAttrs: webidl2.ExtendedAttribute[], parent: string) {
  const constructor: Types.Constructor = {
    signatures: [],
  };
  for (const extAttr of extAttrs) {
    if (extAttr.name === 'Constructor') {
      constructor.signatures.push({
        type: parent,
        params: extAttr.arguments.map(convertArgument),
      });
    }
  }
  if (constructor.signatures.length) {
    return constructor;
  }
}

function getNamedConstructor(
  extAttrs: webidl2.ExtendedAttribute[],
  parent: string,
): Types.NamedConstructor | undefined {
  for (const extAttr of extAttrs) {
    if (extAttr.name === 'NamedConstructor' && extAttr.rhs && typeof extAttr.rhs.value === 'string') {
      return {
        name: extAttr.rhs.value,
        signatures: [
          {
            type: parent,
            params: extAttr.arguments ? extAttr.arguments.map(convertArgument) : [],
          },
        ],
      };
    }
  }
}

function convertOperation(
  operation: webidl2.OperationMemberType,
  inheritedExposure: string | undefined,
): Types.AnonymousMethod | Types.Method {
  const isStringifier = operation.special === 'stringifier';
  const type = operation.idlType
    ? convertIdlType(operation.idlType)
    : isStringifier
    ? { type: 'DOMString' }
    : undefined;
  if (!type) {
    throw new Error('Unexpected anonymous operation');
  }
  return {
    name: operation.name || undefined,
    signatures: [
      {
        ...type,
        params: operation.arguments.map(convertArgument),
      },
    ],
    getter: operation.special === 'getter' ? 1 : undefined,
    static: operation.special === 'static' ? 1 : undefined,
    stringifier: isStringifier ? 1 : undefined,
    exposed: getExtAttrConcatenated(operation.extAttrs, 'Exposed') || inheritedExposure,
  };
}

function convertCallbackFunctions(c: webidl2.CallbackType): Types.CallbackFunction {
  return {
    name: c.name,
    callback: 1,
    signatures: [
      {
        ...convertIdlType(c.idlType),
        params: c.arguments.map(convertArgument),
      },
    ],
  };
}

function convertArgument(arg: webidl2.Argument): Types.Param {
  return {
    name: arg.name,
    ...convertIdlType(arg.idlType),
    optional: arg.optional ? 1 : undefined,
    variadic: arg.variadic ? 1 : undefined,
  };
}

function convertAttribute(
  attribute: webidl2.AttributeMemberType,
  inheritedExposure: string | undefined,
): Types.Property {
  const isEventHandler =
    typeof attribute.idlType.idlType === 'string' && attribute.idlType.idlType.endsWith('EventHandler'); // includes OnErrorEventHandler
  return {
    name: attribute.name,
    ...convertIdlType(attribute.idlType),
    static: attribute.special === 'static' ? 1 : undefined,
    stringifier: attribute.special === 'stringifier' ? 1 : undefined,
    readOnly: attribute.readonly ? 1 : undefined,
    eventHandler: isEventHandler ? attribute.name.slice(2) : undefined,
    exposed: getExtAttrConcatenated(attribute.extAttrs, 'Exposed') || inheritedExposure,
  };
}

function convertConstantMember(constant: webidl2.ConstantMemberType): Types.Constant {
  return {
    name: constant.name,
    type: constant.idlType.idlType as string,
    value: convertConstantValue(constant.value),
  };
}

function convertConstantValue(value: webidl2.ValueDescription): string {
  switch (value.type) {
    case 'string':
      return `"${value.value}"`;
    case 'boolean':
    case 'number':
    case 'sequence':
      return `${value.value}`;
    case 'null':
    case 'NaN':
      return value.type;
    case 'Infinity':
      return (value.negative ? '-' : '') + value.type;
    default:
      throw new Error('Not implemented');
  }
}

function convertDictionary(dictionary: webidl2.DictionaryType) {
  const result: Types.Dictionary = {
    name: dictionary.name,
    extends: dictionary.inheritance || 'Object',
    members: {},
  };
  for (const member of dictionary.members) {
    result.members[member.name] = convertDictionaryMember(member);
  }
  return result;
}

function convertDictionaryMember(member: webidl2.DictionaryMemberType): Types.Member {
  return {
    name: member.name,
    default: member.default ? convertConstantValue(member.default) : undefined,
    required: member.required ? 1 : undefined,
    ...convertIdlType(member.idlType),
  };
}

function convertEnum(en: webidl2.EnumType): Types.Enum {
  return {
    name: en.name,
    value: en.values.map(value => value.value),
  };
}

function convertTypedef(typedef: webidl2.TypedefType): Types.TypeDef {
  return {
    newType: typedef.name,
    ...convertIdlType(typedef.idlType),
  };
}

function convertIdlType(i: webidl2.IDLTypeDescription): Types.Typed {
  if (typeof i.idlType === 'string') {
    return {
      type: i.idlType,
      nullable: i.nullable ? 1 : undefined,
    };
  }
  if (i.generic) {
    return {
      type: i.generic,
      subtype: !Array.isArray(i.idlType)
        ? convertIdlType(i.idlType)
        : i.idlType.length === 1
        ? convertIdlType(i.idlType[0])
        : i.idlType.map(convertIdlType),
      nullable: i.nullable ? 1 : undefined,
    };
  }
  if (i.union) {
    return {
      type: (i.idlType as webidl2.IDLTypeDescription[]).map(convertIdlType),
      nullable: i.nullable ? 1 : undefined,
    };
  }
  throw new Error('Unsupported IDL type structure');
}
