import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IHTMLElement, IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IAssignedNodesOptions, INode, IElement, IHTMLSlotElement } from '../interfaces';
import { IHTMLElementProperties, IHTMLElementReadonlyProperties } from './HTMLElement';

// tslint:disable-next-line:variable-name
export function HTMLSlotElementGenerator(HTMLElement: Constructable<IHTMLElement>) {
  return class HTMLSlotElement extends HTMLElement implements IHTMLSlotElement {
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

    public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSlotElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
    public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
      InternalHandler.run<IHTMLSlotElement, void>(this, 'addEventListener', [type, listener, options]);
    }

    public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IHTMLSlotElement, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
    public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
      InternalHandler.run<IHTMLSlotElement, void>(this, 'removeEventListener', [type, listener, options]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IHTMLSlotElementProperties extends IHTMLElementProperties {
  name?: string;
}

export interface IHTMLSlotElementReadonlyProperties extends IHTMLElementReadonlyProperties {}

export const { getState, setState, setReadonlyOfHTMLSlotElement } = InternalStateGenerator<
  IHTMLSlotElement,
  IHTMLSlotElementProperties,
  IHTMLSlotElementReadonlyProperties
>('HTMLSlotElement');
