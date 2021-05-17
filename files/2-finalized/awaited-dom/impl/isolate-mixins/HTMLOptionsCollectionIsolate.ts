import StateMachine from '../../base/StateMachine';
import { IHTMLOptionsCollectionIsolate } from '../../base/interfaces/isolate';
import HTMLOptionsCollectionIsolateBase, { IHTMLOptionsCollectionIsolateProperties } from '../../base/isolate-mixins/HTMLOptionsCollectionIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLOptionsCollectionIsolate, IHTMLOptionsCollectionIsolateProperties>();

export default class HTMLOptionsCollectionIsolate extends HTMLOptionsCollectionIsolateBase implements IHTMLOptionsCollectionIsolate {}
