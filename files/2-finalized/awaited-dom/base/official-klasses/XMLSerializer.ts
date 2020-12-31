import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IXMLSerializer } from '../interfaces/official';
import { INodeIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IXMLSerializer, IXMLSerializerProperties>();
export const awaitedHandler = new AwaitedHandler<IXMLSerializer>('XMLSerializer', getState, setState);

export function XMLSerializerGenerator() {
  return class XMLSerializer implements IXMLSerializer {
    constructor() {
      initializeConstantsAndProperties<XMLSerializer>(this, XMLSerializerConstantKeys, XMLSerializerPropertyKeys);
    }

    // methods

    public serializeToString(root: INodeIsolate): Promise<string> {
      return awaitedHandler.runMethod<string>(this, 'serializeToString', [root]);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IXMLSerializerProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const XMLSerializerPropertyKeys = [];

export const XMLSerializerConstantKeys = [];
