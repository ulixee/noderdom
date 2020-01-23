import InternalHandler from '../InternalHandler';
import { IProcessingInstruction } from '../interfaces';
import CharacterData, { ICharacterDataRps, rpCharacterDataKeys } from './CharacterData';

export default class ProcessingInstruction extends CharacterData implements IProcessingInstruction {
  protected readonly _: IProcessingInstructionRps = {};

  // properties

  public get target(): string {
    return InternalHandler.get<IProcessingInstruction, string>(this, 'target');
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpProcessingInstructionKeys: Set<string> = new Set([...rpCharacterDataKeys]);

export interface IProcessingInstructionRps extends ICharacterDataRps {
  readonly target?: string;
}

export function setProcessingInstructionRps(instance: IProcessingInstruction, data: IProcessingInstructionRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpProcessingInstructionKeys.has(key)) {
      throw new Error(`${key} is not a property of ProcessingInstruction`);
    }
    properties[key] = value;
  });
}
