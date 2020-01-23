import InternalHandler from '../InternalHandler';
import { IValidityState } from '../interfaces';

export default class ValidityState implements IValidityState {
  protected readonly _: IValidityStateRps = {};

  // properties

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

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpValidityStateKeys: Set<string> = new Set([]);

export interface IValidityStateRps {
  readonly badInput?: boolean;
  readonly customError?: boolean;
  readonly patternMismatch?: boolean;
  readonly rangeOverflow?: boolean;
  readonly rangeUnderflow?: boolean;
  readonly stepMismatch?: boolean;
  readonly tooLong?: boolean;
  readonly tooShort?: boolean;
  readonly typeMismatch?: boolean;
  readonly valid?: boolean;
  readonly valueMissing?: boolean;
}

export function setValidityStateRps(instance: IValidityState, data: IValidityStateRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpValidityStateKeys.has(key)) {
      throw new Error(`${key} is not a property of ValidityState`);
    }
    properties[key] = value;
  });
}
