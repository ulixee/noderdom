import StateMachine from '../../base/StateMachine';
import { IHTMLCollectionBase } from '../../base/interfaces/official';
import { HTMLCollectionBaseGenerator, IHTMLCollectionBaseProperties } from '../../base/official-klasses/HTMLCollectionBase';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCollectionBase, IHTMLCollectionBaseProperties>();
const HTMLCollectionBaseBaseClass = HTMLCollectionBaseGenerator();

export default class HTMLCollectionBase extends HTMLCollectionBaseBaseClass implements IHTMLCollectionBase {}
