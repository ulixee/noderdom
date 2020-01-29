import InternalStateGenerator from '../InternalStateGenerator';
import { IDOMStringMap } from '../interfaces';

export default class DOMStringMap implements IDOMStringMap {
  [name: string]: string;
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IDOMStringMapProperties {}

export interface IDOMStringMapReadonlyProperties {}

export const { getState, setState, setReadonlyOfDOMStringMap } = InternalStateGenerator<
  IDOMStringMap,
  IDOMStringMapProperties,
  IDOMStringMapReadonlyProperties
>('DOMStringMap');
