import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalStateGenerator from '../InternalStateGenerator';
import { INode, INonElementParentNode, IParentNode, IDocumentFragment } from '../interfaces';
import { INodeProperties, INodeReadonlyProperties } from './Node';
import { INonElementParentNodeProperties, INonElementParentNodeReadonlyProperties } from '../mixins/NonElementParentNode';
import { IParentNodeProperties, IParentNodeReadonlyProperties } from '../mixins/ParentNode';

// tslint:disable-next-line:variable-name
export function DocumentFragmentGenerator(Node: Constructable<INode>, NonElementParentNode: Constructable<INonElementParentNode>, ParentNode: Constructable<IParentNode>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(Node, [NonElementParentNode, ParentNode]) as unknown) as Constructable<INode & INonElementParentNode & IParentNode>;

  return class DocumentFragment extends Parent implements IDocumentFragment {};
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IDocumentFragmentProperties extends INodeProperties, INonElementParentNodeProperties, IParentNodeProperties {}

export interface IDocumentFragmentReadonlyProperties extends INodeReadonlyProperties, INonElementParentNodeReadonlyProperties, IParentNodeReadonlyProperties {}

export const { getState, setState, setReadonlyOfDocumentFragment } = InternalStateGenerator<
  IDocumentFragment,
  IDocumentFragmentProperties,
  IDocumentFragmentReadonlyProperties
>('DocumentFragment');
