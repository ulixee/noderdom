import TsExtractor from './TsExtractor';
import * as Fs from 'fs';
import * as Path from 'path';
import Exports from './Exports';
import Components from './Components';
import ICodeModule from './interfaces/ICodeModule';

interface IOptions {
  baseDir: string;
  isDynamic?: boolean;
}

export default class DOMCreator {
  private readonly components: Components;
  private readonly baseDir: string;
  private readonly isDynamic: boolean;
  private readonly interfacesDir: string;
  private readonly classesDir: string;
  private readonly mixinsDir: string;

  private definedTypes: Set<string>;
  private definedDom: Set<string>;
  private definedIsolates: Set<string>;

  constructor(components: Components, options: IOptions) {
    this.components = components;
    this.baseDir = options.baseDir;
    this.isDynamic = options.isDynamic || false;
    this.interfacesDir = Path.join(this.baseDir, 'interfaces');
    this.classesDir = Path.join(this.baseDir, 'classes');
    this.mixinsDir = Path.join(this.classesDir, 'mixins');

    if (!Fs.existsSync(this.baseDir)) Fs.mkdirSync(this.baseDir);
    if (!Fs.existsSync(this.interfacesDir)) Fs.mkdirSync(this.interfacesDir);
    if (!Fs.existsSync(this.classesDir)) Fs.mkdirSync(this.classesDir);
    if (!Fs.existsSync(this.mixinsDir)) Fs.mkdirSync(this.mixinsDir);
  }

  public createBasics() {
    const typescriptExtractor = new TsExtractor(this.components);

    const basicTypes = typescriptExtractor.extractTypes();
    const basicTypesOutput = [DOMCreator.outputIntro, basicTypes.map(t => t.code).join('\n\n')].join('');
    Fs.writeFileSync(`${this.interfacesDir}/types.ts`, basicTypesOutput);

    const domInterfaces = typescriptExtractor.extractInterfaces();
    const stringifiedTypescriptInterfaces = this.stringifyInterfaceCodeModules(DOMCreator.outputIntro, domInterfaces);
    Fs.writeFileSync(`${this.interfacesDir}/dom.ts`, stringifiedTypescriptInterfaces);

    const definedTypes = new Set(basicTypes.map(x => x.definedObjects).reduce((a, b) => a.concat(b), []));
    const definedDom = new Set(domInterfaces.map(x => x.definedObjects).reduce((a, b) => a.concat(b), []));

    const tagNameMap = [DOMCreator.outputIntro, typescriptExtractor.extractTagNameMap().join('\n\n')];
    Fs.writeFileSync(`${this.interfacesDir}/tags.ts`, tagNameMap.join(''));

    const typescriptClasses = typescriptExtractor.extractClasses(definedTypes, definedDom, this.isDynamic);
    typescriptClasses.forEach(c => {
      const classOutputPath = Path.join(this.classesDir, `${c.name}.ts`);
      Fs.writeFileSync(classOutputPath, `${c.code}\n`);
    });

    const typescriptMixins = typescriptExtractor.extractMixins(definedTypes, definedDom);
    typescriptMixins.forEach(c => {
      const mixinOutputPath = Path.join(this.mixinsDir, `${c.name}.ts`);
      Fs.writeFileSync(mixinOutputPath, `${c.code}\n`);
    });

    Exports.moveToDir(this.baseDir);

    this.definedTypes = definedTypes;
    this.definedDom = definedDom;
  }

  public createIsolates() {
    const { definedTypes, definedDom } = this;
    const typescriptExtractor = new TsExtractor(this.components);
    const isolateInterfaces = typescriptExtractor.extractIsolateInterfaces(definedTypes, definedDom);
    const stringifiedIsolateInterfaces = this.stringifyInterfaceCodeModules(DOMCreator.outputIntro, isolateInterfaces);
    Fs.writeFileSync(`${this.interfacesDir}/isolates.ts`, stringifiedIsolateInterfaces);

    const isolateDir = Path.join(this.classesDir, 'mixin-isolates');
    if (!Fs.existsSync(isolateDir)) Fs.mkdirSync(isolateDir);

    const isolateMixins = typescriptExtractor.extractIsolateMixins(definedTypes, definedDom);
    isolateMixins.forEach(c => {
      const isolateOutputPath = Path.join(isolateDir, `${c.name}.ts`);
      Fs.writeFileSync(isolateOutputPath, `${c.code}\n`);
    });
    this.definedIsolates = new Set(isolateMixins.map(x => x.name));
  }

  public createIshes() {
    const { definedTypes, definedDom, definedIsolates } = this;
    const typescriptExtractor = new TsExtractor(this.components);
    const ishInterfaces = typescriptExtractor.extractIshInterfaces(definedTypes, definedDom, definedIsolates);
    const definedIshes = new Set(ishInterfaces.map(x => x.name));

    const stringifiedIshInterfaces = this.stringifyInterfaceCodeModules(DOMCreator.outputIntro, ishInterfaces);
    Fs.writeFileSync(`${this.interfacesDir}/ishes.ts`, stringifiedIshInterfaces);

    const ishClasses = typescriptExtractor.extractIshClasses(definedTypes, definedDom, definedIshes, definedIsolates);
    const ishDir = Path.join(this.classesDir, 'ishes');
    if (!Fs.existsSync(ishDir)) Fs.mkdirSync(ishDir);

    ishClasses.forEach(c => {
      const ishOutputPath = Path.join(ishDir, `${c.name}.ts`);
      Fs.writeFileSync(ishOutputPath, `${c.code}\n`);
    });
  }

  // PRIVATE //////////

  private stringifyInterfaceCodeModules(intro: string, codeModules: ICodeModule[]) {
    const outputInterfaces = [
      codeModules
        .filter(m => !m.elementNamespace)
        .map(m => m.code)
        .join('\n\n'),
      '\n',
    ].join('\n');

    const outputHTMLElements = [
      '// HTML ELEMENTS\n',
      codeModules
        .filter(m => m.elementNamespace === 'HTML')
        .map(m => m.code)
        .join('\n\n'),
      '\n',
    ].join('\n');

    const outputSVGElements = [
      '// SVG ELEMENTS\n',
      codeModules
        .filter(m => m.elementNamespace === 'SVG')
        .map(m => m.code)
        .join('\n\n'),
      '',
    ].join('\n');

    return [intro, outputInterfaces, outputHTMLElements, outputSVGElements].join('');
  }

  private static get outputIntro() {
    return [
      '// tslint:disable: prettier',
      '/// <reference no-default-lib="true"/>',
      '///////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n',
      '',
    ].join('\n');
  }
}
