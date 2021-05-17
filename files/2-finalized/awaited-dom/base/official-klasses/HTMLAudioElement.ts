import AwaitedHandler from '../AwaitedHandler';
import inspectInstanceProperties from '../inspectInstanceProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IHTMLAudioElement, IHTMLMediaElement } from '../interfaces/official';
import { IHTMLMediaElementProperties, HTMLMediaElementPropertyKeys, HTMLMediaElementConstantKeys } from './HTMLMediaElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLAudioElement, IHTMLAudioElementProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLAudioElement>('HTMLAudioElement', getState, setState);

export function HTMLAudioElementGenerator(HTMLMediaElement: Constructable<IHTMLMediaElement>) {
  return class HTMLAudioElement extends HTMLMediaElement implements IHTMLAudioElement {
    constructor() {
      super();
    }

    public [Symbol.for('nodejs.util.inspect.custom')]() {
      return inspectInstanceProperties(this, HTMLAudioElementPropertyKeys, HTMLAudioElementConstantKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLAudioElementProperties extends IHTMLMediaElementProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const HTMLAudioElementPropertyKeys = [...HTMLMediaElementPropertyKeys];

export const HTMLAudioElementConstantKeys = [...HTMLMediaElementConstantKeys];
