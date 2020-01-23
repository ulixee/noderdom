import { compareName, getNameWithTypeParameter } from './helpers';
import * as Types from './types';
import Printer from './Printer';
import Components from './Components';

export default class TsTypeExtractor {
  private printer = new Printer();
  private components: Components;

  constructor(components: Components) {
    this.components = components;
  }

  public run() {
    return [
      ...this.extractEnums(),
      ...this.extractTypeDefs(),
      ...this.extractDictionaries(),
      ...this.extractCallbackFunctions(),
      ...this.extractCallbackInterfaces(),
    ];
  }

  private extractEnums() {
    return Object.values(this.components.enums)
      .sort(compareName)
      .filter(i => !i['legacy-namespace'])
      .map(e => {
        const name = e.name;
        const code = this.extractEnum(e);
        return { type: 'Enum', name, code };
      });
  }

  private extractEnum(e: Types.Enum) {
    const values = e.value.slice().sort();
    this.printer.reset();
    this.printer.printLine(`export type I${e.name} = ${values.map(v => `'${v}'`).join(' | ')};`);
    return this.printer.getResult().trim();
  }

  private extractTypeDefs() {
    return this.components.typedefs
      .filter(i => !i['legacy-namespace'])
      .map(typeDef => {
        const name = getNameWithTypeParameter(typeDef, typeDef['new-type']);
        const code = this.extractTypeDef(typeDef, name);
        return { type: 'TypeDef', name, code };
      });
  }

  private extractTypeDef(typeDef: Types.TypeDef, name: string) {
    if (typeDef.deprecated) this.printer.printDepreciated();
    let tsIType = this.components.convertDomTypeToTsType(typeDef, true);
    // manual override
    if (name === 'EventListenerOrEventListenerObject') {
      tsIType = tsIType.replace('EventListenerOrEventListenerObject', 'EventListener');
    }
    this.printer.reset();
    this.printer.printLine(`export type I${name} = ${tsIType};`);
    return this.printer.getResult().trim();
  }

  private extractDictionaries() {
    return Object.values(this.components.dictionaries)
      .sort(compareName)
      .filter(i => !i['legacy-namespace'])
      .map(dictionary => {
        const name = dictionary.name;
        const code = this.extractDictionary(dictionary);
        return { type: 'Dictionary', name, code };
      });
  }

  private extractDictionary(dict: Types.Dictionary) {
    this.printer.reset();
    if (!dict.extends || dict.extends === 'Object') {
      this.printer.printLine(`export interface I${getNameWithTypeParameter(dict, dict.name)} {`);
    } else {
      this.printer.printLine(
        `export interface I${getNameWithTypeParameter(dict, dict.name)} extends I${dict.extends} {`,
      );
    }
    this.printer.increaseIndent();
    if (dict.members) {
      Object.values(dict.members.member)
        .sort(compareName)
        .forEach(m => {
          this.printer.printComment(m.comment);
          this.printer.printLine(
            `${m.name}${m.required === 1 ? '' : '?'}: ${this.components.convertDomTypeToTsType(m, true)};`,
          );
        });
    }
    this.printer.decreaseIndent();
    this.printer.printLine('}');
    return this.printer.getResult().trim();
  }

  private extractCallbackFunctions() {
    return Object.values(this.components.callbackFunctions)
      .sort(compareName)
      .map(cb => {
        const name = cb.name;
        const code = this.extractCallbackFunction(cb);
        return { type: 'CallbackFunction', name, code };
      });
  }

  private extractCallbackFunction(cb: Types.CallbackFunction) {
    this.printer.reset();
    if (cb.signature.length === 1) {
      const overload = cb.signature[0];
      const paramsString = overload.param ? this.components.paramsToString(overload.param, true) : '';
      const returnType = overload.type ? this.components.convertDomTypeToTsType(overload, true) : 'void';
      this.printer.print(`export type I${cb.name} = (${paramsString}) => ${returnType};`);
    } else {
      this.printer.printLine(`export interface I${getNameWithTypeParameter(cb, cb.name)} {`);
      this.printer.increaseIndent();
      this.printer.printSignatures(cb, '', this.components);
      this.printer.decreaseIndent();
      this.printer.print('}');
    }
    return this.printer.getResult();
  }

  private extractCallbackInterfaces() {
    return Object.values(this.components.callbackInterfaces)
      .sort(compareName)
      .map(i => {
        const name = i.name;
        const code = this.emitCallBackInterface(i);
        return { type: 'CallbackInterface', name, code };
      });
  }

  private emitCallBackInterface(i: Types.Interface) {
    this.printer.reset();
    if (i.name === 'EventListener') {
      this.printer.print(`export type I${i.name} = (evt: IEvent) => void;`);
    } else {
      const methods = Object.values(i.methods.method);
      const m = methods[0];
      const overload = m.signature[0];
      const paramsString = overload.param ? this.components.paramsToString(overload.param, true) : '';
      const returnType = overload.type ? this.components.convertDomTypeToTsType(overload, true) : 'void';
      this.printer.print(
        `export type I${i.name} = ((${paramsString}) => ${returnType}) | { ${m.name}(${paramsString}): ${returnType}; };`,
      );
    }
    return this.printer.getResult();
  }
}
