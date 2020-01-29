import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { ISVGAnimatedString } from '../interfaces';

export default class SVGAnimatedString implements ISVGAnimatedString {
  public get animVal(): string {
    return InternalHandler.get<ISVGAnimatedString, string>(this, 'animVal');
  }

  public get baseVal(): string {
    return InternalHandler.get<ISVGAnimatedString, string>(this, 'baseVal');
  }

  public set baseVal(value: string) {
    InternalHandler.set<ISVGAnimatedString, string>(this, 'baseVal', value);
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ISVGAnimatedStringProperties {
  animVal?: string;
  baseVal?: string;
}

export interface ISVGAnimatedStringReadonlyProperties {
  animVal?: string;
}

export const { getState, setState, setReadonlyOfSVGAnimatedString } = InternalStateGenerator<
  ISVGAnimatedString,
  ISVGAnimatedStringProperties,
  ISVGAnimatedStringReadonlyProperties
>('SVGAnimatedString');
