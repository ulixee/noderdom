import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeFactory from '../NodeFactory';
import { IXPathResult } from '../interfaces/official';
import { ISuperNode } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IXPathResult, IXPathResultProperties>();
export const awaitedHandler = new AwaitedHandler<IXPathResult>('XPathResult', getState, setState);
export const nodeFactory = new NodeFactory<IXPathResult>(getState, setState, awaitedHandler);

export function XPathResultGenerator() {
  return class XPathResult implements IXPathResult, PromiseLike<IXPathResult> {
    public static readonly ANY_TYPE: number = 0;
    public static readonly ANY_UNORDERED_NODE_TYPE: number = 8;
    public static readonly BOOLEAN_TYPE: number = 3;
    public static readonly FIRST_ORDERED_NODE_TYPE: number = 9;
    public static readonly NUMBER_TYPE: number = 1;
    public static readonly ORDERED_NODE_ITERATOR_TYPE: number = 5;
    public static readonly ORDERED_NODE_SNAPSHOT_TYPE: number = 7;
    public static readonly STRING_TYPE: number = 2;
    public static readonly UNORDERED_NODE_ITERATOR_TYPE: number = 4;
    public static readonly UNORDERED_NODE_SNAPSHOT_TYPE: number = 6;

    public readonly ANY_TYPE: number = 0;
    public readonly ANY_UNORDERED_NODE_TYPE: number = 8;
    public readonly BOOLEAN_TYPE: number = 3;
    public readonly FIRST_ORDERED_NODE_TYPE: number = 9;
    public readonly NUMBER_TYPE: number = 1;
    public readonly ORDERED_NODE_ITERATOR_TYPE: number = 5;
    public readonly ORDERED_NODE_SNAPSHOT_TYPE: number = 7;
    public readonly STRING_TYPE: number = 2;
    public readonly UNORDERED_NODE_ITERATOR_TYPE: number = 4;
    public readonly UNORDERED_NODE_SNAPSHOT_TYPE: number = 6;
    constructor() {
      setState(this, {
        createInstanceName: 'createXPathResult',
      });
    }

    // properties

    public get booleanValue(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'booleanValue', false);
    }

    public get invalidIteratorState(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'invalidIteratorState', false);
    }

    public get numberValue(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'numberValue', false);
    }

    public get resultType(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'resultType', false);
    }

    public get singleNodeValue(): ISuperNode {
      throw new Error('XPathResult.singleNodeValue getter not implemented');
    }

    public get snapshotLength(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'snapshotLength', false);
    }

    public get stringValue(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'stringValue', false);
    }

    // methods

    public iterateNext(): ISuperNode {
      throw new Error('XPathResult.iterateNext not implemented');
    }

    public snapshotItem(index: number): ISuperNode {
      throw new Error('XPathResult.snapshotItem not implemented');
    }

    public then<TResult1 = IXPathResult, TResult2 = never>(onfulfilled?: ((value: IXPathResult) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, XPathResultPropertyKeys, XPathResultConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IXPathResultProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;

  readonly booleanValue?: Promise<boolean>;
  readonly invalidIteratorState?: Promise<boolean>;
  readonly numberValue?: Promise<number>;
  readonly resultType?: Promise<number>;
  readonly singleNodeValue?: ISuperNode;
  readonly snapshotLength?: Promise<number>;
  readonly stringValue?: Promise<string>;
}

export const XPathResultPropertyKeys = ['booleanValue', 'invalidIteratorState', 'numberValue', 'resultType', 'singleNodeValue', 'snapshotLength', 'stringValue'];

export const XPathResultConstantKeys = ['ANY_TYPE', 'ANY_UNORDERED_NODE_TYPE', 'BOOLEAN_TYPE', 'FIRST_ORDERED_NODE_TYPE', 'NUMBER_TYPE', 'ORDERED_NODE_ITERATOR_TYPE', 'ORDERED_NODE_SNAPSHOT_TYPE', 'STRING_TYPE', 'UNORDERED_NODE_ITERATOR_TYPE', 'UNORDERED_NODE_SNAPSHOT_TYPE'];
