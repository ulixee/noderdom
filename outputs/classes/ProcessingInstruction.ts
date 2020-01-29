import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { ICharacterData, IProcessingInstruction } from '../interfaces';
import { ICharacterDataProperties, ICharacterDataReadonlyProperties } from './CharacterData';

// tslint:disable-next-line:variable-name
export function ProcessingInstructionGenerator(CharacterData: Constructable<ICharacterData>) {
  return class ProcessingInstruction extends CharacterData implements IProcessingInstruction {
    public get target(): string {
      return InternalHandler.get<IProcessingInstruction, string>(this, 'target');
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IProcessingInstructionProperties extends ICharacterDataProperties {
  target?: string;
}

export interface IProcessingInstructionReadonlyProperties extends ICharacterDataReadonlyProperties {
  target?: string;
}

export const { getState, setState, setReadonlyOfProcessingInstruction } = InternalStateGenerator<
  IProcessingInstruction,
  IProcessingInstructionProperties,
  IProcessingInstructionReadonlyProperties
>('ProcessingInstruction');
