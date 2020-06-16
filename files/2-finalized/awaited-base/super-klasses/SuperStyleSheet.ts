import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { ISuperStyleSheet } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperStyleSheet, ISuperStyleSheetProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperStyleSheet>('SuperStyleSheet', getState, setState);
export const nodeAttacher = new NodeAttacher<ISuperStyleSheet>('createSuperStyleSheet', getState, setState, awaitedHandler);

export function SuperStyleSheetGenerator() {
  return class SuperStyleSheet implements ISuperStyleSheet, PromiseLike<ISuperStyleSheet> {
    constructor() {
      initializeConstantsAndProperties<SuperStyleSheet>(this, SuperStyleSheetConstantKeys, SuperStyleSheetPropertyKeys);
    }

    public then<TResult1 = ISuperStyleSheet, TResult2 = never>(onfulfilled?: ((value: ISuperStyleSheet) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperStyleSheetProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const SuperStyleSheetPropertyKeys = [];

export const SuperStyleSheetConstantKeys = [];
