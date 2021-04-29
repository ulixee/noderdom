import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeFactory from '../NodeFactory';
import { ICSSStyleDeclaration, ICSSRule } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ICSSStyleDeclaration, ICSSStyleDeclarationProperties>();
export const awaitedHandler = new AwaitedHandler<ICSSStyleDeclaration>('CSSStyleDeclaration', getState, setState);
export const nodeFactory = new NodeFactory<ICSSStyleDeclaration>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<ICSSStyleDeclaration, string>(getState, setState, awaitedHandler);

export function CSSStyleDeclarationGenerator() {
  return class CSSStyleDeclaration implements ICSSStyleDeclaration, PromiseLike<ICSSStyleDeclaration> {
    constructor() {
      initializeConstantsAndProperties<CSSStyleDeclaration>(this, CSSStyleDeclarationConstantKeys, CSSStyleDeclarationPropertyKeys);
      setState(this, {
        createInstanceName: 'createCSSStyleDeclaration',
        createIterableName: 'string',
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
          if (!isNaN(prop as number)) {
            const param = parseInt(prop as string, 10);
            return target.item(param);
          }
        },
      });

      recordProxy(proxy, this);
      return proxy;
    }

    // properties

    public get cssFloat(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'cssFloat', false);
    }

    public get cssText(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'cssText', false);
    }

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    public get parentRule(): ICSSRule {
      throw new Error('CSSStyleDeclaration.parentRule getter not implemented');
    }

    // methods

    public getPropertyPriority(property: string): Promise<string> {
      return awaitedHandler.runMethod<string>(this, 'getPropertyPriority', [property]);
    }

    public getPropertyValue(property: string): Promise<string> {
      return awaitedHandler.runMethod<string>(this, 'getPropertyValue', [property]);
    }

    public item(index: number): Promise<string> {
      return awaitedHandler.runMethod<string>(this, 'item', [index]);
    }

    public removeProperty(property: string): Promise<string> {
      return awaitedHandler.runMethod<string>(this, 'removeProperty', [property]);
    }

    public setProperty(property: string, value: string, priority?: string): Promise<void> {
      return awaitedHandler.runMethod<void>(this, 'setProperty', [property, value, priority]);
    }

    public then<TResult1 = ICSSStyleDeclaration, TResult2 = never>(onfulfilled?: ((value: ICSSStyleDeclaration) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
    }

    public [Symbol.iterator](): IterableIterator<string> {
      return awaitedIterator.iterateNodePointers(this)[Symbol.iterator]();
    }

    [index: number]: string;
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ICSSStyleDeclarationProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  createIterableName: string;

  readonly cssFloat?: Promise<string>;
  readonly cssText?: Promise<string>;
  readonly length?: Promise<number>;
  readonly parentRule?: ICSSRule;
}

export const CSSStyleDeclarationPropertyKeys = ['cssFloat', 'cssText', 'length', 'parentRule'];

export const CSSStyleDeclarationConstantKeys = [];
