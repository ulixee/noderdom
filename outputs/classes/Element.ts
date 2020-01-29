import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { INode, IChildNode, INonDocumentTypeChildNode, IParentNode, ISlotable, IDOMTokenList, INamedNodeMap, IShadowRoot, IAttr, IShadowRootInit, IElement, IHTMLCollection, IDOMRectList, IDOMRect } from '../interfaces';
import { INodeProperties, INodeReadonlyProperties } from './Node';
import { IChildNodeProperties, IChildNodeReadonlyProperties } from '../mixins/ChildNode';
import { INonDocumentTypeChildNodeProperties, INonDocumentTypeChildNodeReadonlyProperties } from '../mixins/NonDocumentTypeChildNode';
import { IParentNodeProperties, IParentNodeReadonlyProperties } from '../mixins/ParentNode';
import { ISlotableProperties, ISlotableReadonlyProperties } from '../mixins/Slotable';

// tslint:disable-next-line:variable-name
export function ElementGenerator(Node: Constructable<INode>, ChildNode: Constructable<IChildNode>, NonDocumentTypeChildNode: Constructable<INonDocumentTypeChildNode>, ParentNode: Constructable<IParentNode>, Slotable: Constructable<ISlotable>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(Node, [ChildNode, NonDocumentTypeChildNode, ParentNode, Slotable]) as unknown) as Constructable<INode & IChildNode & INonDocumentTypeChildNode & IParentNode & ISlotable>;

  return class Element extends Parent implements IElement {
    public get attributes(): INamedNodeMap {
      return InternalHandler.get<IElement, INamedNodeMap>(this, 'attributes');
    }

    public get classList(): IDOMTokenList {
      return InternalHandler.get<IElement, IDOMTokenList>(this, 'classList');
    }

    public get className(): string {
      return InternalHandler.get<IElement, string>(this, 'className');
    }

    public set className(value: string) {
      InternalHandler.set<IElement, string>(this, 'className', value);
    }

    public get clientHeight(): number {
      return InternalHandler.get<IElement, number>(this, 'clientHeight');
    }

    public get clientLeft(): number {
      return InternalHandler.get<IElement, number>(this, 'clientLeft');
    }

    public get clientTop(): number {
      return InternalHandler.get<IElement, number>(this, 'clientTop');
    }

    public get clientWidth(): number {
      return InternalHandler.get<IElement, number>(this, 'clientWidth');
    }

    public get id(): string {
      return InternalHandler.get<IElement, string>(this, 'id');
    }

    public set id(value: string) {
      InternalHandler.set<IElement, string>(this, 'id', value);
    }

    public get innerHTML(): string {
      return InternalHandler.get<IElement, string>(this, 'innerHTML');
    }

    public set innerHTML(value: string) {
      InternalHandler.set<IElement, string>(this, 'innerHTML', value);
    }

    public get localName(): string {
      return InternalHandler.get<IElement, string>(this, 'localName');
    }

    public get namespaceURI(): string | null {
      return InternalHandler.get<IElement, string | null>(this, 'namespaceURI');
    }

    public get outerHTML(): string {
      return InternalHandler.get<IElement, string>(this, 'outerHTML');
    }

    public set outerHTML(value: string) {
      InternalHandler.set<IElement, string>(this, 'outerHTML', value);
    }

    public get prefix(): string | null {
      return InternalHandler.get<IElement, string | null>(this, 'prefix');
    }

    public get scrollHeight(): number {
      return InternalHandler.get<IElement, number>(this, 'scrollHeight');
    }

    public get scrollLeft(): number {
      return InternalHandler.get<IElement, number>(this, 'scrollLeft');
    }

    public set scrollLeft(value: number) {
      InternalHandler.set<IElement, number>(this, 'scrollLeft', value);
    }

    public get scrollTop(): number {
      return InternalHandler.get<IElement, number>(this, 'scrollTop');
    }

    public set scrollTop(value: number) {
      InternalHandler.set<IElement, number>(this, 'scrollTop', value);
    }

    public get scrollWidth(): number {
      return InternalHandler.get<IElement, number>(this, 'scrollWidth');
    }

    public get shadowRoot(): IShadowRoot | null {
      return InternalHandler.get<IElement, IShadowRoot | null>(this, 'shadowRoot');
    }

    public get slot(): string {
      return InternalHandler.get<IElement, string>(this, 'slot');
    }

    public set slot(value: string) {
      InternalHandler.set<IElement, string>(this, 'slot', value);
    }

    public get tagName(): string {
      return InternalHandler.get<IElement, string>(this, 'tagName');
    }

    // methods

    public attachShadow(init: IShadowRootInit): IShadowRoot {
      return InternalHandler.run<IElement, IShadowRoot>(this, 'attachShadow', [init]);
    }

    public closest(selectors: string): IElement | null {
      return InternalHandler.run<IElement, IElement | null>(this, 'closest', [selectors]);
    }

    public getAttribute(qualifiedName: string): string | null {
      return InternalHandler.run<IElement, string | null>(this, 'getAttribute', [qualifiedName]);
    }

    public getAttributeNS(namespace: string | null, localName: string): string | null {
      return InternalHandler.run<IElement, string | null>(this, 'getAttributeNS', [namespace, localName]);
    }

    public getAttributeNames(): Iterable<string> {
      return InternalHandler.run<IElement, Iterable<string>>(this, 'getAttributeNames', []);
    }

    public getAttributeNode(qualifiedName: string): IAttr | null {
      return InternalHandler.run<IElement, IAttr | null>(this, 'getAttributeNode', [qualifiedName]);
    }

    public getAttributeNodeNS(namespace: string | null, localName: string): IAttr | null {
      return InternalHandler.run<IElement, IAttr | null>(this, 'getAttributeNodeNS', [namespace, localName]);
    }

    public getBoundingClientRect(): IDOMRect {
      return InternalHandler.run<IElement, IDOMRect>(this, 'getBoundingClientRect', []);
    }

    public getClientRects(): IDOMRectList {
      return InternalHandler.run<IElement, IDOMRectList>(this, 'getClientRects', []);
    }

    public getElementsByClassName(classNames: string): IHTMLCollection {
      return InternalHandler.run<IElement, IHTMLCollection>(this, 'getElementsByClassName', [classNames]);
    }

    public getElementsByTagName(qualifiedName: string): IHTMLCollection {
      return InternalHandler.run<IElement, IHTMLCollection>(this, 'getElementsByTagName', [qualifiedName]);
    }

    public getElementsByTagNameNS(namespace: string | null, localName: string): IHTMLCollection {
      return InternalHandler.run<IElement, IHTMLCollection>(this, 'getElementsByTagNameNS', [namespace, localName]);
    }

    public hasAttribute(qualifiedName: string): boolean {
      return InternalHandler.run<IElement, boolean>(this, 'hasAttribute', [qualifiedName]);
    }

    public hasAttributeNS(namespace: string | null, localName: string): boolean {
      return InternalHandler.run<IElement, boolean>(this, 'hasAttributeNS', [namespace, localName]);
    }

    public hasAttributes(): boolean {
      return InternalHandler.run<IElement, boolean>(this, 'hasAttributes', []);
    }

    public insertAdjacentElement(where: string, element: IElement): IElement | null {
      return InternalHandler.run<IElement, IElement | null>(this, 'insertAdjacentElement', [where, element]);
    }

    public insertAdjacentHTML(position: string, text: string): void {
      InternalHandler.run<IElement, void>(this, 'insertAdjacentHTML', [position, text]);
    }

    public insertAdjacentText(where: string, data: string): void {
      InternalHandler.run<IElement, void>(this, 'insertAdjacentText', [where, data]);
    }

    public matches(selectors: string): boolean {
      return InternalHandler.run<IElement, boolean>(this, 'matches', [selectors]);
    }

    public removeAttribute(qualifiedName: string): void {
      InternalHandler.run<IElement, void>(this, 'removeAttribute', [qualifiedName]);
    }

    public removeAttributeNS(namespace: string | null, localName: string): void {
      InternalHandler.run<IElement, void>(this, 'removeAttributeNS', [namespace, localName]);
    }

    public removeAttributeNode(attr: IAttr): IAttr {
      return InternalHandler.run<IElement, IAttr>(this, 'removeAttributeNode', [attr]);
    }

    public setAttribute(qualifiedName: string, value: string): void {
      InternalHandler.run<IElement, void>(this, 'setAttribute', [qualifiedName, value]);
    }

    public setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void {
      InternalHandler.run<IElement, void>(this, 'setAttributeNS', [namespace, qualifiedName, value]);
    }

    public setAttributeNode(attr: IAttr): IAttr | null {
      return InternalHandler.run<IElement, IAttr | null>(this, 'setAttributeNode', [attr]);
    }

    public setAttributeNodeNS(attr: IAttr): IAttr | null {
      return InternalHandler.run<IElement, IAttr | null>(this, 'setAttributeNodeNS', [attr]);
    }

    public toggleAttribute(qualifiedName: string, force?: boolean): boolean {
      return InternalHandler.run<IElement, boolean>(this, 'toggleAttribute', [qualifiedName, force]);
    }

    public webkitMatchesSelector(selectors: string): boolean {
      return InternalHandler.run<IElement, boolean>(this, 'webkitMatchesSelector', [selectors]);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IElementProperties extends INodeProperties, IChildNodeProperties, INonDocumentTypeChildNodeProperties, IParentNodeProperties, ISlotableProperties {
  attributes?: INamedNodeMap;
  classList?: IDOMTokenList;
  className?: string;
  clientHeight?: number;
  clientLeft?: number;
  clientTop?: number;
  clientWidth?: number;
  id?: string;
  innerHTML?: string;
  localName?: string;
  namespaceURI?: string | null;
  outerHTML?: string;
  prefix?: string | null;
  scrollHeight?: number;
  scrollLeft?: number;
  scrollTop?: number;
  scrollWidth?: number;
  shadowRoot?: IShadowRoot | null;
  slot?: string;
  tagName?: string;
}

export interface IElementReadonlyProperties extends INodeReadonlyProperties, IChildNodeReadonlyProperties, INonDocumentTypeChildNodeReadonlyProperties, IParentNodeReadonlyProperties, ISlotableReadonlyProperties {
  attributes?: INamedNodeMap;
  classList?: IDOMTokenList;
  clientHeight?: number;
  clientLeft?: number;
  clientTop?: number;
  clientWidth?: number;
  localName?: string;
  namespaceURI?: string | null;
  prefix?: string | null;
  scrollHeight?: number;
  scrollWidth?: number;
  shadowRoot?: IShadowRoot | null;
  tagName?: string;
}

export const { getState, setState, setReadonlyOfElement } = InternalStateGenerator<
  IElement,
  IElementProperties,
  IElementReadonlyProperties
>('Element');
