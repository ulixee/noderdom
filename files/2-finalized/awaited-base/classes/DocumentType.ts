// tslint:disable:variable-name
import Constructable from '../Constructable';
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IDocumentType, INode } from '../interfaces/dom';
import { INodeProperties, INodeReadonlyProperties, NodePropertyKeys, NodeConstantKeys } from '../classes/Node';

export const { getState, setState, setHiddenState, setReadonlyOfDocumentType } = StateMachine<
  IDocumentType,
  IDocumentTypeProperties,
  IDocumentTypeReadonlyProperties
>('DocumentType');

export const awaitedHandler = new AwaitedHandler<IDocumentType>('DocumentType', getState, setState);

export function DocumentTypeGenerator(Node: Constructable<INode>) {
  return class DocumentType extends Node implements IDocumentType {
    constructor() {
      super();
      initializeConstantsAndProperties<DocumentType>(DocumentType, this, DocumentTypeConstantKeys, DocumentTypePropertyKeys);
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

export interface IDocumentTypeReadonlyProperties extends INodeReadonlyProperties {
  readonly name?: Promise<string>;
  readonly publicId?: Promise<string>;
  readonly systemId?: Promise<string>;
}

export interface IDocumentTypeProperties extends IDocumentTypeReadonlyProperties, INodeProperties {}

export const DocumentTypePropertyKeys = [...NodePropertyKeys, 'name', 'publicId', 'systemId'];

export const DocumentTypeConstantKeys = [...NodeConstantKeys];
