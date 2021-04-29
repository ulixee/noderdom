import StateMachine from '../../base/StateMachine';
import { IShadowRoot } from '../../base/interfaces/official';
import { ISuperElement } from '../../base/interfaces/super';
import { ShadowRootGenerator, IShadowRootProperties } from '../../base/official-klasses/ShadowRoot';
import { createSuperElement } from '../create';
import DocumentFragment from './DocumentFragment';
import DocumentOrShadowRoot from '../official-mixins/DocumentOrShadowRoot';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IShadowRoot, IShadowRootProperties>();
const ShadowRootBaseClass = ShadowRootGenerator(DocumentFragment, DocumentOrShadowRoot);

export default class ShadowRoot extends ShadowRootBaseClass implements IShadowRoot {
  constructor() {
    super();
  }

  // properties

  public get host(): ISuperElement {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createSuperElement(awaitedPath.addProperty(this, 'host'), awaitedOptions);
  }
}
