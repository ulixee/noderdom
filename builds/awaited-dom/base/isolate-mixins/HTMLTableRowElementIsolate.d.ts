import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import { IHTMLTableRowElementIsolate } from '../interfaces/isolate';
import { ISuperHTMLCollection } from '../interfaces/super';
import { IHTMLTableCellElement } from '../interfaces/official';
export declare const getState: (instance: IHTMLTableRowElementIsolate) => IHTMLTableRowElementIsolateProperties, setState: (instance: IHTMLTableRowElementIsolate, properties: Partial<IHTMLTableRowElementIsolateProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<IHTMLTableRowElementIsolate>;
export default class HTMLTableRowElementIsolate implements IHTMLTableRowElementIsolate {
    get align(): Promise<string>;
    get bgColor(): Promise<string>;
    get cells(): ISuperHTMLCollection;
    get ch(): Promise<string>;
    get chOff(): Promise<string>;
    get rowIndex(): Promise<number>;
    get sectionRowIndex(): Promise<number>;
    get vAlign(): Promise<string>;
    deleteCell(index: number): Promise<void>;
    insertCell(index?: number): IHTMLTableCellElement;
}
export interface IHTMLTableRowElementIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
    readonly align?: Promise<string>;
    readonly bgColor?: Promise<string>;
    readonly cells?: ISuperHTMLCollection;
    readonly ch?: Promise<string>;
    readonly chOff?: Promise<string>;
    readonly rowIndex?: Promise<number>;
    readonly sectionRowIndex?: Promise<number>;
    readonly vAlign?: Promise<string>;
}
export declare const HTMLTableRowElementIsolatePropertyKeys: string[];
export declare const HTMLTableRowElementIsolateConstantKeys: never[];
