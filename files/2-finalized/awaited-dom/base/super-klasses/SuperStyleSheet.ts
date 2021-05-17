import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import { ISuperStyleSheet } from '../interfaces/super';
import { ICSSStyleSheetIsolate, IStyleSheetIsolate } from '../interfaces/isolate';
import { ICSSStyleSheetIsolateProperties, CSSStyleSheetIsolatePropertyKeys, CSSStyleSheetIsolateConstantKeys } from '../isolate-mixins/CSSStyleSheetIsolate';
import { IStyleSheetIsolateProperties, StyleSheetIsolatePropertyKeys, StyleSheetIsolateConstantKeys } from '../isolate-mixins/StyleSheetIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<ISuperStyleSheet, ISuperStyleSheetProperties>();
export const awaitedHandler = new AwaitedHandler<ISuperStyleSheet>('SuperStyleSheet', getState, setState);

export function SuperStyleSheetGenerator(CSSStyleSheetIsolate: Constructable<ICSSStyleSheetIsolate>, StyleSheetIsolate: Constructable<IStyleSheetIsolate>) {
  const Parent = (ClassMixer(CSSStyleSheetIsolate, [StyleSheetIsolate]) as unknown) as Constructable<ICSSStyleSheetIsolate & IStyleSheetIsolate>;

  return class SuperStyleSheet extends Parent implements ISuperStyleSheet {
    constructor() {
      super();
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, SuperStyleSheetPropertyKeys, SuperStyleSheetConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface ISuperStyleSheetProperties extends ICSSStyleSheetIsolateProperties, IStyleSheetIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const SuperStyleSheetPropertyKeys = [...CSSStyleSheetIsolatePropertyKeys, ...StyleSheetIsolatePropertyKeys];

export const SuperStyleSheetConstantKeys = [...CSSStyleSheetIsolateConstantKeys, ...StyleSheetIsolateConstantKeys];
