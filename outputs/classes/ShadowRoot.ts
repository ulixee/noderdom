import InternalHandler from '../InternalHandler';
import { IShadowRootMode, IElement, IShadowRoot } from '../interfaces';
import DocumentFragment, { IDocumentFragmentRps, rpDocumentFragmentKeys } from './DocumentFragment';
import DocumentOrShadowRoot, {
  IDocumentOrShadowRootRps,
  rpDocumentOrShadowRootKeys,
} from '../mixins/DocumentOrShadowRoot';

// tslint:disable-next-line:variable-name
const ShadowRootBase = DocumentOrShadowRoot(DocumentFragment);

export default class ShadowRoot extends ShadowRootBase implements IShadowRoot {
  protected readonly _: IShadowRootRps = {};

  // properties

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
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpShadowRootKeys: Set<string> = new Set([...rpDocumentFragmentKeys, ...rpDocumentOrShadowRootKeys]);

export interface IShadowRootRps extends IDocumentFragmentRps, IDocumentOrShadowRootRps {
  readonly host?: IElement;
  readonly mode?: IShadowRootMode;
}

export function setShadowRootRps(instance: IShadowRoot, data: IShadowRootRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpShadowRootKeys.has(key)) {
      throw new Error(`${key} is not a property of ShadowRoot`);
    }
    properties[key] = value;
  });
}
