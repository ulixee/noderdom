import AwaitedHandler from '../AwaitedHandler';
import initializeConstantsAndProperties from '../initializeConstantsAndProperties';
import StateMachine from '../StateMachine';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IFontFace, IBinaryData, IFontFaceDescriptors } from '../interfaces/official';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IFontFace, IFontFaceProperties>();
export const awaitedHandler = new AwaitedHandler<IFontFace>('FontFace', getState, setState);

export function FontFaceGenerator() {
  return class FontFace implements IFontFace {
    constructor(_family: string, _source: string | IBinaryData, _descriptors?: IFontFaceDescriptors) {
      initializeConstantsAndProperties<FontFace>(this, FontFaceConstantKeys, FontFacePropertyKeys);
    }
  };
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES ////////////////////////////

export interface IFontFaceProperties {
  awaitedPath: AwaitedPath;
  awaitedOptions: any;}

export const FontFacePropertyKeys = [];

export const FontFaceConstantKeys = [];
