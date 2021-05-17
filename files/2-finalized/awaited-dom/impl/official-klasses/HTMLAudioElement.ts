import StateMachine from '../../base/StateMachine';
import { IHTMLAudioElement } from '../../base/interfaces/official';
import { HTMLAudioElementGenerator, IHTMLAudioElementProperties } from '../../base/official-klasses/HTMLAudioElement';
import HTMLMediaElement from './HTMLMediaElement';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLAudioElement, IHTMLAudioElementProperties>();
const HTMLAudioElementBaseClass = HTMLAudioElementGenerator(HTMLMediaElement);

export default class HTMLAudioElement extends HTMLAudioElementBaseClass implements IHTMLAudioElement {
  constructor() {
    super();
  }
}
