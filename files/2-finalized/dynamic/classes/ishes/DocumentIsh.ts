import Handler, { initializeConstantsAndPrototypes } from '../../DynamicHandler';
import StateMachine from '../../StateMachine';
import { IHTMLCollection, IHTMLElement } from '../../interfaces/dom';
import { IDocumentIsh } from '../../interfaces/ishes';
// tslint:disable:variable-name

export const { getState, setState, setHiddenState, setReadonlyOfDocumentIsh } = StateMachine<
  IDocumentIsh,
  IDocumentIshProperties,
  IDocumentIshReadonlyProperties
>('DocumentIsh');

export const handler = new Handler<IDocumentIsh>('DocumentIsh', getState, setState);

export default class DocumentIsh implements IDocumentIsh {
  constructor() {
    initializeConstantsAndPrototypes<DocumentIsh>(
      DocumentIsh,
      this,
      handler,
      DocumentIshConstantKeys,
      DocumentIshPropertyKeys,
    );
  }
  // properties

  public get URL(): string {
    return handler.get<string>(this, 'URL', false);
  }

  public get anchors(): IHTMLCollection {
    return handler.get<IHTMLCollection>(this, 'anchors', false);
  }

  public get body(): IHTMLElement | null {
    return handler.get<IHTMLElement | null>(this, 'body', true);
  }

  public set body(value: IHTMLElement | null) {
    handler.set<IHTMLElement | null>(this, 'body', value);
  }

  public get characterSet(): string {
    return handler.get<string>(this, 'characterSet', false);
  }
}
// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IDocumentIshReadonlyProperties {
  readonly URL?: string;
  readonly anchors?: IHTMLCollection;
  readonly characterSet?: string;
}

export interface IDocumentIshProperties extends IDocumentIshReadonlyProperties {
  body?: IHTMLElement | null;
}

export const DocumentIshPropertyKeys = ['URL', 'anchors', 'body', 'characterSet'];

export const DocumentIshConstantKeys = [];
