import StateMachine from '../../base/StateMachine';
import { IRange, IDocumentFragment, IDOMRect, IDOMRectList } from '../../base/interfaces/official';
import { ISuperNode } from '../../base/interfaces/super';
import { RangeGenerator, IRangeProperties } from '../../base/official-klasses/Range';
import { createSuperNode, createDocumentFragment, createRange, createDOMRect, createDOMRectList } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IRange, IRangeProperties>();
const RangeBaseClass = RangeGenerator();

export default class Range extends RangeBaseClass implements IRange {
  public get commonAncestorContainer(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty('commonAncestorContainer'), awaitedOptions);
  }

  // methods

  public cloneContents(): IDocumentFragment {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDocumentFragment(awaitedPath.addMethod('cloneContents', ), awaitedOptions);
  }

  public cloneRange(): IRange {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createRange(awaitedPath.addMethod('cloneRange', ), awaitedOptions);
  }

  public createContextualFragment(fragment: string): IDocumentFragment {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDocumentFragment(awaitedPath.addMethod('createContextualFragment', fragment), awaitedOptions);
  }

  public extractContents(): IDocumentFragment {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDocumentFragment(awaitedPath.addMethod('extractContents', ), awaitedOptions);
  }

  public getBoundingClientRect(): IDOMRect {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMRect(awaitedPath.addMethod('getBoundingClientRect', ), awaitedOptions);
  }

  public getClientRects(): IDOMRectList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMRectList(awaitedPath.addMethod('getClientRects', ), awaitedOptions);
  }
}
