import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { ICharacterDataIsolate } from '../interfaces/isolate';
export declare const getState: (instance: ICharacterDataIsolate) => ICharacterDataIsolateProperties, setState: (instance: ICharacterDataIsolate, properties: Partial<ICharacterDataIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ICharacterDataIsolate>;
export default class CharacterDataIsolate implements ICharacterDataIsolate {
    get data(): Promise<string>;
    get length(): Promise<number>;
    substringData(offset: number, count: number): Promise<string>;
}
export interface ICharacterDataIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly data?: Promise<string>;
    readonly length?: Promise<number>;
}
export declare const CharacterDataIsolatePropertyKeys: string[];
export declare const CharacterDataIsolateConstantKeys: never[];
