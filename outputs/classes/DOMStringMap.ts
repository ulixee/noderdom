import { IDOMStringMap } from '../interfaces';

export default class DOMStringMap implements IDOMStringMap {
  [name: string]: string;
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpDOMStringMapKeys: Set<string> = new Set([]);

export interface IDOMStringMapRps {}
