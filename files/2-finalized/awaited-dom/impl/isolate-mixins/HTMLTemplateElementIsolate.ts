import StateMachine from '../../base/StateMachine';
import { IHTMLTemplateElementIsolate } from '../../base/interfaces/isolate';
import { IDocumentFragment } from '../../base/interfaces/official';
import HTMLTemplateElementIsolateBase, { IHTMLTemplateElementIsolateProperties } from '../../base/isolate-mixins/HTMLTemplateElementIsolate';
import { createDocumentFragment } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLTemplateElementIsolate, IHTMLTemplateElementIsolateProperties>();

export default class HTMLTemplateElementIsolate extends HTMLTemplateElementIsolateBase implements IHTMLTemplateElementIsolate {
  public get content(): Promise<string> | IDocumentFragment {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDocumentFragment(awaitedPath.addProperty(this, 'content'), awaitedOptions);
  }
}
