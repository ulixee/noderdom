import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IMediaStream } from '../interfaces/official';
export declare const getState: (instance: IMediaStream) => IMediaStreamProperties, setState: (instance: IMediaStream, properties: Partial<IMediaStreamProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IMediaStream>;
export declare function MediaStreamGenerator(): {
    new (_stream?: IMediaStream): {
        readonly active: Promise<boolean>;
        readonly id: Promise<string>;
        clone(): IMediaStream;
    };
};
export interface IMediaStreamProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly active?: Promise<boolean>;
    readonly id?: Promise<string>;
}
export declare const MediaStreamPropertyKeys: string[];
export declare const MediaStreamConstantKeys: never[];
