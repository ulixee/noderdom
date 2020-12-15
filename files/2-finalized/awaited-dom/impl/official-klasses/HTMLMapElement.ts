import StateMachine from '../../base/StateMachine';
import { IHTMLMapElement } from '../../base/interfaces/official';
import { ISuperHTMLCollection } from '../../base/interfaces/super';
import { HTMLMapElementGenerator, IHTMLMapElementProperties } from '../../base/official-klasses/HTMLMapElement';
import { createSuperHTMLCollection } from '../create';
import HTMLElement from './HTMLElement';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLMapElement, IHTMLMapElementProperties>();
const HTMLMapElementBaseClass = HTMLMapElementGenerator(HTMLElement);

export default class HTMLMapElement extends HTMLMapElementBaseClass implements IHTMLMapElement {
  constructor() {
    super();
  }

  // properties

  public get areas(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty('areas'), awaitedOptions);
  }
}
