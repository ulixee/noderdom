import StateMachine from '../../base/StateMachine';
import { IHTMLTableElementIsolate } from '../../base/interfaces/isolate';
import { IHTMLTableCaptionElement, IHTMLTableSectionElement } from '../../base/interfaces/official';
import { ISuperHTMLCollection } from '../../base/interfaces/super';
import HTMLTableElementIsolateBase, { IHTMLTableElementIsolateProperties } from '../../base/isolate-mixins/HTMLTableElementIsolate';
import { createHTMLTableCaptionElement, createSuperHTMLCollection, createHTMLTableSectionElement } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLTableElementIsolate, IHTMLTableElementIsolateProperties>();

export default class HTMLTableElementIsolate extends HTMLTableElementIsolateBase implements IHTMLTableElementIsolate {
  public get caption(): IHTMLTableCaptionElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLTableCaptionElement(awaitedPath.addProperty(this, 'caption'), awaitedOptions);
  }

  public get rows(): Promise<string> | ISuperHTMLCollection | Promise<number> {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty(this, 'rows'), awaitedOptions);
  }

  public get tBodies(): ISuperHTMLCollection {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperHTMLCollection(awaitedPath.addProperty(this, 'tBodies'), awaitedOptions);
  }

  public get tFoot(): IHTMLTableSectionElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLTableSectionElement(awaitedPath.addProperty(this, 'tFoot'), awaitedOptions);
  }

  public get tHead(): IHTMLTableSectionElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createHTMLTableSectionElement(awaitedPath.addProperty(this, 'tHead'), awaitedOptions);
  }
}
