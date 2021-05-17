import { IShadowRootIsolate } from '../../base/interfaces/isolate';
import { ISuperElement } from '../../base/interfaces/super';
import ShadowRootIsolateBase, { IShadowRootIsolateProperties } from '../../base/isolate-mixins/ShadowRootIsolate';
export declare const getState: (instance: IShadowRootIsolate) => IShadowRootIsolateProperties, setState: (instance: IShadowRootIsolate, properties: Partial<IShadowRootIsolateProperties>) => void;
export default class ShadowRootIsolate extends ShadowRootIsolateBase implements IShadowRootIsolate {
    get host(): Promise<string> | ISuperElement;
}
