import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { ITextIsolate } from '../interfaces/isolate';
import { ISuperText } from '../interfaces/super';
export declare const getState: <C = ITextIsolate, P = ITextIsolateProperties>(instance: C) => P, setState: <P = ITextIsolateProperties>(instance: ITextIsolate, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<ITextIsolate>;
export default class TextIsolate implements ITextIsolate {
    get wholeText(): Promise<string>;
    splitText(offset: number): Promise<ISuperText>;
}
export interface ITextIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly wholeText?: Promise<string>;
}
export declare const TextIsolatePropertyKeys: string[];
export declare const TextIsolateConstantKeys: never[];
