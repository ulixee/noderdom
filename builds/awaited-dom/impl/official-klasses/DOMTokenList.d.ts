import { IDOMTokenList } from '../../base/interfaces/official';
import { IDOMTokenListProperties } from '../../base/official-klasses/DOMTokenList';
export declare const getState: (instance: IDOMTokenList) => IDOMTokenListProperties, setState: (instance: IDOMTokenList, properties: Partial<IDOMTokenListProperties>) => void, recordProxy: (proxy: IDOMTokenList, instance: IDOMTokenList) => void;
declare const DOMTokenListBaseClass: {
    new (): {};
};
export default class DOMTokenList extends DOMTokenListBaseClass implements IDOMTokenList {
}
export {};
