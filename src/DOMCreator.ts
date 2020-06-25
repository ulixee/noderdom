import * as Fs from 'fs';
import * as Path from 'path';
import Exports from './Exports';
import Components from './Components';
import TsBuilder, { IObjectMetaByName } from './TsBuilder';
import ICodeModule from './interfaces/ICodeModule';
import IDomType, { DomType } from './interfaces/IDomType';
import { BuildType } from './interfaces/IBuildType';
import { ObjectType } from './interfaces/IObjectType';
import { IPathsByBuildType } from './interfaces/IPaths';

interface IOptions {
  baseDir: string;
  implDir: string;
  domType: IDomType;
}

export default class DOMCreator {
  private readonly components: Components;
  private readonly pathsByBuildType: IPathsByBuildType;
  private readonly domType: IDomType;

  constructor(components: Components, options: IOptions) {
    this.components = components;
    this.domType = options.domType;
    this.pathsByBuildType = {
      base: {
        root: options.baseDir,
        interfaces: Path.join(options.baseDir, 'interfaces'),
        officialKlasses: Path.join(options.baseDir, 'official-klasses'),
        officialMixins: Path.join(options.baseDir, 'official-mixins'),
        superKlasses: Path.join(options.baseDir, 'super-klasses'),
        isolateMixins: Path.join(options.baseDir, 'isolate-mixins'),
      },
      impl: {
        root: options.implDir,
        officialKlasses: Path.join(options.implDir, 'official-klasses'),
        officialMixins: Path.join(options.implDir, 'official-mixins'),
        superKlasses: Path.join(options.implDir, 'super-klasses'),
        isolateMixins: Path.join(options.implDir, 'isolate-mixins'),
      },
    };
  }

  public create() {
    const objectMetaByName = this.createBase();
    this.createImpl(objectMetaByName);
  }

  private createBase() {
    const { domType, pathsByBuildType } = this;
    Object.values(pathsByBuildType.base).forEach(p => Fs.existsSync(p) || Fs.mkdirSync(p));

    const tsBuilderOptions = { domType, buildType: BuildType.base, pathsByBuildType };
    const tsBuilder = new TsBuilder(this.components, tsBuilderOptions);

    // INTERFACES /////////////////////////

    const basicTypes = tsBuilder.extractBasicInterfaces();
    const officialInterfaces = tsBuilder.extractOfficialInterfaces();
    const isolateInterfaces = domType === DomType.awaited ? tsBuilder.extractIsolateInterfaces() : [];
    const superInterfaces = domType === DomType.awaited ? tsBuilder.extractSuperInterfaces() : [];

    // official interfaces
    const officialInterfaceImports = tsBuilder.extractOfficialInterfaceImports(basicTypes);
    const officialInterfaceCode = this.stringifyInterfaceCodeModules(DOMCreator.outputIntro, officialInterfaceImports, [
      ...basicTypes,
      ...officialInterfaces,
    ]);
    Fs.writeFileSync(`${pathsByBuildType.base.interfaces}/${ObjectType.official}.ts`, officialInterfaceCode);

    // element interfaces
    const elementInterfaceImports = tsBuilder.extractElementInterfaceImports();
    const elementInterfaces = [DOMCreator.outputIntro, tsBuilder.extractElementInterfaces().join('\n\n')];
    const elementInterfaceCode = `${elementInterfaceImports}\n${elementInterfaces.join('')}`;
    Fs.writeFileSync(`${pathsByBuildType.base.interfaces}/${ObjectType.element}.ts`, elementInterfaceCode);

    // isolate interfaces
    if (isolateInterfaces.length) {
      const isolateInterfaceImports = tsBuilder.extractIsolateInterfaceImports();
      const isolateInterfaceCode = this.stringifyInterfaceCodeModules(
        DOMCreator.outputIntro,
        isolateInterfaceImports,
        isolateInterfaces,
      );
      Fs.writeFileSync(`${this.pathsByBuildType.base.interfaces}/${ObjectType.isolate}.ts`, isolateInterfaceCode);
    }

    // super interfaces
    if (superInterfaces.length) {
      const superInterfaceImports = tsBuilder.extractSuperInterfaceImports();
      const superInterfaceCode = this.stringifyInterfaceCodeModules(
        DOMCreator.outputIntro,
        superInterfaceImports,
        superInterfaces,
      );
      Fs.writeFileSync(`${this.pathsByBuildType.base.interfaces}/${ObjectType.super}.ts`, superInterfaceCode);
    }

    // CLASSES /////////////////////////

    // official mixins
    const officialMixins = tsBuilder.extractOfficialMixins();
    officialMixins.forEach(c => {
      const mixinOutputPath = Path.join(pathsByBuildType.base.officialMixins, `${c.name}.ts`);
      Fs.writeFileSync(mixinOutputPath, `${c.code}\n`);
    });

    // official klasses
    const officialKlasses = tsBuilder.extractOfficialKlasses();
    officialKlasses.forEach(c => {
      const classOutputPath = Path.join(pathsByBuildType.base.officialKlasses, `${c.name}.ts`);
      Fs.writeFileSync(classOutputPath, `${c.code}\n`);
    });

    // isolate mixins
    if (domType === DomType.awaited) {
      const isolateMixins = tsBuilder.extractIsolateMixins();
      isolateMixins.forEach(c => {
        const isolateOutputPath = Path.join(this.pathsByBuildType.base.isolateMixins, `${c.name}.ts`);
        Fs.writeFileSync(isolateOutputPath, `${c.code}\n`);
      });
    }

    // super klasses
    if (domType === DomType.awaited) {
      const superKlasses = tsBuilder.extractSuperKlasses();
      superKlasses.forEach(c => {
        const superOutputPath = Path.join(this.pathsByBuildType.base.superKlasses, `${c.name}.ts`);
        Fs.writeFileSync(superOutputPath, `${c.code}\n`);
      });
    }

    Exports.moveToDir(pathsByBuildType.base.root, domType);

    return tsBuilder.objectMetaByName;
  }

