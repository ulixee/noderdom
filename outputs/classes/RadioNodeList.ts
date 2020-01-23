import InternalHandler from '../InternalHandler';
import { IRadioNodeList } from '../interfaces';
import NodeList, { INodeListRps, rpNodeListKeys } from './NodeList';

export default class RadioNodeList extends NodeList implements IRadioNodeList {
  public get value(): string {
    return InternalHandler.get<IRadioNodeList, string>(this, 'value');
  }

  public set value(value: string) {
    InternalHandler.set<IRadioNodeList, string>(this, 'value', value);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpRadioNodeListKeys: Set<string> = new Set([...rpNodeListKeys]);

export interface IRadioNodeListRps extends INodeListRps {}

export function setRadioNodeListRps(instance: IRadioNodeList, data: IRadioNodeListRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpRadioNodeListKeys.has(key)) {
      throw new Error(`${key} is not a property of RadioNodeList`);
    }
    properties[key] = value;
  });
}
