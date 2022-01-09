import { IResponse, IBodyInit, IResponseInit, IHeaders } from '../../base/interfaces/official';
import { IResponseProperties } from '../../base/official-klasses/Response';
export declare const getState: (instance: IResponse) => IResponseProperties, setState: (instance: IResponse, properties: Partial<IResponseProperties>) => void;
declare const ResponseBaseClass: {
    new (_body?: IBodyInit | null | undefined, _init?: IResponseInit | undefined): {
        readonly headers: IHeaders;
        readonly ok: Promise<boolean>;
        readonly redirected: Promise<boolean>;
        readonly status: Promise<number>;
        readonly statusText: Promise<string>;
        readonly type: Promise<import("../../base/interfaces/official").IResponseType>;
        readonly url: Promise<string>;
        readonly bodyUsed: Promise<boolean>;
        arrayBuffer(): Promise<ArrayBuffer>;
        json(): Promise<any>;
        text(): Promise<string>;
    };
};
export default class Response extends ResponseBaseClass implements IResponse {
    constructor(_body?: IBodyInit | null, _init?: IResponseInit);
    get headers(): IHeaders;
}
export {};
