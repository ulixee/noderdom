import StateMachine from '../../base/StateMachine';
import { IFontFaceSet } from '../../base/interfaces/official';
import { FontFaceSetGenerator, IFontFaceSetProperties } from '../../base/official-klasses/FontFaceSet';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IFontFaceSet, IFontFaceSetProperties>();
const FontFaceSetBaseClass = FontFaceSetGenerator();

export default class FontFaceSet extends FontFaceSetBaseClass implements IFontFaceSet {}
