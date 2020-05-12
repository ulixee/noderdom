import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IDocumentType, INode } from '../interfaces/official';
import { INodeProperties, NodePropertyKeys, NodeConstantKeys } from './Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocumentType, IDocumentTypeProperties>();
export const awaitedHandler = new AwaitedHandler<IDocumentType>('DocumentType', getState, setState);

export function DocumentTypeGenerator(Node: Constructable<INode>) {
  return class DocumentType extends Node implements IDocumentType {
    constructor() {
      super();
      initializeConstantsAndProperties<DocumentType>(this, DocumentTypeConstantKeys, DocumentTypePropertyKeys);
    }

    // properties

    public get name(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'name', false);
    }

    public get publicId(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'publicId', false);
    }

    public get systemId(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'systemId', false);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDocumentTypeProperties extends INodeProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly name?: Promise<string>;
  readonly publicId?: Promise<string>;
  readonly systemId?: Promise<string>;
}

export const DocumentTypePropertyKeys = [...NodePropertyKeys, 'name', 'publicId', 'systemId'];

export const DocumentTypeConstantKeys = [...NodeConstantKeys];
