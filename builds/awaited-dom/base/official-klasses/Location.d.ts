import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { ILocation } from '../interfaces/official';
export declare const getState: <C = ILocation, P = ILocationProperties>(instance: C) => P, setState: <P = ILocationProperties>(instance: ILocation, properties: P) => void;
export declare const awaitedHandler: AwaitedHandler<ILocation>;
export declare function LocationGenerator(): {
    new (): {
        hash: any;
        host: any;
        hostname: any;
        href: any;
        readonly origin: Promise<string>;
        pathname: any;
        port: any;
        protocol: any;
        search: any;
        assign(url: string): Promise<void>;
        reload(): Promise<void>;
        replace(url: string): Promise<void>;
        toString(): Promise<string>;
    };
};
export interface ILocationProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    hash?: Promise<string> | any;
    host?: Promise<string> | any;
    hostname?: Promise<string> | any;
    href?: Promise<string> | any;
    readonly origin?: Promise<string>;
    pathname?: Promise<string> | any;
    port?: Promise<string> | any;
    protocol?: Promise<string> | any;
    search?: Promise<string> | any;
}
export declare const LocationPropertyKeys: string[];
export declare const LocationConstantKeys: never[];
