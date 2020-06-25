import { ITextIsolate } from '../../base/interfaces/isolate';
import TextIsolateBase, { ITextIsolateProperties } from '../../base/isolate-mixins/TextIsolate';
export declare const getState: <C = ITextIsolate, P = ITextIsolateProperties>(instance: C) => P, setState: <P = ITextIsolateProperties>(instance: ITextIsolate, properties: P) => void;
export default class TextIsolate extends TextIsolateBase implements ITextIsolate {
}
