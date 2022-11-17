import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IResponse, IBody, IBodyInit, IResponseInit, IHeaders, IResponseType } from '../interfaces/official';
import { IBodyProperties } from '../official-mixins/Body';
export declare const getState: (instance: IResponse) => IResponseProperties, setState: (instance: IResponse, properties: Partial<IResponseProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IResponse>;
export declare function ResponseGenerator(Body: Constructable<IBody>): {
    new (_body?: IBodyInit | null, _init?: IResponseInit): {
        readonly headers: IHeaders;
        readonly ok: Promise<boolean>;
        readonly redirected: Promise<boolean>;
        readonly status: Promise<number>;
        readonly statusText: Promise<string>;
        readonly type: Promise<IResponseType>;
        readonly url: Promise<string>;
        readonly bodyUsed: Promise<boolean>;
        arrayBuffer(): Promise<ArrayBuffer>;
        json(): Promise<any>;
        text(): Promise<string>;
    };
};
export interface IResponseProperties extends IBodyProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly headers?: IHeaders;
    readonly ok?: Promise<boolean>;
    readonly redirected?: Promise<boolean>;
    readonly status?: Promise<number>;
    readonly statusText?: Promise<string>;
    readonly type?: Promise<IResponseType>;
    readonly url?: Promise<string>;
}
export declare const ResponsePropertyKeys: string[];
export declare const ResponseConstantKeys: never[];
