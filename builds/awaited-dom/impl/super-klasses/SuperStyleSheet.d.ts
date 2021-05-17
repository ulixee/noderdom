import { ISuperStyleSheet } from '../../base/interfaces/super';
import { ISuperStyleSheetProperties } from '../../base/super-klasses/SuperStyleSheet';
export declare const getState: (instance: ISuperStyleSheet) => ISuperStyleSheetProperties, setState: (instance: ISuperStyleSheet, properties: Partial<ISuperStyleSheetProperties>) => void;
declare const SuperStyleSheetBaseClass: {
    new (): {
        readonly cssRules: import("../../base/interfaces/official").ICSSRuleList;
        readonly ownerRule: import("../../base/interfaces/official").ICSSRule;
        deleteRule(index: number): Promise<void>;
        insertRule(rule: string, index?: number | undefined): Promise<number>;
    };
};
export default class SuperStyleSheet extends SuperStyleSheetBaseClass implements ISuperStyleSheet {
    constructor();
}
export {};
