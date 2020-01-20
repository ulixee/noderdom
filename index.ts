import * as Fs from 'fs';
import * as Path from 'path';
import webIDLFilenames from './inputs/webidls';
import Componentizer from './src/Componentizer';
import TsEmitter from './src/TsEmitter';

async function run() {
  const outputsDir = Path.join(__dirname, 'outputs');

  // load componentizer
  const componentizer = new Componentizer();
  for (const filename of webIDLFilenames) {
    const filepath = Path.resolve(__dirname, './inputs/webidls', filename);
    const webidl = Fs.readFileSync(filepath, 'utf-8');
    componentizer.addWebIDL(webidl, filename);
  }

  // compile components
  const components = componentizer.run();

  // save components.json in case we want to investigate
  const componentsOutputPath = Path.join(outputsDir, 'components.json');
  Fs.writeFileSync(componentsOutputPath, JSON.stringify(components, null, 2));

  // cleanup components (i.e., remove unused types)
  components.cleanup();

  const outputIntro = [
    '// tslint:disable: prettier',
    '/// <reference no-default-lib="true"/>',
    '///////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n',
    '\n',
  ].join('\n');

  const typescriptEmitter = new TsEmitter(components);

  const typescriptTypes = typescriptEmitter.emitTypes();
  const outputTypes = [
    '// TYPES //////////////////////////////////////////////////////////////////////////////////////////////////////////\n',
    typescriptTypes.map(t => t.code).join('\n\n'),
    '\n',
  ].join('\n');

  const typescriptInterfaces = typescriptEmitter.emitInterfaces();
  const outputInterfaces = [
    '// BASIC INTERFACES ///////////////////////////////////////////////////////////////////////////////////////////////\n',
    typescriptInterfaces
      .filter(i => !i.elementNamespace)
      .map(i => i.code)
      .join('\n\n'),
    '\n',
  ].join('\n');

  const outputHTMLElements = [
    '// HTML ELEMENTS //////////////////////////////////////////////////////////////////////////////////////////////////\n',
    typescriptEmitter.emitTagNameMap('HTML').join('\n\n'),
    typescriptInterfaces
      .filter(i => i.elementNamespace === 'HTML')
      .map(i => i.code)
      .join('\n\n'),
    '\n',
  ].join('\n');

  const outputSVGElements = [
    '// SVG ELEMENTS ///////////////////////////////////////////////////////////////////////////////////////////////////\n',
    typescriptEmitter.emitTagNameMap('SVG').join('\n\n'),
    typescriptInterfaces
      .filter(i => i.elementNamespace === 'SVG')
      .map(i => i.code)
      .join('\n\n'),
    '',
  ].join('\n');

  const output = [outputIntro, outputTypes, outputInterfaces, outputHTMLElements, outputSVGElements].join('');
  Fs.writeFileSync(`${outputsDir}/interfaces.ts`, output);

  const mixinsOutputDir = Path.join(outputsDir, 'mixins');
  const typescriptMixins = typescriptEmitter.emitMixins();
  typescriptMixins.forEach(c => {
    const mixinOutputPath = Path.join(mixinsOutputDir, `${c.name}.ts`);
    Fs.writeFileSync(mixinOutputPath, `${c.code}\n`);
  });

  const classesOutputDir = Path.join(outputsDir, 'classes');
  const typescriptClasses = typescriptEmitter.emitClasses();
  typescriptClasses.forEach(c => {
    const classOutputPath = Path.join(classesOutputDir, `${c.name}.ts`);
    Fs.writeFileSync(classOutputPath, `${c.code}\n`);
  });
}

run().catch(error => console.log(error));
