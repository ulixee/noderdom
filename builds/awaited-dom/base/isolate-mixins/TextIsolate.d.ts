import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { ITextIsolate } from '../interfaces/isolate';
import { ISuperText } from '../interfaces/super';
export declare const getState: (instance: ITextIsolate) => ITextIsolateProperties, setState: (instance: ITextIsolate, properties: Partial<ITextIsolateProperties>) => void;
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
