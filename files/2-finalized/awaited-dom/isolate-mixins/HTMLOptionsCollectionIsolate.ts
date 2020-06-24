import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLOptionsCollectionIsolate } from '../../awaited-base/interfaces/isolate';
import HTMLOptionsCollectionIsolateBase, { IHTMLOptionsCollectionIsolateProperties } from '../../awaited-base/isolate-mixins/HTMLOptionsCollectionIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOptionsCollectionIsolate, IHTMLOptionsCollectionIsolateProperties>();

export default class HTMLOptionsCollectionIsolate extends HTMLOptionsCollectionIsolateBase implements IHTMLOptionsCollectionIsolate {}
