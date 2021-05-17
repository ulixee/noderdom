import { IRequest, IRequestInfo, IRequestInit, IHeaders } from '../../base/interfaces/official';
import { IRequestProperties } from '../../base/official-klasses/Request';
export declare const getState: (instance: IRequest) => IRequestProperties, setState: (instance: IRequest, properties: Partial<IRequestProperties>) => void;
declare const RequestBaseClass: {
    new (_input: IRequestInfo, _init?: IRequestInit | undefined): {
        readonly cache: Promise<import("../../base/interfaces/official").IRequestCache>;
        readonly credentials: Promise<import("../../base/interfaces/official").IRequestCredentials>;
        readonly destination: Promise<import("../../base/interfaces/official").IRequestDestination>;
        readonly headers: IHeaders;
        readonly integrity: Promise<string>;
        readonly isHistoryNavigation: Promise<boolean>;
        readonly isReloadNavigation: Promise<boolean>;
        readonly keepalive: Promise<boolean>;
        readonly method: Promise<string>;
        readonly mode: Promise<import("../../base/interfaces/official").IRequestMode>;
        readonly redirect: Promise<import("../../base/interfaces/official").IRequestRedirect>;
        readonly referrer: Promise<string>;
        readonly referrerPolicy: Promise<import("../../base/interfaces/official").IReferrerPolicy>;
        readonly url: Promise<string>;
        readonly bodyUsed: Promise<boolean>;
        arrayBuffer(): Promise<ArrayBuffer>;
        json(): Promise<any>;
        text(): Promise<string>;
    };
};
export default class Request extends RequestBaseClass implements IRequest {
    constructor(_input: IRequestInfo, _init?: IRequestInit);
    get headers(): IHeaders;
}
export {};
