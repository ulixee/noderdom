import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IDOMParser, ISupportedType } from '../interfaces/official';
import { ISuperDocument } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IDOMParser, IDOMParserProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMParser>('DOMParser', getState, setState);

export function DOMParserGenerator() {
  return class DOMParser implements IDOMParser {
    constructor() {
      initializeConstantsAndProperties<DOMParser>(this, DOMParserConstantKeys, DOMParserPropertyKeys);
    }

    // methods

    public parseFromString(str: string, type: ISupportedType): ISuperDocument {
      throw new Error('DOMParser.parseFromString not implemented');
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMParserProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const DOMParserPropertyKeys = [];

export const DOMParserConstantKeys = [];
