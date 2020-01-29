import InternalHandler from '../InternalHandler';
import InternalStateGenerator from '../InternalStateGenerator';
import { IElement, IProcessingInstruction, ICSSStyleSheet, IMediaList, IStyleSheet } from '../interfaces';

export default class StyleSheet implements IStyleSheet {
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

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface IStyleSheetProperties {
  disabled?: boolean;
  href?: string | null;
  media?: IMediaList;
  ownerNode?: IElement | IProcessingInstruction | null;
  parentStyleSheet?: ICSSStyleSheet | null;
  title?: string | null;
  type?: string;
}

export interface IStyleSheetReadonlyProperties {
  href?: string | null;
  media?: IMediaList;
  ownerNode?: IElement | IProcessingInstruction | null;
  parentStyleSheet?: ICSSStyleSheet | null;
  title?: string | null;
  type?: string;
}

export const { getState, setState, setReadonlyOfStyleSheet } = InternalStateGenerator<
  IStyleSheet,
  IStyleSheetProperties,
  IStyleSheetReadonlyProperties
>('StyleSheet');
