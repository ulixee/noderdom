import AwaitedHandler from '../AwaitedHandler';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import { IFontFaceSource, IFontFaceSet } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IFontFaceSource, IFontFaceSourceProperties>();
export const awaitedHandler = new AwaitedHandler<IFontFaceSource>('FontFaceSource', getState, setState);

export default class FontFaceSource implements IFontFaceSource {
  public get fonts(): IFontFaceSet {
    throw new Error('FontFaceSource.fonts getter not implemented');
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IFontFaceSourceProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;
  readonly fonts?: IFontFaceSet;
}

export const FontFaceSourcePropertyKeys = ['fonts'];

export const FontFaceSourceConstantKeys = [];
