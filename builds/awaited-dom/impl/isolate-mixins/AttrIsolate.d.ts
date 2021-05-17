import { IAttrIsolate } from '../../base/interfaces/isolate';
import { ISuperElement } from '../../base/interfaces/super';
import AttrIsolateBase, { IAttrIsolateProperties } from '../../base/isolate-mixins/AttrIsolate';
export declare const getState: (instance: IAttrIsolate) => IAttrIsolateProperties, setState: (instance: IAttrIsolate, properties: Partial<IAttrIsolateProperties>) => void;
export default class AttrIsolate extends AttrIsolateBase implements IAttrIsolate {
    get ownerElement(): ISuperElement;
}
