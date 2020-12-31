import StateMachine from '../../base/StateMachine';
import { IDOMRect } from '../../base/interfaces/official';
import { DOMRectGenerator, IDOMRectProperties } from '../../base/official-klasses/DOMRect';
import DOMRectReadOnly from './DOMRectReadOnly';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IDOMRect, IDOMRectProperties>();
const DOMRectBaseClass = DOMRectGenerator(DOMRectReadOnly);

export default class DOMRect extends DOMRectBaseClass implements IDOMRect {
  constructor(_x?: number, _y?: number, _width?: number, _height?: number) {
    super(_x, _y, _width, _height);
  }
}
