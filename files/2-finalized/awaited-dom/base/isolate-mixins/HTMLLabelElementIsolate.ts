import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLLabelElementIsolate } from '../interfaces/isolate';
import { ISuperHTMLElement } from '../interfaces/super';
import { IHTMLFormElement } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLLabelElementIsolate, IHTMLLabelElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLLabelElementIsolate>('HTMLLabelElementIsolate', getState, setState);

export default class HTMLLabelElementIsolate implements IHTMLLabelElementIsolate {
  public get control(): ISuperHTMLElement {
    throw new Error('HTMLLabelElementIsolate.control getter not implemented');
  }

  public get form(): IHTMLFormElement {
    throw new Error('HTMLLabelElementIsolate.form getter not implemented');
  }

  public get htmlFor(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'htmlFor', false);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLLabelElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly control?: ISuperHTMLElement;
  readonly form?: IHTMLFormElement;
  readonly htmlFor?: Promise<string>;
}

export const HTMLLabelElementIsolatePropertyKeys = ['control', 'form', 'htmlFor'];

export const HTMLLabelElementIsolateConstantKeys = [];
