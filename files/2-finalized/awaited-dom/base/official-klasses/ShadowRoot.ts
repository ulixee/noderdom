import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import { IShadowRoot, IDocumentFragment, IDocumentOrShadowRoot, IShadowRootMode } from '../interfaces/official';
import { ISuperElement } from '../interfaces/super';
import { IDocumentFragmentProperties, DocumentFragmentPropertyKeys, DocumentFragmentConstantKeys } from './DocumentFragment';
import { IDocumentOrShadowRootProperties, DocumentOrShadowRootPropertyKeys, DocumentOrShadowRootConstantKeys } from '../official-mixins/DocumentOrShadowRoot';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IShadowRoot, IShadowRootProperties>();
export const awaitedHandler = new AwaitedHandler<IShadowRoot>('ShadowRoot', getState, setState);

export function ShadowRootGenerator(DocumentFragment: Constructable<IDocumentFragment>, DocumentOrShadowRoot: Constructable<IDocumentOrShadowRoot>) {
  const Parent = (ClassMixer(DocumentFragment, [DocumentOrShadowRoot]) as unknown) as Constructable<IDocumentFragment & IDocumentOrShadowRoot>;

  return class ShadowRoot extends Parent implements IShadowRoot {
    constructor() {
      super();
      initializeConstantsAndProperties<ShadowRoot>(this, ShadowRootConstantKeys, ShadowRootPropertyKeys);
    }

    // properties

    public get delegatesFocus(): Promise<boolean> {
      return awaitedHandler.getProperty<boolean>(this, 'delegatesFocus', false);
    }

    public get host(): ISuperElement {
      throw new Error('ShadowRoot.host getter not implemented');
    }

    public get innerHTML(): Promise<string> {
      return awaitedHandler.getProperty<string>(this, 'innerHTML', false);
    }

    public get mode(): Promise<IShadowRootMode> {
      return awaitedHandler.getProperty<IShadowRootMode>(this, 'mode', false);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IShadowRootProperties extends IDocumentFragmentProperties, IDocumentOrShadowRootProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly delegatesFocus?: Promise<boolean>;
  readonly host?: ISuperElement;
  readonly innerHTML?: Promise<string>;
  readonly mode?: Promise<IShadowRootMode>;
}

export const ShadowRootPropertyKeys = [...DocumentFragmentPropertyKeys, ...DocumentOrShadowRootPropertyKeys, 'delegatesFocus', 'host', 'innerHTML', 'mode'];

export const ShadowRootConstantKeys = [...DocumentFragmentConstantKeys, ...DocumentOrShadowRootConstantKeys];
