import { IStyleSheet } from '../../base/interfaces/official';
import { IStyleSheetProperties } from '../../base/official-klasses/StyleSheet';
export declare const getState: <C = IStyleSheet, P = IStyleSheetProperties>(instance: C) => P, setState: <P = IStyleSheetProperties>(instance: IStyleSheet, properties: P) => void;
declare const StyleSheetBaseClass: {
    new (): {};
};
export default class StyleSheet extends StyleSheetBaseClass implements IStyleSheet {
}
export {};
