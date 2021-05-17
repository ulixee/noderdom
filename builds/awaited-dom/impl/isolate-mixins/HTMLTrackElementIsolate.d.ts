import { IHTMLTrackElementIsolate } from '../../base/interfaces/isolate';
import HTMLTrackElementIsolateBase, { IHTMLTrackElementIsolateProperties } from '../../base/isolate-mixins/HTMLTrackElementIsolate';
export declare const getState: (instance: IHTMLTrackElementIsolate) => IHTMLTrackElementIsolateProperties, setState: (instance: IHTMLTrackElementIsolate, properties: Partial<IHTMLTrackElementIsolateProperties>) => void;
export default class HTMLTrackElementIsolate extends HTMLTrackElementIsolateBase implements IHTMLTrackElementIsolate {
}
