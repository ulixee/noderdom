import InternalHandler from '../InternalHandler';
import {
  IGlobalEventHandlersEventMap,
  IAddEventListenerOptions,
  IEventListenerOrEventListenerObject,
  IEventListenerOptions,
  IAssignedNodesOptions,
  INode,
  IElement,
  IHTMLSlotElement,
} from '../interfaces';
import HTMLElement, { IHTMLElementRps, rpHTMLElementKeys } from './HTMLElement';

export default class HTMLSlotElement extends HTMLElement implements IHTMLSlotElement {
  public get name(): string {
    return InternalHandler.get<IHTMLSlotElement, string>(this, 'name');
  }

  public set name(value: string) {
    InternalHandler.set<IHTMLSlotElement, string>(this, 'name', value);
  }

  // methods

  public assignedElements(options?: IAssignedNodesOptions): Iterable<IElement> {
    return InternalHandler.run<IHTMLSlotElement, Iterable<IElement>>(this, 'assignedElements', [options]);
  }

  public assignedNodes(options?: IAssignedNodesOptions): Iterable<INode> {
    return InternalHandler.run<IHTMLSlotElement, Iterable<INode>>(this, 'assignedNodes', [options]);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLSlotElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IAddEventListenerOptions,
  ): void;
  public addEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IAddEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLSlotElement, void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(
    type: K,
    listener: (this: IHTMLSlotElement, ev: IGlobalEventHandlersEventMap[K]) => any,
    options?: boolean | IEventListenerOptions,
  ): void;
  public removeEventListener(
    type: string,
    listener: IEventListenerOrEventListenerObject,
    options?: boolean | IEventListenerOptions,
  ): void {
    InternalHandler.run<IHTMLSlotElement, void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpHTMLSlotElementKeys: Set<string> = new Set([...rpHTMLElementKeys]);

export interface IHTMLSlotElementRps extends IHTMLElementRps {}

export function setHTMLSlotElementRps(instance: IHTMLSlotElement, data: IHTMLSlotElementRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpHTMLSlotElementKeys.has(key)) {
      throw new Error(`${key} is not a property of HTMLSlotElement`);
    }
    properties[key] = value;
  });
}
