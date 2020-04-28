import { compareName, getNameWithTypeParameter } from './utils';
import * as Types from './Types';
import Printer from './Printer';
import Components from './Components';
import ICodeModule from './interfaces/ICodeModule';
import TypeUtils from './TypeUtils';
import ParamUtils from './ParamUtils';

export default class TsBuildInterfacesBasic {
  private printer = new Printer();
  private readonly components: Components;
  private enums: Types.Enum[];
  private typedefs: Types.TypeDef[];
  private dictionaries: Types.Dictionary[];
  private callbackFunctions: Types.CallbackFunction[];
  private callbackInterfaces: Types.Interface[];

  constructor(components: Components) {
    this.components = components;
    this.enums = Object.values(this.components.enums)
      .sort(compareName)
      .filter(i => !i.legacyNamespace);
    this.typedefs = this.components.typedefs.filter(i => !i.legacyNamespace);
    this.dictionaries = Object.values(this.components.dictionaries)
      .sort(compareName)
      .filter(i => !i.legacyNamespace);
    this.callbackFunctions = Object.values(this.components.callbackFunctions).sort(compareName);
    this.callbackInterfaces = Object.values(this.components.callbackInterfaces).sort(compareName);
  }

  public run() {
    const codeModules = [
      ...this.extractEnums(),
      ...this.extractTypeDefs(),
      ...this.extractDictionaries(),
      ...this.extractCallbackFunctions(),
      ...this.extractCallbackInterfaces(),
    ];
    return codeModules;
  }

  private extractEnums() {
    return this.enums.map(e => this.extractEnum(e));
  }

  private extractEnum(e: Types.Enum): ICodeModule {
    const name = e.name;
    const values = e.value.slice().sort();
    const definedObjects: string[] = [name];
    const referencedObjects: string[] = [];
    this.printer.reset();
    this.printer.printLine(`export type I${name} = ${values.map(v => `'${v}'`).join(' | ')};`);
    return { name, definedObjects, referencedObjects, category: 'Enum', code: this.printer.getResult().trim() };
  }

  private extractTypeDefs() {
    return this.typedefs.map(typeDef => this.extractTypeDef(typeDef));
  }

  private extractTypeDef(typeDef: Types.TypeDef): ICodeModule {
    const name = getNameWithTypeParameter(typeDef.typeParameters, typeDef.newType);
    const tsIType = TypeUtils.convertDomTypeToTsType(typeDef, true);
    const definedObjects: string[] = [name];
    const referencedObjects = TypeUtils.extractCustomTypes(typeDef);
    this.printer.reset();
    this.printer.printLine(`export type I${name} = ${tsIType};`);
    return { name, definedObjects, referencedObjects, category: 'TypeDef', code: this.printer.getResult().trim() };
  }

  private extractDictionaries() {
    return this.dictionaries.map(dictionary => this.extractDictionary(dictionary));
  }

  private extractDictionary(dictionary: Types.Dictionary): ICodeModule {
    this.printer.reset();
    const name = getNameWithTypeParameter(dictionary.typeParameters, dictionary.name);
    const definedObjects: string[] = [name];
    const referencedObjects: string[] = [];
    if (!dictionary.extends || dictionary.extends === 'Object') {
      this.printer.printLine(`export interface I${name} {`);
    } else {
      referencedObjects.push(dictionary.extends);
      this.printer.printLine(`export interface I${name} extends I${dictionary.extends} {`);
    }
    this.printer.increaseIndent();
    if (dictionary.members) {
      Object.values(dictionary.members)
        .sort(compareName)
        .forEach(m => {
          this.printer.printLines(m.comment);
          this.printer.printLine(
            `${m.name}${m.required === 1 ? '' : '?'}: ${TypeUtils.convertDomTypeToTsType(m, true)};`,
          );
          referencedObjects.push(...TypeUtils.extractCustomTypes(m));
        });
    }
    this.printer.decreaseIndent();
    this.printer.printLine('}');
    return { name, definedObjects, referencedObjects, category: 'Dictionary', code: this.printer.getResult().trim() };
  }

  private extractCallbackFunctions() {
    return this.callbackFunctions.map(cb => this.extractCallbackFunction(cb));
  }

  private extractCallbackFunction(cb: Types.CallbackFunction): ICodeModule {
    this.printer.reset();
    const name = cb.name;
    const definedObjects: string[] = [name];
    const referencedObjects = [];
    if (cb.signatures.length === 1) {
      const signature = cb.signatures[0];

      referencedObjects.push(
        ...TypeUtils.extractCustomTypesFromParams(signature.params),
        ...TypeUtils.extractCustomTypes(signature),
      );

      const paramsString = signature.params ? ParamUtils.paramsToString(signature.params, true) : '';
      const returnType = signature.type ? TypeUtils.convertDomTypeToTsType(signature, true) : 'void';
      this.printer.print(`export type I${cb.name} = (${paramsString}) => ${returnType};`);
    } else {
      throw new Error('Must add support for multiple signatures');
    }

    return { name, definedObjects, referencedObjects, category: 'CallbackFunction', code: this.printer.getResult() };
  }

  private extractCallbackInterfaces() {
    return this.callbackInterfaces.map(i => this.emitCallBackInterface(i));
  }

  private emitCallBackInterface(i: Types.Interface): ICodeModule {
    this.printer.reset();
    const name = i.name;
    const methods = Object.values(i.methods);
    const m = methods[0];
    const signature = m.signatures[0];
    const definedObjects: string[] = [name];
    const referencedObjects: string[] = [
      ...TypeUtils.extractCustomTypesFromParams(signature.params),
      ...TypeUtils.extractCustomTypes(signature),
    ];
    const paramsString = signature.params ? ParamUtils.paramsToString(signature.params, true) : '';
    const returnType = signature.type ? TypeUtils.convertDomTypeToTsType(signature, true) : 'void';
    this.printer.print(
      `export type I${i.name} = ((${paramsString}) => ${returnType}) | { ${m.name}(${paramsString}): ${returnType} };`,
    );
    return { name, definedObjects, referencedObjects, category: 'CallbackInterface', code: this.printer.getResult() };
  }
}
