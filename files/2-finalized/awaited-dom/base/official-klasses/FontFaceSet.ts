import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IFontFaceSet, IFontFace } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IFontFaceSet, IFontFaceSetProperties>();
export const awaitedHandler = new AwaitedHandler<IFontFaceSet>('FontFaceSet', getState, setState);

export function FontFaceSetGenerator() {
  return class FontFaceSet implements IFontFaceSet {
    constructor(_initialFaces: Iterable<IFontFace>) {
      initializeConstantsAndProperties<FontFaceSet>(this, FontFaceSetConstantKeys, FontFaceSetPropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IFontFaceSetProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const FontFaceSetPropertyKeys = [];

export const FontFaceSetConstantKeys = [];
