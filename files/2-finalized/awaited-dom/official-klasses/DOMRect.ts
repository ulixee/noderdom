import StateMachine from '../../awaited-base/StateMachine';
import { IDOMRect } from '../../awaited-base/interfaces/official';
import { DOMRectGenerator, initialize, IDOMRectProperties } from '../../awaited-base/official-klasses/DOMRect';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IDOMRect, IDOMRectProperties>();
const DOMRectBase = DOMRectGenerator();

export default class DOMRect extends DOMRectBase implements IDOMRect {
  constructor(_x?: number, _y?: number, _width?: number, _height?: number) {
    super();
    initialize(DOMRect, this);
  }
}
