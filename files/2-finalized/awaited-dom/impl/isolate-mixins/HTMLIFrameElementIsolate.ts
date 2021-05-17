import StateMachine from '../../base/StateMachine';
import { IHTMLIFrameElementIsolate } from '../../base/interfaces/isolate';
import { ISuperDocument } from '../../base/interfaces/super';
import { IFeaturePolicy, IDOMTokenList } from '../../base/interfaces/official';
import HTMLIFrameElementIsolateBase, { IHTMLIFrameElementIsolateProperties } from '../../base/isolate-mixins/HTMLIFrameElementIsolate';
import { createSuperDocument, createFeaturePolicy, createDOMTokenList } from '../create';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLIFrameElementIsolate, IHTMLIFrameElementIsolateProperties>();

export default class HTMLIFrameElementIsolate extends HTMLIFrameElementIsolateBase implements IHTMLIFrameElementIsolate {
  public get contentDocument(): ISuperDocument {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperDocument(awaitedPath.addProperty(this, 'contentDocument'), awaitedOptions);
  }

  public get featurePolicy(): IFeaturePolicy {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createFeaturePolicy(awaitedPath.addProperty(this, 'featurePolicy'), awaitedOptions);
  }

  public get sandbox(): IDOMTokenList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMTokenList(awaitedPath.addProperty(this, 'sandbox'), awaitedOptions);
  }
}
