import InternalHandler from '../InternalHandler';
import { ISVGStringList, ISVGTests } from '../interfaces';

export default class SVGTests implements ISVGTests {
  public get requiredExtensions(): ISVGStringList {
    return InternalHandler.get<ISVGTests, ISVGStringList>(this, 'requiredExtensions');
  }

  public get systemLanguage(): ISVGStringList {
    return InternalHandler.get<ISVGTests, ISVGStringList>(this, 'systemLanguage');
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ISVGTestsProperties {
  requiredExtensions?: ISVGStringList;
  systemLanguage?: ISVGStringList;
}

export interface ISVGTestsReadonlyProperties {
  requiredExtensions?: ISVGStringList;
  systemLanguage?: ISVGStringList;
}
