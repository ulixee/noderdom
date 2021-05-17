import StateMachine from '../../base/StateMachine';
import { IHTMLTrackElementIsolate } from '../../base/interfaces/isolate';
import HTMLTrackElementIsolateBase, { IHTMLTrackElementIsolateProperties } from '../../base/isolate-mixins/HTMLTrackElementIsolate';

// tslint:disable:variable-name
export const { getState, setState } = StateMachine<IHTMLTrackElementIsolate, IHTMLTrackElementIsolateProperties>();

export default class HTMLTrackElementIsolate extends HTMLTrackElementIsolateBase implements IHTMLTrackElementIsolate {}
