import InternalHandler from '../InternalHandler';
import { IElement, IProcessingInstruction, ICSSStyleSheet, IMediaList, IStyleSheet } from '../interfaces';

export default class StyleSheet implements IStyleSheet {
  protected readonly _: IStyleSheetRps = {};

  // properties

  public get disabled(): boolean {
    return InternalHandler.get<IStyleSheet, boolean>(this, 'disabled');
  }

  public set disabled(value: boolean) {
    InternalHandler.set<IStyleSheet, boolean>(this, 'disabled', value);
  }

  public get href(): string | null {
    return InternalHandler.get<IStyleSheet, string | null>(this, 'href');
  }

  public get media(): IMediaList {
    return InternalHandler.get<IStyleSheet, IMediaList>(this, 'media');
  }

  public get ownerNode(): IElement | IProcessingInstruction | null {
    return InternalHandler.get<IStyleSheet, IElement | IProcessingInstruction | null>(this, 'ownerNode');
  }

  public get parentStyleSheet(): ICSSStyleSheet | null {
    return InternalHandler.get<IStyleSheet, ICSSStyleSheet | null>(this, 'parentStyleSheet');
  }

  public get title(): string | null {
    return InternalHandler.get<IStyleSheet, string | null>(this, 'title');
  }

  public get type(): string {
    return InternalHandler.get<IStyleSheet, string>(this, 'type');
  }
}

// SUPPORT FOR UPDATING READONLY PROPERTIES ////////////////////////////////////

export const rpStyleSheetKeys: Set<string> = new Set([]);

export interface IStyleSheetRps {
  readonly href?: string | null;
  readonly media?: IMediaList;
  readonly ownerNode?: IElement | IProcessingInstruction | null;
  readonly parentStyleSheet?: ICSSStyleSheet | null;
  readonly title?: string | null;
  readonly type?: string;
}

export function setStyleSheetRps(instance: IStyleSheet, data: IStyleSheetRps): void {
  // @ts-ignore
  const properties: Record<string, any> = instance._;
  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (!rpStyleSheetKeys.has(key)) {
      throw new Error(`${key} is not a property of StyleSheet`);
    }
    properties[key] = value;
  });
}
