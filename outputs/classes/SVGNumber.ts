import InternalHandler from '../InternalHandler';
import { ISVGNumber } from '../interfaces';

export default class SVGNumber implements ISVGNumber {
  public get value(): number {
    return InternalHandler.get<ISVGNumber, number>(this, 'value');
  }

  public set value(value: number) {
    InternalHandler.set<ISVGNumber, number>(this, 'value', value);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpSVGNumberKeys: Set<string> = new Set([]);

export interface ISVGNumberRps {}
