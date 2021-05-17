import { IStyleSheet } from '../../base/interfaces/official';
import { IStyleSheetProperties } from '../../base/official-klasses/StyleSheet';
export declare const getState: (instance: IStyleSheet) => IStyleSheetProperties, setState: (instance: IStyleSheet, properties: Partial<IStyleSheetProperties>) => void;
declare const StyleSheetBaseClass: {
    new (): {};
};
export default class StyleSheet extends StyleSheetBaseClass implements IStyleSheet {
}
export {};
