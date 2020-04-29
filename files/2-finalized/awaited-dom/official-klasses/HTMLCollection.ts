import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { IHTMLCollection } from '../../awaited-base/interfaces/official';
import { HTMLCollectionGenerator, initialize, IHTMLCollectionProperties } from '../../awaited-base/official-klasses/HTMLCollection';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLCollection, IHTMLCollectionProperties>();
const HTMLCollectionBase = HTMLCollectionGenerator();

export default class HTMLCollection extends HTMLCollectionBase implements IHTMLCollection {
  constructor() {
    super();
    initialize(HTMLCollection, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createHTMLCollection<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLCollection {
  const instance = new HTMLCollection();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
