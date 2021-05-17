import StateMachine from '../../base/StateMachine';
import { IHTMLMapElementIsolate } from '../../base/interfaces/isolate';
import { ISuperHTMLCollection } from '../../base/interfaces/super';
import HTMLMapElementIsolateBase, { IHTMLMapElementIsolateProperties } from '../../base/isolate-mixins/HTMLMapElementIsolate';
import { createSuperHTMLCollection } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLMapElementIsolate, IHTMLMapElementIsolateProperties>();

export default class HTMLMapElementIsolate extends HTMLMapElementIsolateBase implements IHTMLMapElementIsolate {
  public get areas(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty(this, 'areas'), awaitedOptions);
  }
}
