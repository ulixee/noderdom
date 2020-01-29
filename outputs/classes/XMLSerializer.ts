import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { INode, IXMLSerializer } from '../interfaces';

export default class XMLSerializer implements IXMLSerializer {
  public serializeToString(root: INode): string {
    return InternalHandler.run<IXMLSerializer, string>(this, 'serializeToString', [root]);
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IXMLSerializerProperties {}

export interface IXMLSerializerReadonlyProperties {}

export const { getState, setState, setReadonlyOfXMLSerializer } = InternalStateGenerator<
  IXMLSerializer,
  IXMLSerializerProperties,
  IXMLSerializerReadonlyProperties
>('XMLSerializer');
