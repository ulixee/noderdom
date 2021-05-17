import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IAttr, INode } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
import { INodeProperties, NodePropertyKeys, NodeConstantKeys } from './Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IAttr, IAttrProperties>();
export const awaitedHandler = new AwaitedHandler<IAttr>('Attr', getState, setState);
export const nodeFactory = new NodeFactory<IAttr>(getState, setState, awaitedHandler);

export function AttrGenerator(Node: Constructable<INode>) {
  return class Attr extends Node implements IAttr, PromiseLike<IAttr> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createAttr',
      });
    }

    // properties

    public get localName(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'localName', false);
    }

    public get name(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'name', false);
    }

    public get namespaceURI(): Promise<string | null> {
      return awaitedHandler.getProperty<string | null>(this, 'namespaceURI', true);
    }

    public get ownerElement(): ISuperElement {
      throw new Error('Attr.ownerElement getter not implemented');
    }

    public get prefix(): Promise<string | null> {
      return awaitedHandler.getProperty<string | null>(this, 'prefix', true);
    }

    public get specified(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'specified', false);
    }

    public get value(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'value', false);
    }

    public then<TResult1 = IAttr, TResult2 = never>(onfulfilled?: ((value: IAttr) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, AttrPropertyKeys, AttrConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IAttrProperties extends INodeProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly localName?: Promise<string>;
  readonly name?: Promise<string>;
  readonly namespaceURI?: Promise<string | null>;
  readonly ownerElement?: ISuperElement;
  readonly prefix?: Promise<string | null>;
  readonly specified?: Promise<boolean>;
  readonly value?: Promise<string>;
}

export const AttrPropertyKeys = [...NodePropertyKeys, 'localName', 'name', 'namespaceURI', 'ownerElement', 'prefix', 'specified', 'value'];

export const AttrConstantKeys = [...NodeConstantKeys];
