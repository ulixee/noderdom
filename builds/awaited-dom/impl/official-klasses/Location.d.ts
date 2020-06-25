import { ILocation } from '../../base/interfaces/official';
import { ILocationProperties } from '../../base/official-klasses/Location';
export declare const getState: <C = ILocation, P = ILocationProperties>(instance: C) => P, setState: <P = ILocationProperties>(instance: ILocation, properties: P) => void;
declare const LocationBaseClass: {
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
export default class Location extends LocationBaseClass implements ILocation {
}
export {};
