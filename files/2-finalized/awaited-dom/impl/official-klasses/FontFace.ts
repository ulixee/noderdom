import StateMachine from '../../base/StateMachine';
import { IFontFace } from '../../base/interfaces/official';
import { FontFaceGenerator, IFontFaceProperties } from '../../base/official-klasses/FontFace';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IFontFace, IFontFaceProperties>();
const FontFaceBaseClass = FontFaceGenerator();

export default class FontFace extends FontFaceBaseClass implements IFontFace {}
