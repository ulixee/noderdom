import ClassMixer from '../ClassMixer';
import Constructable from '../Constructable';
import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IDocumentFragment, IDocumentOrShadowRoot, IShadowRootMode, IElement, IShadowRoot } from '../interfaces';
import { IDocumentFragmentProperties, IDocumentFragmentReadonlyProperties } from './DocumentFragment';
import { IDocumentOrShadowRootProperties, IDocumentOrShadowRootReadonlyProperties } from '../mixins/DocumentOrShadowRoot';

// tslint:disable-next-line:variable-name
export function ShadowRootGenerator(DocumentFragment: Constructable<IDocumentFragment>, DocumentOrShadowRoot: Constructable<IDocumentOrShadowRoot>) {
  // tslint:disable-next-line:variable-name
  const Parent = (ClassMixer(DocumentFragment, [DocumentOrShadowRoot]) as unknown) as Constructable<IDocumentFragment & IDocumentOrShadowRoot>;

  return class ShadowRoot extends Parent implements IShadowRoot {
    public get host(): IElement {
      return InternalHandler.get<IShadowRoot, IElement>(this, 'host');
    }

    public get innerHTML(): string {
      return InternalHandler.get<IShadowRoot, string>(this, 'innerHTML');
    }

    public set innerHTML(value: string) {
      InternalHandler.set<IShadowRoot, string>(this, 'innerHTML', value);
    }

    public get mode(): IShadowRootMode {
      return InternalHandler.get<IShadowRoot, IShadowRootMode>(this, 'mode');
    }
  };
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IShadowRootProperties extends IDocumentFragmentProperties, IDocumentOrShadowRootProperties {
  host?: IElement;
  innerHTML?: string;
  mode?: IShadowRootMode;
}

export interface IShadowRootReadonlyProperties extends IDocumentFragmentReadonlyProperties, IDocumentOrShadowRootReadonlyProperties {
  host?: IElement;
  mode?: IShadowRootMode;
}

export const { getState, setState, setReadonlyOfShadowRoot } = InternalStateGenerator<
  IShadowRoot,
  IShadowRootProperties,
  IShadowRootReadonlyProperties
>('ShadowRoot');
