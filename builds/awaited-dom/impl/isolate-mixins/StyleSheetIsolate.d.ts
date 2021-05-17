import { IStyleSheetIsolate } from '../../base/interfaces/isolate';
import StyleSheetIsolateBase, { IStyleSheetIsolateProperties } from '../../base/isolate-mixins/StyleSheetIsolate';
export declare const getState: (instance: IStyleSheetIsolate) => IStyleSheetIsolateProperties, setState: (instance: IStyleSheetIsolate, properties: Partial<IStyleSheetIsolateProperties>) => void;
export default class StyleSheetIsolate extends StyleSheetIsolateBase implements IStyleSheetIsolate {
}
