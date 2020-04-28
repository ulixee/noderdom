import StateMachine from '../../awaited-base/StateMachine';
import AwaitedPath from '../../awaited-base/AwaitedPath';
import { IFontFace } from '../../awaited-base/interfaces/official';
import { IBinaryData, IFontFaceDescriptors } from '../../awaited-base/interfaces/basic';
import { FontFaceGenerator, initialize, IFontFaceProperties } from '../../awaited-base/official-klasses/FontFace';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IFontFace, IFontFaceProperties>();
const FontFaceBase = FontFaceGenerator();

export default class FontFace extends FontFaceBase implements IFontFace {
  constructor(_family: string, _source: string | IBinaryData, _descriptors?: IFontFaceDescriptors) {
    super();
    initialize(FontFace, this);
  }
}

// FUNCTION TO CREATE INSTANCE ///////////////////////////////////////////////

export function createFontFace(awaitedPath: AwaitedPath, awaitedOptions: any): FontFace {
  const instance = new FontFace();
  setState(instance, { awaitedPath, awaitedOptions });
  return instance;
}
