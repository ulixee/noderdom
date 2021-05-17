import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IXMLSerializer } from '../interfaces/official';
import { INodeIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IXMLSerializer, IXMLSerializerProperties>();
export const awaitedHandler = new AwaitedHandler<IXMLSerializer>('XMLSerializer', getState, setState);

export function XMLSerializerGenerator() {
  return class XMLSerializer implements IXMLSerializer {
    constructor() {
    }

    // methods

    public serializeToString(root: INodeIsolate): Promise<string> {
      return awaitedHandler.runMethod<string>(this, 'serializeToString', [root]);
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, XMLSerializerPropertyKeys, XMLSerializerConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IXMLSerializerProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const XMLSerializerPropertyKeys = [];

export const XMLSerializerConstantKeys = [];
