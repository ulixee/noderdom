import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import Constructable from '../Constructable';
import { ISuperText } from '../interfaces/super';
import { IText } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperText, ISuperTextProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperText>('SuperText', getState, setState);

export function SuperTextGenerator() {
  return class SuperText implements ISuperText {
    constructor(_data?: string) {
      initialize(SuperText, this);
    }

    // properties

    public get wholeText(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'wholeText', false);
    }

    // methods

    public splitText(offset: number): Promise<IText> {
      return awaitedHandler.runMethod<IText>(this, 'splitText', [offset]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperTextProperties {
  readonly wholeText?: Promise<string>;
}

export const SuperTextPropertyKeys = ['wholeText'];

export const SuperTextConstantKeys = [];

// INITIALIZE CONSTANTS AND PROPERTIES ///////////////////////////////////////

export function initialize(Klass: Constructable<ISuperText>, self: ISuperText) {
  initializeConstantsAndProperties<ISuperText>(Klass, self, SuperTextConstantKeys, SuperTextPropertyKeys);
}
