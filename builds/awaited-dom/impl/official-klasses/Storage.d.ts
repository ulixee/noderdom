import { IStorage } from '../../base/interfaces/official';
import { IStorageProperties } from '../../base/official-klasses/Storage';
export declare const getState: (instance: IStorage) => IStorageProperties, setState: (instance: IStorage, properties: Partial<IStorageProperties>) => void;
declare const StorageBaseClass: {
    new (): {
        readonly length: Promise<number>;
        clear(): Promise<undefined>;
        getItem(key: string): Promise<string | null>;
        key(index: number): Promise<string | null>;
        removeItem(key: string): Promise<undefined>;
        setItem(key: string, value: string): Promise<undefined>;
    };
};
export default class Storage extends StorageBaseClass implements IStorage {
}
export {};
