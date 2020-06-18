import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLCollectionBaseIsolate } from '../../awaited-base/interfaces/isolate';
import HTMLCollectionBaseIsolateBase, { IHTMLCollectionBaseIsolateProperties } from '../../awaited-base/isolate-mixins/HTMLCollectionBaseIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCollectionBaseIsolate, IHTMLCollectionBaseIsolateProperties>();

export default class HTMLCollectionBaseIsolate extends HTMLCollectionBaseIsolateBase implements IHTMLCollectionBaseIsolate {}
