import { ITextIsolate } from '../../base/interfaces/isolate';
import TextIsolateBase, { ITextIsolateProperties } from '../../base/isolate-mixins/TextIsolate';
export declare const getState: (instance: ITextIsolate) => ITextIsolateProperties, setState: (instance: ITextIsolate, properties: Partial<ITextIsolateProperties>) => void;
export default class TextIsolate extends TextIsolateBase implements ITextIsolate {
}
