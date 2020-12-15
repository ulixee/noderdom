import StateMachine from '../../base/StateMachine';
import { ISuperStyleSheet } from '../../base/interfaces/super';
import { SuperStyleSheetGenerator, ISuperStyleSheetProperties } from '../../base/super-klasses/SuperStyleSheet';
import CSSStyleSheetIsolate from '../isolate-mixins/CSSStyleSheetIsolate';
import StyleSheetIsolate from '../isolate-mixins/StyleSheetIsolate';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<ISuperStyleSheet, ISuperStyleSheetProperties>();
const SuperStyleSheetBaseClass = SuperStyleSheetGenerator(CSSStyleSheetIsolate, StyleSheetIsolate);

export default class SuperStyleSheet extends SuperStyleSheetBaseClass implements ISuperStyleSheet {
  constructor() {
    super();
  }
}
