import * as Types from './types';

const baseComponents = require('../inputs/baseComponents.json');
const interfaces: Record<string, Types.Interface> = baseComponents.interfaces;
const typedefs: Types.TypeDef[] = baseComponents.typedefs;

const baseComponentNames: string[] = [];

baseComponentNames.push(...Object.keys(interfaces));
for (const typedef of typedefs) {
  baseComponentNames.push(typedef['new-type']);
}

export default { interfaces, typedefs };

export { baseComponentNames };
