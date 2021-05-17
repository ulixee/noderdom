import StateMachine from '../../base/StateMachine';
import { IRange, IDocumentFragment, IDOMRect, IDOMRectList } from '../../base/interfaces/official';
import { ISuperNode } from '../../base/interfaces/super';
import { RangeGenerator, IRangeProperties } from '../../base/official-klasses/Range';
import { createSuperNode, createDocumentFragment, createRange, createDOMRect, createDOMRectList } from '../create';
import AbstractRange from './AbstractRange';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IRange, IRangeProperties>();
const RangeBaseClass = RangeGenerator(AbstractRange);

export default class Range extends RangeBaseClass implements IRange {
  constructor() {
    super();
  }

  // properties

  public get commonAncestorContainer(): ISuperNode {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperNode(awaitedPath.addProperty(this, 'commonAncestorContainer'), awaitedOptions);
  }

  // methods

  public cloneContents(): IDocumentFragment {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDocumentFragment(awaitedPath.addMethod(this, 'cloneContents', ), awaitedOptions);
  }

  public cloneRange(): IRange {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createRange(awaitedPath.addMethod(this, 'cloneRange', ), awaitedOptions);
  }

  public createContextualFragment(fragment: string): IDocumentFragment {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDocumentFragment(awaitedPath.addMethod(this, 'createContextualFragment', fragment), awaitedOptions);
  }

  public extractContents(): IDocumentFragment {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDocumentFragment(awaitedPath.addMethod(this, 'extractContents', ), awaitedOptions);
  }

  public getBoundingClientRect(): IDOMRect {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMRect(awaitedPath.addMethod(this, 'getBoundingClientRect', ), awaitedOptions);
  }

  public getClientRects(): IDOMRectList {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createDOMRectList(awaitedPath.addMethod(this, 'getClientRects', ), awaitedOptions);
  }
}
