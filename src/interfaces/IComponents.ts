import * as Types from '../types';

export default interface IComponents {
  interfaces: Record<string, Types.Interface>;
  enums: Record<string, Types.Enum>;
  mixins: Record<string, Types.Interface>;
  typedefs: Types.TypeDef[];
  namespaces: Types.Interface[];
  callbackFunctions: Record<string, Types.CallbackFunction>;
  callbackInterfaces: Record<string, Types.Interface>;
  dictionaries: Record<string, Types.Dictionary>;
}
