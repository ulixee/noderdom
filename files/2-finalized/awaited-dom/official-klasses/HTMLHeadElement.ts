import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { IHTMLHeadElement } from '../../awaited-base/interfaces/official';
import { HTMLHeadElementGenerator, initialize, IHTMLHeadElementProperties } from '../../awaited-base/official-klasses/HTMLHeadElement';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLHeadElement, IHTMLHeadElementProperties>();
const HTMLHeadElementBase = HTMLHeadElementGenerator(HTMLElement);

export default class HTMLHeadElement extends HTMLHeadElementBase implements IHTMLHeadElement {
  constructor() {
    super();
    initialize(HTMLHeadElement, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createHTMLHeadElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): IHTMLHeadElement {
  const instance = new HTMLHeadElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
