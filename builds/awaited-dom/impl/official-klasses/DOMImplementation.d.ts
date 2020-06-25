import { IDOMImplementation } from '../../base/interfaces/official';
import { IDOMImplementationProperties } from '../../base/official-klasses/DOMImplementation';
export declare const getState: <C = IDOMImplementation, P = IDOMImplementationProperties>(instance: C) => P, setState: <P = IDOMImplementationProperties>(instance: IDOMImplementation, properties: P) => void;
declare const DOMImplementationBaseClass: {
    new (): {
        hasFeature(): Promise<boolean>;
    };
};
export default class DOMImplementation extends DOMImplementationBaseClass implements IDOMImplementation {
}
export {};
