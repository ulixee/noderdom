import StateMachine from '../../base/StateMachine';
import { IHTMLMeterElementIsolate } from '../../base/interfaces/isolate';
import { ISuperNodeList } from '../../base/interfaces/super';
import HTMLMeterElementIsolateBase, { IHTMLMeterElementIsolateProperties } from '../../base/isolate-mixins/HTMLMeterElementIsolate';
import { createSuperNodeList } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLMeterElementIsolate, IHTMLMeterElementIsolateProperties>();

export default class HTMLMeterElementIsolate extends HTMLMeterElementIsolateBase implements IHTMLMeterElementIsolate {
  public get labels(): ISuperNodeList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNodeList(awaitedPath.addProperty(this, 'labels'), awaitedOptions);
  }
}
