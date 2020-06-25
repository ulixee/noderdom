import StateMachine from '../../base/StateMachine';
import { IHTMLCollectionBaseIsolate } from '../../base/interfaces/isolate';
import HTMLCollectionBaseIsolateBase, { IHTMLCollectionBaseIsolateProperties } from '../../base/isolate-mixins/HTMLCollectionBaseIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCollectionBaseIsolate, IHTMLCollectionBaseIsolateProperties>();

export default class HTMLCollectionBaseIsolate extends HTMLCollectionBaseIsolateBase implements IHTMLCollectionBaseIsolate {}
