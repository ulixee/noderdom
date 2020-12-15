import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IShadowRootIsolate } from '../interfaces/isolate';
import { ISuperElement } from '../interfaces/super';
import { IShadowRootMode } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IShadowRootIsolate, IShadowRootIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IShadowRootIsolate>('ShadowRootIsolate', getState, setState);

export default class ShadowRootIsolate implements IShadowRootIsolate {
  public get delegatesFocus(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'delegatesFocus', false);
  }

  public get host(): ISuperElement {
    throw new Error('ShadowRootIsolate.host getter not implemented');
  }

  public get innerHTML(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'innerHTML', false);
  }

  public get mode(): Promise<IShadowRootMode> {
    return awaitedHandler.getProperty<IShadowRootMode>(this, 'mode', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IShadowRootIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly delegatesFocus?: Promise<boolean>;
  readonly host?: ISuperElement;
  readonly innerHTML?: Promise<string>;
  readonly mode?: Promise<IShadowRootMode>;
}

export const ShadowRootIsolatePropertyKeys = ['delegatesFocus', 'host', 'innerHTML', 'mode'];

export const ShadowRootIsolateConstantKeys = [];
