import StateMachine from '../../base/StateMachine';
import { IImageBitmap } from '../../base/interfaces/official';
import { ImageBitmapGenerator, IImageBitmapProperties } from '../../base/official-klasses/ImageBitmap';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IImageBitmap, IImageBitmapProperties>();
const ImageBitmapBaseClass = ImageBitmapGenerator();

export default class ImageBitmap extends ImageBitmapBaseClass implements IImageBitmap {}
