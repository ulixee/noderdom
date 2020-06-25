#!/usr/bin/env ts-node

import * as Path from 'path';
import * as Fs from 'fs';

const buildDir = Path.join(__dirname, 'builds/awaited-dom');
const packagePath = Path.join(buildDir, 'package.json');
const relativePackagePath = Path.relative(__dirname, packagePath);

// CUSTOMIZE AND SAVE PACKAGE.JSON
const pkg = require('./package.json');

delete pkg.devDependencies;
delete pkg.scripts;

pkg.name = 'awaited-dom';
pkg.keywords.push('AwaitedDOM');

Fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));
console.log(`Created ${relativePackagePath}`);
