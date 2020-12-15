import StateMachine from '../../base/StateMachine';
import { IOffscreenCanvas } from '../../base/interfaces/official';
import { OffscreenCanvasGenerator, IOffscreenCanvasProperties } from '../../base/official-klasses/OffscreenCanvas';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IOffscreenCanvas, IOffscreenCanvasProperties>();
const OffscreenCanvasBaseClass = OffscreenCanvasGenerator();

export default class OffscreenCanvas extends OffscreenCanvasBaseClass implements IOffscreenCanvas {}
