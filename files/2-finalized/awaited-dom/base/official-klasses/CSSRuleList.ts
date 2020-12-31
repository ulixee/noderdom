import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import AwaitedIterator from '../AwaitedIterator';
import NodeAttacher from '../NodeAttacher';
import { ICSSRuleList, ICSSRule } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ICSSRuleList, ICSSRuleListProperties>();
export const awaitedHandler = new AwaitedHandler<ICSSRuleList>('CSSRuleList', getState, setState);
export const nodeAttacher = new NodeAttacher<ICSSRuleList>(getState, setState, awaitedHandler);
export const awaitedIterator = new AwaitedIterator<ICSSRuleList, ICSSRule>(getState, setState, awaitedHandler);

export function CSSRuleListGenerator() {
  return class CSSRuleList implements ICSSRuleList, PromiseLike<ICSSRuleList> {
    constructor() {
      initializeConstantsAndProperties<CSSRuleList>(this, CSSRuleListConstantKeys, CSSRuleListPropertyKeys);
      setState(this, {
        createInstanceName: 'createCSSRuleList',
        createIterableName: 'createCSSRule',
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

    public get length(): Promise<number> {
      return awaitedHandler.getProperty<number>(this, 'length', false);
    }

    // methods

    public item(index: number): ICSSRule {
      throw new Error('CSSRuleList.item not implemented');
    }

    public then<TResult1 = ICSSRuleList, TResult2 = never>(onfulfilled?: ((value: ICSSRuleList) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }

    public [Symbol.iterator](): IterableIterator<ICSSRule> {
      return awaitedIterator.iterateAttached(this)[Symbol.iterator]();
    }

    [index: number]: ICSSRule;
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ICSSRuleListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  createInstanceName: string;
  createIterableName: string;

  readonly length?: Promise<number>;
}

export const CSSRuleListPropertyKeys = ['length'];

export const CSSRuleListConstantKeys = [];
