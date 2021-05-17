import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IAttrIsolate } from '../interfaces/isolate';
import { ISuperElement } from '../interfaces/super';

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

  public get ownerElement(): ISuperElement {
    throw new Error('AttrIsolate.ownerElement getter not implemented');
  }

  public get prefix(): Promise<string | null> {
    return awaitedHandler.getProperty<string | null>(this, 'prefix', true);
  }

  public get specified(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'specified', false);
  }

  public get value(): Promise<string> | Promise<number> {
    return awaitedHandler.getProperty<string>(this, 'value', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IAttrIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly localName?: Promise<string>;
  readonly name?: Promise<string>;
  readonly namespaceURI?: Promise<string | null>;
  readonly ownerElement?: ISuperElement;
  readonly prefix?: Promise<string | null>;
  readonly specified?: Promise<boolean>;
  readonly value?: Promise<string> | Promise<number>;
}

export const AttrIsolatePropertyKeys = ['localName', 'name', 'namespaceURI', 'ownerElement', 'prefix', 'specified', 'value'];

export const AttrIsolateConstantKeys = [];
