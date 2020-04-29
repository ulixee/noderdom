import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { ISuperHTMLElement } from '../../awaited-base/interfaces/super';
import { IElement } from '../../awaited-base/interfaces/official';
import { SuperHTMLElementGenerator, initialize, ISuperHTMLElementProperties } from '../../awaited-base/super-klasses/SuperHTMLElement';
import Element, { createElement } from '../official-klasses/Element';
import HTMLHeadElementIsolate from '../isolate-mixins/HTMLHeadElementIsolate';
import Node from '../official-klasses/Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLElement, ISuperHTMLElementProperties>();
const SuperHTMLElementBase = SuperHTMLElementGenerator(Element, HTMLHeadElementIsolate, Node);

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

export function createSuperHTMLElement<IAwaitedOptions = {}>(awaitedPath: AwaitedPath, awaitedOptions: IAwaitedOptions): ISuperHTMLElement {
  const instance = new SuperHTMLElement();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
