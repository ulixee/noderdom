import * as Types from './types';

const componentOverrides = require('../inputs/componentOverrides.json');
const interfaces: Record<string, Types.Interface> = componentOverrides.interfaces;
const typedefs: Types.TypeDef[] = componentOverrides.typedefs;
const partialInterfaces: Types.Interface[] = componentOverrides.partialInterfaces;
const baseComponentNames: string[] = [];

baseComponentNames.push(...Object.keys(interfaces));
for (const typedef of typedefs) {
  baseComponentNames.push(typedef['new-type']);
}

export default { interfaces, typedefs, partialInterfaces };

export { baseComponentNames };
