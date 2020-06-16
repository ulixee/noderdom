import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IStyleSheet } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IStyleSheet, IStyleSheetProperties>();
export const awaitedHandler = new AwaitedHandler<IStyleSheet>('StyleSheet', getState, setState);
export const nodeAttacher = new NodeAttacher<IStyleSheet>('createStyleSheet', getState, setState, awaitedHandler);

export function StyleSheetGenerator() {
  return class StyleSheet implements IStyleSheet, PromiseLike<IStyleSheet> {
    constructor() {
      initializeConstantsAndProperties<StyleSheet>(this, StyleSheetConstantKeys, StyleSheetPropertyKeys);
    }

    public then<TResult1 = IStyleSheet, TResult2 = never>(onfulfilled?: ((value: IStyleSheet) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IStyleSheetProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const StyleSheetPropertyKeys = [];

export const StyleSheetConstantKeys = [];
