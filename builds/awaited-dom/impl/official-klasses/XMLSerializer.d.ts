import { IXMLSerializer } from '../../base/interfaces/official';
import { IXMLSerializerProperties } from '../../base/official-klasses/XMLSerializer';
export declare const getState: (instance: IXMLSerializer) => IXMLSerializerProperties, setState: (instance: IXMLSerializer, properties: Partial<IXMLSerializerProperties>) => void, recordProxy: (proxy: IXMLSerializer, instance: IXMLSerializer) => void;
declare const XMLSerializerBaseClass: {
    new (): {
        serializeToString(root: import("../../base/interfaces/isolate").INodeIsolate): Promise<string>;
    };
};
export default class XMLSerializer extends XMLSerializerBaseClass implements IXMLSerializer {
}
export {};
