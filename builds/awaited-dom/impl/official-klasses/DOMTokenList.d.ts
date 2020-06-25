import { IDOMTokenList } from '../../base/interfaces/official';
import { IDOMTokenListProperties } from '../../base/official-klasses/DOMTokenList';
export declare const getState: <C = IDOMTokenList, P = IDOMTokenListProperties>(instance: C) => P, setState: <P = IDOMTokenListProperties>(instance: IDOMTokenList, properties: P) => void;
declare const DOMTokenListBaseClass: {
    new (): {};
};
export default class DOMTokenList extends DOMTokenListBaseClass implements IDOMTokenList {
}
export {};
