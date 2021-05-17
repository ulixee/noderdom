import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTemplateElementIsolate } from '../interfaces/isolate';
import { IDocumentFragment } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLTemplateElementIsolate, IHTMLTemplateElementIsolateProperties>();
export const awaitedHandler = new AwaitedHandler<IHTMLTemplateElementIsolate>('HTMLTemplateElementIsolate', getState, setState);

export default class HTMLTemplateElementIsolate implements IHTMLTemplateElementIsolate {
  public get content(): Promise<string> | IDocumentFragment {
    throw new Error('HTMLTemplateElementIsolate.content getter not implemented');
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IHTMLTemplateElementIsolateProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly content?: Promise<string> | IDocumentFragment;
}

export const HTMLTemplateElementIsolatePropertyKeys = ['content'];

export const HTMLTemplateElementIsolateConstantKeys = [];
