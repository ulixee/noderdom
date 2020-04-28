import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { ISuperHTMLElement } from '../../awaited-base/interfaces/super';
import { IElement } from '../../awaited-base/interfaces/official';
import { SuperHTMLElementGenerator, initialize, ISuperHTMLElementProperties } from '../../awaited-base/super-klasses/SuperHTMLElement';
import { createElement } from '../official-klasses/Element';
import HTMLHeadElementIsolate from './HTMLHeadElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLElement, ISuperHTMLElementProperties>();
const SuperHTMLElementBase = SuperHTMLElementGenerator(HTMLHeadElementIsolate);

export default class SuperHTMLElement extends SuperHTMLElementBase implements ISuperHTMLElement {
  constructor() {
    super();
    initialize(SuperHTMLElement, this);
  }

  // properties

  public get offsetParent(): IElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createElement(awaitedPath.addProperty('offsetParent'), awaitedOptions);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createSuperHTMLElement(awaitedPath: AwaitedPath, awaitedOptions: any): SuperHTMLElement {
  const instance = new SuperHTMLElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
