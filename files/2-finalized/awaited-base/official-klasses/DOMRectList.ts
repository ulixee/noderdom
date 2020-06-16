import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IDOMRectList } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMRectList, IDOMRectListProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMRectList>('DOMRectList', getState, setState);
export const nodeAttacher = new NodeAttacher<IDOMRectList>('createDOMRectList', getState, setState, awaitedHandler);

export function DOMRectListGenerator() {
  return class DOMRectList implements IDOMRectList, PromiseLike<IDOMRectList> {
    constructor() {
      initializeConstantsAndProperties<DOMRectList>(this, DOMRectListConstantKeys, DOMRectListPropertyKeys);
    }

    public then<TResult1 = IDOMRectList, TResult2 = never>(onfulfilled?: ((value: IDOMRectList) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMRectListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const DOMRectListPropertyKeys = [];

export const DOMRectListConstantKeys = [];
