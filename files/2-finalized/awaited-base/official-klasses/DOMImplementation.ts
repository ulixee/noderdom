import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IDOMImplementation } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMImplementation, IDOMImplementationProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMImplementation>('DOMImplementation', getState, setState);
export const nodeAttacher = new NodeAttacher<IDOMImplementation>('createDOMImplementation', getState, setState, awaitedHandler);

export function DOMImplementationGenerator() {
  return class DOMImplementation implements IDOMImplementation, PromiseLike<IDOMImplementation> {
    constructor() {
      initializeConstantsAndProperties<DOMImplementation>(this, DOMImplementationConstantKeys, DOMImplementationPropertyKeys);
    }

    // methods

    public hasFeature(): Promise<boolean> {
      return awaitedHandler.runMethod<boolean>(this, 'hasFeature', []);
    }

    public then<TResult1 = IDOMImplementation, TResult2 = never>(onfulfilled?: ((value: IDOMImplementation) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMImplementationProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const DOMImplementationPropertyKeys = [];

export const DOMImplementationConstantKeys = [];
