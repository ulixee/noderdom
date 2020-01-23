import InternalHandler from '../InternalHandler';
import { INode, IXMLSerializer } from '../interfaces';

export default class XMLSerializer implements IXMLSerializer {
  public serializeToString(root: INode): string {
    return InternalHandler.run<IXMLSerializer, string>(this, 'serializeToString', [root]);
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpXMLSerializerKeys: Set<string> = new Set([]);

export interface IXMLSerializerRps {}
