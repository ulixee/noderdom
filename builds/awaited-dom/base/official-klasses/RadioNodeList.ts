import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IRadioNodeList, INodeList } from '../interfaces/official';
import { INodeListProperties, NodeListPropertyKeys, NodeListConstantKeys } from './NodeList';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IRadioNodeList, IRadioNodeListProperties>();
export const awaitedHandler = new AwaitedHandler<IRadioNodeList>('RadioNodeList', getState, setState);

export function RadioNodeListGenerator(NodeList: Constructable<INodeList>) {
  return class RadioNodeList extends NodeList implements IRadioNodeList {
    constructor() {
      super();
      initializeConstantsAndProperties<RadioNodeList>(this, RadioNodeListConstantKeys, RadioNodeListPropertyKeys);
    }

    // properties

    public get value(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'value', false);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IRadioNodeListProperties extends INodeListProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly value?: Promise<string>;
}

export const RadioNodeListPropertyKeys = [...NodeListPropertyKeys, 'value'];

export const RadioNodeListConstantKeys = [...NodeListConstantKeys];
