import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IDOMParser, ISupportedType } from '../interfaces/official';
import { ISuperDocument } from '../interfaces/super';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMParser, IDOMParserProperties>();
export const awaitedHandler = new AwaitedHandler<IDOMParser>('DOMParser', getState, setState);

export function DOMParserGenerator() {
  return class DOMParser implements IDOMParser {
    constructor() {
    }

    // methods

    public parseFromString(str: string, type: ISupportedType): ISuperDocument {
      throw new Error('DOMParser.parseFromString not implemented');
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, DOMParserPropertyKeys, DOMParserConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDOMParserProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const DOMParserPropertyKeys = [];

export const DOMParserConstantKeys = [];
