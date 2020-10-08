import * as Types from './Types';
import TypeUtils from './TypeUtils';

const reservedTsKeywords: Set<string> = new Set(['default', 'delete', 'continue', 'arguments']);

export default class ParamUtils {
  /// Generate the parameters string for function signatures
  public static paramsToString(params: Types.Param[], convertToIType: boolean = false, isUnused: boolean = false) {
    return params.map(p => this.paramToString(p, convertToIType, isUnused)).join(', ');
  }

  public static paramNames(ps: Types.Param[], isUnused: boolean = false) {
    return ps.map(p => this.adjustParamName(p.name, isUnused));
  }

  private static paramToString(param: Types.Param, convertToIType: boolean = false, isUnused: boolean = false) {
    if (param.type === 'Promise' && !Array.isArray(param.subtype)) {
      param = { name: param.name, type: [param.subtype!, param] };
    }
    const isOptional = !param.variadic && param.optional;
    const pType = TypeUtils.convertDomTypeToTsType(param, convertToIType, false);
    const variadicParams = param.variadic && pType.indexOf('|') !== -1;
    return (
      (param.variadic ? '...' : '') +
      this.adjustParamName(param.name, isUnused) +
      (isOptional ? '?: ' : ': ') +
      (variadicParams ? '(' : '') +
      pType +
      (variadicParams ? ')' : '') +
      (param.variadic ? '[]' : '')
    );
  }

  /// Parameter cannot be named "default" in JavaScript/Typescript so we need to rename it.
  private static adjustParamName(name: string, isUnused: boolean = false) {
    if (reservedTsKeywords.has(name)) throw new Error(`${name} is a reserved typescript keyword`);
    return isUnused ? `_${name}` : name;
  }
}
