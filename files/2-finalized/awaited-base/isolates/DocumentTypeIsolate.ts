// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import { IDocumentTypeIsolate } from '../interfaces/isolates';

export const { getState, setState, setHiddenState, setReadonlyOfDocumentTypeIsolate } = StateMachine<
  IDocumentTypeIsolate,
  IDocumentTypeIsolateProperties,
  IDocumentTypeIsolateReadonlyProperties
>('DocumentTypeIsolate');

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

export interface IDocumentTypeIsolateReadonlyProperties {
  readonly name?: Promise<string>;
  readonly publicId?: Promise<string>;
  readonly systemId?: Promise<string>;
}

export interface IDocumentTypeIsolateProperties extends IDocumentTypeIsolateReadonlyProperties {}

export const DocumentTypeIsolatePropertyKeys = ['name', 'publicId', 'systemId'];

export const DocumentTypeIsolateConstantKeys = [];
