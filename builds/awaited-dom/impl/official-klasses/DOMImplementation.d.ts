import { IDOMImplementation } from '../../base/interfaces/official';
import { IDOMImplementationProperties } from '../../base/official-klasses/DOMImplementation';
export declare const getState: (instance: IDOMImplementation) => IDOMImplementationProperties, setState: (instance: IDOMImplementation, properties: Partial<IDOMImplementationProperties>) => void;
declare const DOMImplementationBaseClass: {
    new (): {
        hasFeature(): Promise<boolean>;
    };
};
export default class DOMImplementation extends DOMImplementationBaseClass implements IDOMImplementation {
}
export {};
