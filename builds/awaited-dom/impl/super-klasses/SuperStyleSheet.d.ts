import { ISuperStyleSheet } from '../../base/interfaces/super';
import { ISuperStyleSheetProperties } from '../../base/super-klasses/SuperStyleSheet';
export declare const getState: (instance: ISuperStyleSheet) => ISuperStyleSheetProperties, setState: (instance: ISuperStyleSheet, properties: Partial<ISuperStyleSheetProperties>) => void, recordProxy: (proxy: ISuperStyleSheet, instance: ISuperStyleSheet) => void;
declare const SuperStyleSheetBaseClass: {
    new (): {};
};
export default class SuperStyleSheet extends SuperStyleSheetBaseClass implements ISuperStyleSheet {
}
export {};
