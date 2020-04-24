// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IText } from '../interfaces/dom';
import { ISuperText } from '../interfaces/supers';

export const { getState, setState, setHiddenState, setReadonlyOfSuperText } = StateMachine<
  ISuperText,
  ISuperTextProperties,
  ISuperTextReadonlyProperties
>('SuperText');

export const awaitedHandler = new AwaitedHandler<ISuperText>('SuperText', getState, setState);

export default class SuperText implements ISuperText {
  constructor(_data?: string) {
    initializeConstantsAndProperties<SuperText>(SuperText, this, SuperTextConstantKeys, SuperTextPropertyKeys);
  }

  // properties

  public get wholeText(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'wholeText', false);
  }

  // methods

  public splitText(offset: number): Promise<IText> {
    return awaitedHandler.runMethod<IText>(this, 'splitText', [offset]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperTextReadonlyProperties {
  readonly wholeText?: Promise<string>;
}

export interface ISuperTextProperties extends ISuperTextReadonlyProperties {}

export const SuperTextPropertyKeys = ['wholeText'];

export const SuperTextConstantKeys = [];
