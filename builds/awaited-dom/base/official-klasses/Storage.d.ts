import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IStorage } from '../interfaces/official';
export declare const getState: (instance: IStorage) => IStorageProperties, setState: (instance: IStorage, properties: Partial<IStorageProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IStorage>;
export declare function StorageGenerator(): {
    new (): {
        readonly length: Promise<number>;
        clear(): Promise<undefined>;
        getItem(key: string): Promise<string | null>;
        key(index: number): Promise<string | null>;
        removeItem(key: string): Promise<undefined>;
        setItem(key: string, value: string): Promise<undefined>;
    };
};
export interface IStorageProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly length?: Promise<number>;
}
export declare const StoragePropertyKeys: string[];
export declare const StorageConstantKeys: never[];
