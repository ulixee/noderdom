import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IStylePropertyMapReadOnly } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IStylePropertyMapReadOnly, IStylePropertyMapReadOnlyProperties>();
export const awaitedHandler = new AwaitedHandler<IStylePropertyMapReadOnly>('StylePropertyMapReadOnly', getState, setState);

export function StylePropertyMapReadOnlyGenerator() {
  return class StylePropertyMapReadOnly implements IStylePropertyMapReadOnly {
    constructor() {
      initializeConstantsAndProperties<StylePropertyMapReadOnly>(this, StylePropertyMapReadOnlyConstantKeys, StylePropertyMapReadOnlyPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IStylePropertyMapReadOnlyProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const StylePropertyMapReadOnlyPropertyKeys = [];

export const StylePropertyMapReadOnlyConstantKeys = [];
