import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { ISuperHTMLCollection, ISuperElement } from '../interfaces/super';
import { IHTMLCollectionBaseIsolate, IHTMLCollectionIsolate, IHTMLOptionsCollectionIsolate } from '../interfaces/isolate';
import { IHTMLCollectionBaseIsolateProperties, HTMLCollectionBaseIsolatePropertyKeys, HTMLCollectionBaseIsolateConstantKeys } from '../isolate-mixins/HTMLCollectionBaseIsolate';
import { IHTMLCollectionIsolateProperties, HTMLCollectionIsolatePropertyKeys, HTMLCollectionIsolateConstantKeys } from '../isolate-mixins/HTMLCollectionIsolate';
import { IHTMLOptionsCollectionIsolateProperties, HTMLOptionsCollectionIsolatePropertyKeys, HTMLOptionsCollectionIsolateConstantKeys } from '../isolate-mixins/HTMLOptionsCollectionIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperHTMLCollection, ISuperHTMLCollectionProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperHTMLCollection>('SuperHTMLCollection', getState, setState);
export const nodeFactory = new NodeFactory<ISuperHTMLCollection>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<ISuperHTMLCollection, ISuperElement>(getState, setState, awaitedHandler);

export function SuperHTMLCollectionGenerator(HTMLCollectionBaseIsolate: Constructable<IHTMLCollectionBaseIsolate>, HTMLCollectionIsolate: Constructable<IHTMLCollectionIsolate>, HTMLOptionsCollectionIsolate: Constructable<IHTMLOptionsCollectionIsolate>) {
  const Parent = (ClassMixer(HTMLCollectionBaseIsolate, [HTMLCollectionIsolate, HTMLOptionsCollectionIsolate]) as unknown) as Constructable<IHTMLCollectionBaseIsolate & IHTMLCollectionIsolate & IHTMLOptionsCollectionIsolate>;

  return class SuperHTMLCollection extends Parent implements ISuperHTMLCollection, PromiseLike<ISuperHTMLCollection> {
    constructor() {
      super();
      setState(this, {
        createInstanceName: 'createSuperHTMLCollection',
        createIterableName: 'createSuperElement',
      });
      // proxy supports indexed property access
      const proxy = new Proxy(this, {
        get(target, prop) {
          if (prop in target) {
            // @ts-ignore
            const value: any = target[prop];
            if (typeof value === 'function') return value.bind(target);
            return value;
          }

          // delegate to indexer property
          if ((typeof prop === 'string' || typeof prop === 'number') && !isNaN(prop as unknown as number)) {
            const param = parseInt(prop as string, 10);
            return target.item(param);
          }

          // delegate to string indexer
          if(typeof prop === 'string') {
            return target.namedItem(prop as string);
          }
        },
      });

      return proxy;
    }

    // methods

    public namedItem(name: string): ISuperElement {
      throw new Error('SuperHTMLCollection.namedItem not implemented');
    }

    public then<TResult1 = ISuperHTMLCollection, TResult2 = never>(onfulfilled?: ((value: ISuperHTMLCollection) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.iterator](): Iterator<ISuperElement> {
      return awaitedIterator.iterateNodePointers(this);
    }

    [index: number]: ISuperElement;

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, SuperHTMLCollectionPropertyKeys, SuperHTMLCollectionConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperHTMLCollectionProperties extends IHTMLCollectionBaseIsolateProperties, IHTMLCollectionIsolateProperties, IHTMLOptionsCollectionIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  createIterableName: string;
}

export const SuperHTMLCollectionPropertyKeys = [...HTMLCollectionBaseIsolatePropertyKeys, ...HTMLCollectionIsolatePropertyKeys, ...HTMLOptionsCollectionIsolatePropertyKeys];

export const SuperHTMLCollectionConstantKeys = [...HTMLCollectionBaseIsolateConstantKeys, ...HTMLCollectionIsolateConstantKeys, ...HTMLOptionsCollectionIsolateConstantKeys];
