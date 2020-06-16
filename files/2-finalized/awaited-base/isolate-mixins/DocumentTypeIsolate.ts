import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import NodeAttacher from '../NodeAttacher';
import { IDocumentTypeIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocumentTypeIsolate, IDocumentTypeIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IDocumentTypeIsolate>('DocumentTypeIsolate', getState, setState);
export const nodeAttacher = new NodeAttacher<IDocumentTypeIsolate>('createDocumentTypeIsolate', getState, setState, awaitedHandler);

export default class DocumentTypeIsolate implements IDocumentTypeIsolate, PromiseLike<IDocumentTypeIsolate> {
  public get name(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'name', false);
  }

  public get publicId(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'publicId', false);
  }

  public get systemId(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'systemId', false);
  }

  public then<TResult1 = IDocumentTypeIsolate, TResult2 = never>(onfulfilled?: ((value: IDocumentTypeIsolate) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected?: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
    return nodeAttacher.attach(this).then(onfulfilled, onrejected);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDocumentTypeIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly name?: Promise<string>;
  readonly publicId?: Promise<string>;
  readonly systemId?: Promise<string>;
}

export const DocumentTypeIsolatePropertyKeys = ['name', 'publicId', 'systemId'];

export const DocumentTypeIsolateConstantKeys = [];
