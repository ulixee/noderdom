import * as Fs from 'fs';
import * as Path from 'path';
import webIDLFilenames from './inputs/webidls';
import Componentizer from './src/Componentizer';
import TsExtractor from './src/TsExtractor';

async function run() {
  const outputsDir = Path.join(__dirname, 'outputs');
  const webIDLOverridesDir = Path.join(__dirname, 'inputs/webidl-overrides');

  if (!Fs.existsSync(outputsDir)) Fs.mkdirSync(outputsDir);

  const srcExportsDir = Path.join(__dirname, 'src/exports');
  for (const filename of Fs.readdirSync(srcExportsDir)) {
    if (!filename.match(/\.ts$/)) continue;
    const fromFilepath = Path.resolve(srcExportsDir, filename);
    const toFilepath = Path.resolve(outputsDir, filename);
    Fs.copyFileSync(fromFilepath, toFilepath);
  }

  // load componentizer
  const componentizer = new Componentizer();
  for (const filename of webIDLFilenames) {
    const filepath = Path.resolve(__dirname, './inputs/webidls', filename);
    const webidl = Fs.readFileSync(filepath, 'utf-8');
    componentizer.addWebIDL(webidl, filename);
  }

  for (const filename of Fs.readdirSync(webIDLOverridesDir)) {
    if (!filename.match(/\.webidl$/)) continue;
    const filepath = Path.resolve(webIDLOverridesDir, filename);
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

  const typescriptExtractor = new TsExtractor(components);

  const typescriptTypes = typescriptExtractor.extractTypes();
  const outputTypes = [
    '// TYPES //////////////////////////////////////////////////////////////////////////////////////////////////////////\n',
    typescriptTypes.map(t => t.code).join('\n\n'),
    '\n',
  ].join('\n');

  const typescriptInterfaces = typescriptExtractor.extractInterfaces();
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
    typescriptExtractor.extractTagNameMap('HTML').join('\n\n'),
    typescriptInterfaces
      .filter(i => i.elementNamespace === 'HTML')
      .map(i => i.code)
      .join('\n\n'),
    '\n',
  ].join('\n');

  const outputSVGElements = [
    '// SVG ELEMENTS ///////////////////////////////////////////////////////////////////////////////////////////////////\n',
    typescriptExtractor.extractTagNameMap('SVG').join('\n\n'),
    typescriptInterfaces
      .filter(i => i.elementNamespace === 'SVG')
      .map(i => i.code)
      .join('\n\n'),
    '',
  ].join('\n');

  const output = [outputIntro, outputTypes, outputInterfaces, outputHTMLElements, outputSVGElements].join('');
  Fs.writeFileSync(`${outputsDir}/interfaces.ts`, output);

  const mixinsDir = Path.join(outputsDir, 'mixins');
  if (!Fs.existsSync(mixinsDir)) Fs.mkdirSync(mixinsDir);

  const typescriptMixins = typescriptExtractor.extractMixins();
  typescriptMixins.forEach(c => {
    const mixinOutputPath = Path.join(mixinsDir, `${c.name}.ts`);
    Fs.writeFileSync(mixinOutputPath, `${c.code}\n`);
  });

  const classesDir = Path.join(outputsDir, 'classes');
  if (!Fs.existsSync(classesDir)) Fs.mkdirSync(classesDir);

  const typescriptClasses = typescriptExtractor.extractClasses();
  typescriptClasses.forEach(c => {
    const classOutputPath = Path.join(classesDir, `${c.name}.ts`);
    Fs.writeFileSync(classOutputPath, `${c.code}\n`);
  });
}

run().catch(error => console.log(error));
