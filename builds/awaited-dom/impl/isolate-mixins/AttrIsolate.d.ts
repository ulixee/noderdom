import { IAttrIsolate } from '../../base/interfaces/isolate';
import { ISuperElement } from '../../base/interfaces/super';
import AttrIsolateBase, { IAttrIsolateProperties } from '../../base/isolate-mixins/AttrIsolate';
export declare const getState: <C = IAttrIsolate, P = IAttrIsolateProperties>(instance: C) => P, setState: <P = IAttrIsolateProperties>(instance: IAttrIsolate, properties: P) => void;
export default class AttrIsolate extends AttrIsolateBase implements IAttrIsolate {
    get ownerElement(): ISuperElement;
}
