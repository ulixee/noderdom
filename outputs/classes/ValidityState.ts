import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IValidityState } from '../interfaces';

export default class ValidityState implements IValidityState {
  public get badInput(): boolean {
    return InternalHandler.get<IValidityState, boolean>(this, 'badInput');
  }

  public get customError(): boolean {
    return InternalHandler.get<IValidityState, boolean>(this, 'customError');
  }

  public get patternMismatch(): boolean {
    return InternalHandler.get<IValidityState, boolean>(this, 'patternMismatch');
  }

  public get rangeOverflow(): boolean {
    return InternalHandler.get<IValidityState, boolean>(this, 'rangeOverflow');
  }

  public get rangeUnderflow(): boolean {
    return InternalHandler.get<IValidityState, boolean>(this, 'rangeUnderflow');
  }

  public get stepMismatch(): boolean {
    return InternalHandler.get<IValidityState, boolean>(this, 'stepMismatch');
  }

  public get tooLong(): boolean {
    return InternalHandler.get<IValidityState, boolean>(this, 'tooLong');
  }

  public get tooShort(): boolean {
    return InternalHandler.get<IValidityState, boolean>(this, 'tooShort');
  }

  public get typeMismatch(): boolean {
    return InternalHandler.get<IValidityState, boolean>(this, 'typeMismatch');
  }

  public get valid(): boolean {
    return InternalHandler.get<IValidityState, boolean>(this, 'valid');
  }

  public get valueMissing(): boolean {
    return InternalHandler.get<IValidityState, boolean>(this, 'valueMissing');
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IValidityStateProperties {
  badInput?: boolean;
  customError?: boolean;
  patternMismatch?: boolean;
  rangeOverflow?: boolean;
  rangeUnderflow?: boolean;
  stepMismatch?: boolean;
  tooLong?: boolean;
  tooShort?: boolean;
  typeMismatch?: boolean;
  valid?: boolean;
  valueMissing?: boolean;
}

export interface IValidityStateReadonlyProperties {
  badInput?: boolean;
  customError?: boolean;
  patternMismatch?: boolean;
  rangeOverflow?: boolean;
  rangeUnderflow?: boolean;
  stepMismatch?: boolean;
  tooLong?: boolean;
  tooShort?: boolean;
  typeMismatch?: boolean;
  valid?: boolean;
  valueMissing?: boolean;
}

export const { getState, setState, setReadonlyOfValidityState } = InternalStateGenerator<
  IValidityState,
  IValidityStateProperties,
  IValidityStateReadonlyProperties
>('ValidityState');
