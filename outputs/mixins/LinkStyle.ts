import InternalHandler from '../InternalHandler';
import { IStyleSheet, ILinkStyle } from '../interfaces';

export default class LinkStyle implements ILinkStyle {
  public get sheet(): IStyleSheet | null {
    return InternalHandler.get<ILinkStyle, IStyleSheet | null>(this, 'sheet');
  }
}

// SUPPORT FOR INTERNAL STATE GENERATOR ////////////////////////////////////////

export interface ILinkStyleProperties {
  sheet?: IStyleSheet | null;
}

export interface ILinkStyleReadonlyProperties {
  sheet?: IStyleSheet | null;
}
