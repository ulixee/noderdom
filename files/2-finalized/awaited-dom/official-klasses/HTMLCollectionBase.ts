import StateMachine from '../../awaited-base/StateMachine';
import { IHTMLCollectionBase } from '../../awaited-base/interfaces/official';
import { HTMLCollectionBaseGenerator, IHTMLCollectionBaseProperties } from '../../awaited-base/official-klasses/HTMLCollectionBase';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCollectionBase, IHTMLCollectionBaseProperties>();
const HTMLCollectionBaseBaseClass = HTMLCollectionBaseGenerator();

export default class HTMLCollectionBase extends HTMLCollectionBaseBaseClass implements IHTMLCollectionBase {}
