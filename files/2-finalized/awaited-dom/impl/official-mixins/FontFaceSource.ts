import StateMachine from '../../base/StateMachine';
import { IFontFaceSource, IFontFaceSet } from '../../base/interfaces/official';
import FontFaceSourceBase, { IFontFaceSourceProperties } from '../../base/official-mixins/FontFaceSource';
import { createFontFaceSet } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IFontFaceSource, IFontFaceSourceProperties>();

export default class FontFaceSource extends FontFaceSourceBase implements IFontFaceSource {
  public get fonts(): IFontFaceSet {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createFontFaceSet(awaitedPath.addProperty('fonts'), awaitedOptions);
  }
}
