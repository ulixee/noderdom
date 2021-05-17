import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IBody } from '../interfaces/official';
export declare const getState: (instance: IBody) => IBodyProperties, setState: (instance: IBody, properties: Partial<IBodyProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IBody>;
export default class Body implements IBody {
    get bodyUsed(): Promise<boolean>;
    arrayBuffer(): Promise<ArrayBuffer>;
    json(): Promise<any>;
    text(): Promise<string>;
}
export interface IBodyProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly bodyUsed?: Promise<boolean>;
}
export declare const BodyPropertyKeys: string[];
export declare const BodyConstantKeys: never[];
