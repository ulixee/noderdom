import { IDOMParser, ISupportedType } from '../../base/interfaces/official';
import { ISuperDocument } from '../../base/interfaces/super';
import { IDOMParserProperties } from '../../base/official-klasses/DOMParser';
export declare const getState: (instance: IDOMParser) => IDOMParserProperties, setState: (instance: IDOMParser, properties: Partial<IDOMParserProperties>) => void;
declare const DOMParserBaseClass: {
    new (): {
        parseFromString(str: string, type: ISupportedType): ISuperDocument;
    };
};
export default class DOMParser extends DOMParserBaseClass implements IDOMParser {
    parseFromString(str: string, type: ISupportedType): ISuperDocument;
}
export {};
