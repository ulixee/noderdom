import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IDOMParser, ISupportedType } from '../interfaces/official';
import { ISuperDocument } from '../interfaces/super';
export declare const getState: (instance: IDOMParser) => IDOMParserProperties, setState: (instance: IDOMParser, properties: Partial<IDOMParserProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IDOMParser>;
export declare function DOMParserGenerator(): {
    new (): {
        parseFromString(str: string, type: ISupportedType): ISuperDocument;
    };
};
export interface IDOMParserProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const DOMParserPropertyKeys: never[];
export declare const DOMParserConstantKeys: never[];
