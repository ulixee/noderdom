import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLObjectElementIsolate } from '../interfaces/isolate';
import { ISuperDocument } from '../interfaces/super';
import { IHTMLFormElement, IValidityState } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLObjectElementIsolate, IHTMLObjectElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLObjectElementIsolate>('HTMLObjectElementIsolate', getState, setState);

export default class HTMLObjectElementIsolate implements IHTMLObjectElementIsolate {
  public get align(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'align', false);
  }

  public get archive(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'archive', false);
  }

  public get border(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'border', false);
  }

  public get code(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'code', false);
  }

  public get codeBase(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'codeBase', false);
  }

  public get codeType(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'codeType', false);
  }

  public get contentDocument(): ISuperDocument {
    throw new Error('HTMLObjectElementIsolate.contentDocument getter not implemented');
  }

  public get data(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'data', false);
  }

  public get declare(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'declare', false);
  }

  public get form(): IHTMLFormElement {
    throw new Error('HTMLObjectElementIsolate.form getter not implemented');
  }

  public get height(): Promise<number> | Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'height', false);
  }

  public get hspace(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'hspace', false);
  }

  public get name(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'name', false);
  }

  public get standby(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'standby', false);
  }

  public get type(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'type', false);
  }

  public get useMap(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'useMap', false);
  }

  public get validationMessage(): Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'validationMessage', false);
  }

  public get validity(): Promise<IValidityState> {
    return awaitedHandler.getProperty<IValidityState>(this, 'validity', false);
  }

  public get vspace(): Promise<number> {
    return awaitedHandler.getProperty<number>(this, 'vspace', false);
  }

  public get width(): Promise<number> | Promise<string> {
    return awaitedHandler.getProperty<string>(this, 'width', false);
  }

  public get willValidate(): Promise<boolean> {
    return awaitedHandler.getProperty<boolean>(this, 'willValidate', false);
  }

  // methods

  public checkValidity(): Promise<boolean> {
    return awaitedHandler.runMethod<boolean>(this, 'checkValidity', []);
  }

  public reportValidity(): Promise<boolean> {
    return awaitedHandler.runMethod<boolean>(this, 'reportValidity', []);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLObjectElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly align?: Promise<string>;
  readonly archive?: Promise<string>;
  readonly border?: Promise<string>;
  readonly code?: Promise<string>;
  readonly codeBase?: Promise<string>;
  readonly codeType?: Promise<string>;
  readonly contentDocument?: ISuperDocument;
  readonly data?: Promise<string>;
  readonly declare?: Promise<boolean>;
  readonly form?: IHTMLFormElement;
  readonly height?: Promise<number> | Promise<string>;
  readonly hspace?: Promise<number>;
  readonly name?: Promise<string>;
  readonly standby?: Promise<string>;
  readonly type?: Promise<string>;
  readonly useMap?: Promise<string>;
  readonly validationMessage?: Promise<string>;
  readonly validity?: Promise<IValidityState>;
  readonly vspace?: Promise<number>;
  readonly width?: Promise<number> | Promise<string>;
  readonly willValidate?: Promise<boolean>;
}

export const HTMLObjectElementIsolatePropertyKeys = ['align', 'archive', 'border', 'code', 'codeBase', 'codeType', 'contentDocument', 'data', 'declare', 'form', 'height', 'hspace', 'name', 'standby', 'type', 'useMap', 'validationMessage', 'validity', 'vspace', 'width', 'willValidate'];

export const HTMLObjectElementIsolateConstantKeys = [];
