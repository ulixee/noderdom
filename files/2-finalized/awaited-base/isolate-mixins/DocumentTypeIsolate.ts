import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import { IDocumentTypeIsolate } from '../interfaces/isolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDocumentTypeIsolate, IDocumentTypeIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IDocumentTypeIsolate>('DocumentTypeIsolate', getState, setState);

export default class DocumentTypeIsolate implements IDocumentTypeIsolate {
  public get name(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'name', false);
  }

  public get publicId(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'publicId', false);
  }

  public get systemId(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'systemId', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IDocumentTypeIsolateProperties {
  readonly name?: Promise<string>;
  readonly publicId?: Promise<string>;
  readonly systemId?: Promise<string>;
}

export const DocumentTypeIsolatePropertyKeys = ['name', 'publicId', 'systemId'];

export const DocumentTypeIsolateConstantKeys = [];
