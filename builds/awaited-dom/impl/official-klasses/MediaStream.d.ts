import { IMediaStream } from '../../base/interfaces/official';
import { IMediaStreamProperties } from '../../base/official-klasses/MediaStream';
export declare const getState: (instance: IMediaStream) => IMediaStreamProperties, setState: (instance: IMediaStream, properties: Partial<IMediaStreamProperties>) => void;
declare const MediaStreamBaseClass: {
    new (_stream?: IMediaStream | undefined): {
        readonly active: Promise<boolean>;
        readonly id: Promise<string>;
        clone(): IMediaStream;
    };
};
export default class MediaStream extends MediaStreamBaseClass implements IMediaStream {
    clone(): IMediaStream;
}
export {};
