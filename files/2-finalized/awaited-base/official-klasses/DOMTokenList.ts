import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IDOMTokenList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMTokenList, IDOMTokenListProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMTokenList>('DOMTokenList', getState, setState);
export const nodeAttacher = new NodeAttacher<IDOMTokenList>('createDOMTokenList', getState, setState, awaitedHandler);

export function DOMTokenListGenerator() {
  return class DOMTokenList implements IDOMTokenList, PromiseLike<IDOMTokenList> {
    constructor() {
      initializeConstantsAndProperties<DOMTokenList>(this, DOMTokenListConstantKeys, DOMTokenListPropertyKeys);
    }

    public then<TResult1 = IDOMTokenList, TResult2 = never>(onfulfilled?: ((value: IDOMTokenList) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMTokenListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const DOMTokenListPropertyKeys = [];

export const DOMTokenListConstantKeys = [];
