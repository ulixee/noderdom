import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { IRequest, IBody, IRequestInfo, IRequestInit, IRequestCache, IRequestCredentials, IRequestDestination, IHeaders, IRequestMode, IRequestRedirect, IReferrerPolicy } from '../interfaces/official';
import { IBodyProperties } from '../official-mixins/Body';
export declare const getState: (instance: IRequest) => IRequestProperties, setState: (instance: IRequest, properties: Partial<IRequestProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IRequest>;
export declare function RequestGenerator(Body: Constructable<IBody>): {
    new (_input: IRequestInfo, _init?: IRequestInit): {
        readonly cache: Promise<IRequestCache>;
        readonly credentials: Promise<IRequestCredentials>;
        readonly destination: Promise<IRequestDestination>;
        readonly headers: IHeaders;
        readonly integrity: Promise<string>;
        readonly isHistoryNavigation: Promise<boolean>;
        readonly isReloadNavigation: Promise<boolean>;
        readonly keepalive: Promise<boolean>;
        readonly method: Promise<string>;
        readonly mode: Promise<IRequestMode>;
        readonly redirect: Promise<IRequestRedirect>;
        readonly referrer: Promise<string>;
        readonly referrerPolicy: Promise<IReferrerPolicy>;
        readonly url: Promise<string>;
        readonly bodyUsed: Promise<boolean>;
        arrayBuffer(): Promise<ArrayBuffer>;
        json(): Promise<any>;
        text(): Promise<string>;
    };
};
export interface IRequestProperties extends IBodyProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly cache?: Promise<IRequestCache>;
    readonly credentials?: Promise<IRequestCredentials>;
    readonly destination?: Promise<IRequestDestination>;
    readonly headers?: IHeaders;
    readonly integrity?: Promise<string>;
    readonly isHistoryNavigation?: Promise<boolean>;
    readonly isReloadNavigation?: Promise<boolean>;
    readonly keepalive?: Promise<boolean>;
    readonly method?: Promise<string>;
    readonly mode?: Promise<IRequestMode>;
    readonly redirect?: Promise<IRequestRedirect>;
    readonly referrer?: Promise<string>;
    readonly referrerPolicy?: Promise<IReferrerPolicy>;
    readonly url?: Promise<string>;
}
export declare const RequestPropertyKeys: string[];
export declare const RequestConstantKeys: never[];
