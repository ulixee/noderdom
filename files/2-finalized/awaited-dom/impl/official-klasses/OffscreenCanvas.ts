import StateMachine from '../../base/StateMachine';
import { IOffscreenCanvas, IImageBitmap } from '../../base/interfaces/official';
import { OffscreenCanvasGenerator, IOffscreenCanvasProperties } from '../../base/official-klasses/OffscreenCanvas';
import { createImageBitmap } from '../create';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IOffscreenCanvas, IOffscreenCanvasProperties>();
const OffscreenCanvasBaseClass = OffscreenCanvasGenerator();

export default class OffscreenCanvas extends OffscreenCanvasBaseClass implements IOffscreenCanvas {
  public transferToImageBitmap(): IImageBitmap {
    const { awaitedPath, awaitedOptions } = getState(this);
    return createImageBitmap(awaitedPath.addMethod(this, 'transferToImageBitmap', ), awaitedOptions);
  }
}
