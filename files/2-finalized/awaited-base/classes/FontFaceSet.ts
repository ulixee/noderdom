// tslint:disable:variable-name
import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import { IFontFaceSet, IFontFace } from '../interfaces/dom';

export const { getState, setState, setHiddenState, setReadonlyOfFontFaceSet } = StateMachine<
  IFontFaceSet,
  IFontFaceSetProperties,
  IFontFaceSetReadonlyProperties
>('FontFaceSet');

export const awaitedHandler = new AwaitedHandler<IFontFaceSet>('FontFaceSet', getState, setState);

export default class FontFaceSet implements IFontFaceSet {
  constructor(_initialFaces: Iterable<IFontFace>) {
    initializeConstantsAndProperties<FontFaceSet>(FontFaceSet, this, FontFaceSetConstantKeys, FontFaceSetPropertyKeys);
  }

  public forEach(callbackfn: (value: IFontFace, key: IFontFace, parent: IFontFaceSet) => void, thisArg?: any): void {
    awaitedHandler.runMethod<void>(this, 'forEach', [callbackfn, thisArg]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IFontFaceSetReadonlyProperties {}

export interface IFontFaceSetProperties extends IFontFaceSetReadonlyProperties {}

export const FontFaceSetPropertyKeys = [];

export const FontFaceSetConstantKeys = [];
