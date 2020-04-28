import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import { IAttrIsolate } from '../interfaces/isolate';
import { IElement } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IAttrIsolate, IAttrIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IAttrIsolate>('AttrIsolate', getState, setState);

export default class AttrIsolate implements IAttrIsolate {
  public get localName(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'localName', false);
  }

  public get name(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'name', false);
  }

  public get namespaceURI(): Promise<string | null> {
    return awaitedHandler.getProperty<string | null>(this, 'namespaceURI', true);
  }

  public get ownerElement(): IElement {
    throw new Error('AttrIsolate.ownerElement getter not implemented');
  }

  public get prefix(): Promise<string | null> {
    return awaitedHandler.getProperty<string | null>(this, 'prefix', true);
  }

  public get specified(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'specified', false);
  }

  public get value(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'value', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IAttrIsolateProperties {
  readonly localName?: Promise<string>;
  readonly name?: Promise<string>;
  readonly namespaceURI?: Promise<string | null>;
  readonly ownerElement?: IElement;
  readonly prefix?: Promise<string | null>;
  readonly specified?: Promise<boolean>;
  readonly value?: Promise<string>;
}

export const AttrIsolatePropertyKeys = ['localName', 'name', 'namespaceURI', 'ownerElement', 'prefix', 'specified', 'value'];

export const AttrIsolateConstantKeys = [];
