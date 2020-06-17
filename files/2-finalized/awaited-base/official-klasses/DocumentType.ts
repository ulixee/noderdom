import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import NodeAttacher from '../NodeAttacher';
import { IDocumentType, INode } from '../interfaces/official';
import { INodeProperties, NodePropertyKeys, NodeConstantKeys } from './Node';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocumentType, IDocumentTypeProperties>();
export const awaitedHandler = new AwaitedHandler<IDocumentType>('DocumentType', getState, setState);
export const nodeAttacher = new NodeAttacher<IDocumentType>(getState, awaitedHandler);

export function DocumentTypeGenerator(Node: Constructable<INode>) {
  return class DocumentType extends Node implements IDocumentType, PromiseLike<IDocumentType> {
    constructor() {
      super();
      initializeConstantsAndProperties<DocumentType>(this, DocumentTypeConstantKeys, DocumentTypePropertyKeys);
      setState(this, {
        createInstanceName: 'createDocumentType',
      });
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

    public then<TResult1 = IDocumentType, TResult2 = never>(onfulfilled?: ((value: IDocumentType) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
      return nodeAttacher.attach(this).then(onfulfilled, onrejected);
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
