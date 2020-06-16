import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IDOMRect } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMRect, IDOMRectProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMRect>('DOMRect', getState, setState);
export const nodeAttacher = new NodeAttacher<IDOMRect>('createDOMRect', getState, setState, awaitedHandler);

export function DOMRectGenerator() {
  return class DOMRect implements IDOMRect, PromiseLike<IDOMRect> {
    constructor(_x?: number, _y?: number, _width?: number, _height?: number) {
      initializeConstantsAndProperties<DOMRect>(this, DOMRectConstantKeys, DOMRectPropertyKeys);
    }

    public then<TResult1 = IDOMRect, TResult2 = never>(onfulfilled?: ((value: IDOMRect) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMRectProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const DOMRectPropertyKeys = [];

export const DOMRectConstantKeys = [];
