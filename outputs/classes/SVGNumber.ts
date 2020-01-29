import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { ISVGNumber } from '../interfaces';

export default class SVGNumber implements ISVGNumber {
  public get value(): number {
    return InternalHandler.get<ISVGNumber, number>(this, 'value');
  }

  public set value(value: number) {
    InternalHandler.set<ISVGNumber, number>(this, 'value', value);
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ISVGNumberProperties {
  value?: number;
}

export interface ISVGNumberReadonlyProperties {}

export const { getState, setState, setReadonlyOfSVGNumber } = InternalStateGenerator<
  ISVGNumber,
  ISVGNumberProperties,
  ISVGNumberReadonlyProperties
>('SVGNumber');
