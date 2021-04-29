import StateMachine from '../../base/StateMachine';
import { IHTMLHyperlinkElementUtils } from '../../base/interfaces/official';
import HTMLHyperlinkElementUtilsBase, { IHTMLHyperlinkElementUtilsProperties } from '../../base/official-mixins/HTMLHyperlinkElementUtils';

// tslint:disable:variable-name
export const { getState, setState, recordProxy } = StateMachine<IHTMLHyperlinkElementUtils, IHTMLHyperlinkElementUtilsProperties>();

export default class HTMLHyperlinkElementUtils extends HTMLHyperlinkElementUtilsBase implements IHTMLHyperlinkElementUtils {}
