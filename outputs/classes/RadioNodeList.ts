import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { INodeList, IRadioNodeList } from '../interfaces';
import { INodeListProperties, INodeListReadonlyProperties } from './NodeList';

// tslint:disable-next-line:variable-name
export function RadioNodeListGenerator(NodeList: Constructable<INodeList>) {
  return class RadioNodeList extends NodeList implements IRadioNodeList {
    public get value(): string {
      return InternalHandler.get<IRadioNodeList, string>(this, 'value');
    }

    public set value(value: string) {
      InternalHandler.set<IRadioNodeList, string>(this, 'value', value);
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IRadioNodeListProperties extends INodeListProperties {
  value?: string;
}

export interface IRadioNodeListReadonlyProperties extends INodeListReadonlyProperties {}

export const { getState, setState, setReadonlyOfRadioNodeList } = InternalStateGenerator<
  IRadioNodeList,
  IRadioNodeListProperties,
  IRadioNodeListReadonlyProperties
>('RadioNodeList');
