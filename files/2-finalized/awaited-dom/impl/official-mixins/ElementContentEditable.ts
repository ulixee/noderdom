import StateMachine from '../../base/StateMachine';
import { IElementContentEditable } from '../../base/interfaces/official';
import ElementContentEditableBase, { IElementContentEditableProperties } from '../../base/official-mixins/ElementContentEditable';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IElementContentEditable, IElementContentEditableProperties>();

export default class ElementContentEditable extends ElementContentEditableBase implements IElementContentEditable {}