  private createImpl(objectMetaByName: IObjectMetaByName) {
    const { domType, pathsByBuildType } = this;
    Object.values(pathsByBuildType.impl).forEach(p => Fs.existsSync(p) || Fs.mkdirSync(p));

    const tsBuilderOptions = { domType, buildType: BuildType.impl, pathsByBuildType, objectMetaByName };
    const tsBuilder = new TsBuilder(this.components, tsBuilderOptions);

    const typescriptMixins = tsBuilder.extractOfficialMixins();
    typescriptMixins.forEach(c => {
      const mixinOutputPath = Path.join(pathsByBuildType.impl.officialMixins, `${c.name}.ts`);
      Fs.writeFileSync(mixinOutputPath, `${c.code}\n`);
    });

    const typescriptClasses = tsBuilder.extractOfficialKlasses();
    typescriptClasses.forEach(c => {
      const classOutputPath = Path.join(pathsByBuildType.impl.officialKlasses, `${c.name}.ts`);
      Fs.writeFileSync(classOutputPath, `${c.code}\n`);
    });

    if (domType === DomType.awaited) {
      this.createImplIsolates(tsBuilder);
      this.createImplSupers(tsBuilder);
      this.createImplCreateFunctions(tsBuilder);
    }
  }

  private createImplCreateFunctions(tsBuilder: TsBuilder) {
    const createFunctionsOutput = tsBuilder.extractCreateFunctions();
    Fs.writeFileSync(`${this.pathsByBuildType.impl.root}/create.ts`, `${createFunctionsOutput}\n`);
  }

  private createImplIsolates(tsBuilder: TsBuilder) {
    const isolateMixins = tsBuilder.extractIsolateMixins();
    isolateMixins.forEach(c => {
      const isolateOutputPath = Path.join(this.pathsByBuildType.impl.isolateMixins, `${c.name}.ts`);
      Fs.writeFileSync(isolateOutputPath, `${c.code}\n`);
    });
  }

  private createImplSupers(tsBuilder: TsBuilder) {
    const superClasses = tsBuilder.extractSuperKlasses();
    superClasses.forEach(c => {
      const superOutputPath = Path.join(this.pathsByBuildType.impl.superKlasses, `${c.name}.ts`);
      Fs.writeFileSync(superOutputPath, `${c.code}\n`);
    });
  }

  // PRIVATE //////////

  private stringifyInterfaceCodeModules(intro: string, imports: string, codeModules: ICodeModule[]) {
    const parts: string[] = [intro, imports, '\n\n'];

    const outputInterfaces = [
      codeModules
        .filter(m => !m.elementNamespace)
        .map(m => m.code)
        .join('\n\n'),
      '\n',
    ].join('\n');
    if (outputInterfaces) parts.push(outputInterfaces);

    const outputHTMLElements = [
      '// HTML ELEMENTS\n',
      codeModules
        .filter(m => m.elementNamespace === 'HTML')
        .map(m => m.code)
        .join('\n\n'),
      '\n',
    ].join('\n');
    if (outputHTMLElements) parts.push(outputHTMLElements);

    const outputSVGElements = [
      '// SVG ELEMENTS\n',
      codeModules
        .filter(m => m.elementNamespace === 'SVG')
        .map(m => m.code)
        .join('\n\n'),
      '',
    ].join('\n');
    if (outputSVGElements) parts.push(outputSVGElements);

    return parts.join('');
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
