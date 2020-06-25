import { ISuperStyleSheet } from '../../base/interfaces/super';
import { ISuperStyleSheetProperties } from '../../base/super-klasses/SuperStyleSheet';
export declare const getState: <C = ISuperStyleSheet, P = ISuperStyleSheetProperties>(instance: C) => P, setState: <P = ISuperStyleSheetProperties>(instance: ISuperStyleSheet, properties: P) => void;
declare const SuperStyleSheetBaseClass: {
    new (): {};
};
export default class SuperStyleSheet extends SuperStyleSheetBaseClass implements ISuperStyleSheet {
}
export {};
