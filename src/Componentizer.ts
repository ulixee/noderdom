import * as webidl2 from 'webidl2';
import * as Types from './types';
import { merge, resolveExposure } from './utils';
import Components from './Components';
import ElementsMeta from './ElementsMeta';
import ComponentOverrides from './ComponentOverrides';

export default class Componentizer {
  public components: Components;

  private callbackFunctions: Record<string, Types.CallbackFunction> = {};
  private callbackInterfaces: Record<string, Types.Interface> = {};
  private dictionaries: Record<string, Types.Dictionary> = {};
  private enums: Record<string, Types.Enum> = {};
  private interfaces: Record<string, Types.Interface> = ComponentOverrides.interfaces;
  private mixins: Record<string, Types.Interface> = {};
  private typedefs: Types.TypeDef[] = ComponentOverrides.typedefs;
  private namespaces: Types.Interface[] = [];

  private partialInterfaces: Types.Interface[] = ComponentOverrides.partialInterfaces;
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
        this.namespaces.push(convertNamespace(rootType));
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
        if (partial['type-parameters']) {
          base['type-parameters'] = partial['type-parameters'];
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
      namespaces: this.namespaces,
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
  result['no-interface-object'] = 1;
  return result;
}

function convertInterfaceCommon(i: webidl2.InterfaceType | webidl2.InterfaceMixinType) {
  const result: Types.Interface = {
    name: i.name,
    extends: 'Object',
    constants: { constant: {} },
    methods: { method: {} },
    'anonymous-methods': { method: [] },
    properties: { property: {}, namesakes: {} },
    constructor: getConstructor(i.members, i.name) || getOldStyleConstructor(i.extAttrs, i.name),
    'named-constructor': getNamedConstructor(i.extAttrs, i.name),
    exposed: getExtAttrConcatenated(i.extAttrs, 'Exposed'),
    global: getExtAttrConcatenated(i.extAttrs, 'Global'),
    'no-interface-object': hasExtAttr(i.extAttrs, 'NoInterfaceObject') ? 1 : undefined,
    'legacy-window-alias': getExtAttr(i.extAttrs, 'LegacyWindowAlias'),
    'legacy-namespace': getExtAttr(i.extAttrs, 'LegacyNamespace')[0],
  };
  if (!result.exposed && i.type === 'interface' && !i.partial) {
    result.exposed = 'Window';
  }
  for (const member of i.members) {
    if (member.type === 'const') {
      result.constants!.constant[member.name] = convertConstantMember(member);
    } else if (member.type === 'attribute') {
      const { properties } = result;
      const prop = convertAttribute(member, result.exposed);

      if (member.name in properties!.namesakes!) {
        properties!.namesakes![member.name].push(prop);
      } else if (member.name in properties!.property) {
        const existing = properties!.property[member.name];
        delete properties!.property[member.name];
        properties!.namesakes![member.name] = [existing, prop];
      } else {
        properties!.property[member.name] = prop;
      }
    } else if (member.type === 'operation') {
      const operation = convertOperation(member, result.exposed);
      const { method } = result.methods;
      if (!member.name) {
        result['anonymous-methods']!.method.push(operation);
      } else if (method.hasOwnProperty(member.name)) {
        method[member.name].signature.push(...operation.signature);
      } else {
        method[member.name] = operation as Types.Method;
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
    signature: [],
  };
  for (const member of members) {
    if (member.type === 'constructor') {
      constructor.signature.push({
        type: parent,
        param: member.arguments.map(convertArgument),
      });
    }
  }
  if (constructor.signature.length) {
    return constructor;
  }
}

function getOldStyleConstructor(extAttrs: webidl2.ExtendedAttribute[], parent: string) {
  const constructor: Types.Constructor = {
    signature: [],
  };
  for (const extAttr of extAttrs) {
    if (extAttr.name === 'Constructor') {
      constructor.signature.push({
        type: parent,
        param: extAttr.arguments.map(convertArgument),
      });
    }
  }
  if (constructor.signature.length) {
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
        signature: [
          {
            type: parent,
            param: extAttr.arguments ? extAttr.arguments.map(convertArgument) : [],
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
    signature: [
      {
        ...type,
        param: operation.arguments.map(convertArgument),
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
    signature: [
      {
        ...convertIdlType(c.idlType),
        param: c.arguments.map(convertArgument),
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
    'read-only': attribute.readonly ? 1 : undefined,
    'event-handler': isEventHandler ? attribute.name.slice(2) : undefined,
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

function convertNamespace(namespace: webidl2.NamespaceType) {
  const result: Types.Interface = {
    name: namespace.name,
    extends: 'Object',
    constructor: { signature: [] },
    methods: { method: {} },
    properties: { property: {} },
    exposed: getExtAttrConcatenated(namespace.extAttrs, 'Exposed'),
  };
  for (const member of namespace.members) {
    if (member.type === 'attribute') {
      result.properties!.property[member.name] = convertAttribute(member, result.exposed);
    } else if (member.type === 'operation' && member.idlType) {
      const operation = convertOperation(member, result.exposed);
      const { method } = result.methods;
      if (method[member.name!]) {
        method[member.name!].signature.push(...operation.signature);
      } else {
        method[member.name!] = operation as Types.Method;
      }
    }
  }

  return result;
}

function convertDictionary(dictionary: webidl2.DictionaryType) {
  const result: Types.Dictionary = {
    name: dictionary.name,
    extends: dictionary.inheritance || 'Object',
    members: { member: {} },
  };
  for (const member of dictionary.members) {
    result.members.member[member.name] = convertDictionaryMember(member);
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
    'new-type': typedef.name,
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
