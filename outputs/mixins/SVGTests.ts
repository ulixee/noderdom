import InternalHandler from '../InternalHandler';
import { ISVGStringList, ISVGTests } from '../interfaces';

type Constructor<T = {}> = new (...args: any[]) => T;

export default function SVGTests<TBase extends Constructor>(base: TBase) {
  return class extends base implements ISVGTests {
    public get requiredExtensions(): ISVGStringList {
      return InternalHandler.get<ISVGTests, ISVGStringList>(this, 'requiredExtensions');
    }

    public get systemLanguage(): ISVGStringList {
      return InternalHandler.get<ISVGTests, ISVGStringList>(this, 'systemLanguage');
    }
  };
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpSVGTestsKeys: Set<string> = new Set([]);

export interface ISVGTestsRps {
  readonly requiredExtensions?: ISVGStringList;
  readonly systemLanguage?: ISVGStringList;
}
