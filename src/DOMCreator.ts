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

    const basicTypes = tsBuilder.extractBasicInterfaces();
    const basicTypesOutput = [DOMCreator.outputIntro, basicTypes.map(t => t.code).join('\n\n')].join('');
    Fs.writeFileSync(`${pathsByBuildType.base.interfaces}/${ObjectType.basic}.ts`, basicTypesOutput);

    const officialInterfaces = tsBuilder.extractOfficialInterfaces();
    const stringifiedTypescriptInterfaces = this.stringifyInterfaceCodeModules(
      DOMCreator.outputIntro,
      officialInterfaces,
    );
    Fs.writeFileSync(`${pathsByBuildType.base.interfaces}/${ObjectType.official}.ts`, stringifiedTypescriptInterfaces);

    const elementMap = [DOMCreator.outputIntro, tsBuilder.extractElementInterfaces().join('\n\n')];
    Fs.writeFileSync(`${pathsByBuildType.base.interfaces}/${ObjectType.element}.ts`, elementMap.join(''));

    const tsClasses = tsBuilder.extractOfficialKlasses();
    tsClasses.forEach(c => {
      const classOutputPath = Path.join(pathsByBuildType.base.officialKlasses, `${c.name}.ts`);
      Fs.writeFileSync(classOutputPath, `${c.code}\n`);
    });

    const tsMixins = tsBuilder.extractOfficialMixins();
    tsMixins.forEach(c => {
      const mixinOutputPath = Path.join(pathsByBuildType.base.officialMixins, `${c.name}.ts`);
      Fs.writeFileSync(mixinOutputPath, `${c.code}\n`);
    });

    Exports.moveToDir(pathsByBuildType.base.root);

    if (domType === DomType.awaited) {
      this.createBaseIsolates(tsBuilder);
      this.createBaseSupers(tsBuilder);
    }

    return tsBuilder.objectMetaByName;
  }

  private createBaseIsolates(tsBuilder: TsBuilder) {
    const isolateInterfaces = tsBuilder.extractIsolateInterfaces();
    const stringifiedIsolateInterfaces = this.stringifyInterfaceCodeModules(DOMCreator.outputIntro, isolateInterfaces);
    Fs.writeFileSync(`${this.pathsByBuildType.base.interfaces}/${ObjectType.isolate}.ts`, stringifiedIsolateInterfaces);

    const isolateMixins = tsBuilder.extractIsolateMixins();
    isolateMixins.forEach(c => {
      const isolateOutputPath = Path.join(this.pathsByBuildType.base.isolateMixins, `${c.name}.ts`);
      Fs.writeFileSync(isolateOutputPath, `${c.code}\n`);
    });
  }

  private createBaseSupers(tsBuilder: TsBuilder) {
    const superInterfaces = tsBuilder.extractSuperInterfaces();
    const stringifiedSuperInterfaces = this.stringifyInterfaceCodeModules(DOMCreator.outputIntro, superInterfaces);
    Fs.writeFileSync(`${this.pathsByBuildType.base.interfaces}/${ObjectType.super}.ts`, stringifiedSuperInterfaces);

    const superClasses = tsBuilder.extractSuperKlasses();
    superClasses.forEach(c => {
      const superOutputPath = Path.join(this.pathsByBuildType.base.superKlasses, `${c.name}.ts`);
      Fs.writeFileSync(superOutputPath, `${c.code}\n`);
    });
  }

  private createImpl(objectMetaByName: IObjectMetaByName) {
    const { domType, pathsByBuildType } = this;
    Object.values(pathsByBuildType.impl).forEach(p => Fs.existsSync(p) || Fs.mkdirSync(p));

    const tsBuilderOptions = { domType, buildType: BuildType.impl, pathsByBuildType, objectMetaByName };
    const tsBuilder = new TsBuilder(this.components, tsBuilderOptions);

    const typescriptClasses = tsBuilder.extractOfficialKlasses();
    typescriptClasses.forEach(c => {
      const classOutputPath = Path.join(pathsByBuildType.impl.officialKlasses, `${c.name}.ts`);
      Fs.writeFileSync(classOutputPath, `${c.code}\n`);
    });

    const typescriptMixins = tsBuilder.extractOfficialMixins();
    typescriptMixins.forEach(c => {
      const mixinOutputPath = Path.join(pathsByBuildType.impl.officialMixins, `${c.name}.ts`);
      Fs.writeFileSync(mixinOutputPath, `${c.code}\n`);
    });

    if (domType === DomType.awaited) {
      this.createImplIsolates(tsBuilder);
      this.createImplSupers(tsBuilder);
    }
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
