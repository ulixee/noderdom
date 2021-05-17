import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IXMLSerializer } from '../interfaces/official';
import { INodeIsolate } from '../interfaces/isolate';
export declare const getState: (instance: IXMLSerializer) => IXMLSerializerProperties, setState: (instance: IXMLSerializer, properties: Partial<IXMLSerializerProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IXMLSerializer>;
export declare function XMLSerializerGenerator(): {
    new (): {
        serializeToString(root: INodeIsolate): Promise<string>;
    };
};
export interface IXMLSerializerProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const XMLSerializerPropertyKeys: never[];
export declare const XMLSerializerConstantKeys: never[];
