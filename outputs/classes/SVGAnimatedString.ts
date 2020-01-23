import InternalHandler from '../InternalHandler';
import { ISVGAnimatedString } from '../interfaces';

export default class SVGAnimatedString implements ISVGAnimatedString {
  protected readonly _: ISVGAnimatedStringRps = {};

  // properties

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

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpSVGAnimatedStringKeys: Set<string> = new Set([]);

export interface ISVGAnimatedStringRps {
  readonly animVal?: string;
}

export function setSVGAnimatedStringRps(instance: ISVGAnimatedString, data: ISVGAnimatedStringRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpSVGAnimatedStringKeys.has(key)) {
      throw new Error(`${key} is not a property of SVGAnimatedString`);
    }
    properties[key] = value;
  });
}
