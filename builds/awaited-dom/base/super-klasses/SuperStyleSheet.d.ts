import AwaitedHandler from '../AwaitedHandler';
import AwaitedPath from '../AwaitedPath';
import Constructable from '../Constructable';
import { ISuperStyleSheet } from '../interfaces/super';
import { ICSSStyleSheetIsolate, IStyleSheetIsolate } from '../interfaces/isolate';
import { ICSSStyleSheetIsolateProperties } from '../isolate-mixins/CSSStyleSheetIsolate';
import { IStyleSheetIsolateProperties } from '../isolate-mixins/StyleSheetIsolate';
export declare const getState: (instance: ISuperStyleSheet) => ISuperStyleSheetProperties, setState: (instance: ISuperStyleSheet, properties: Partial<ISuperStyleSheetProperties>) => void;
export declare const awaitedHandler: AwaitedHandler<ISuperStyleSheet>;
export declare function SuperStyleSheetGenerator(CSSStyleSheetIsolate: Constructable<ICSSStyleSheetIsolate>, StyleSheetIsolate: Constructable<IStyleSheetIsolate>): {
    new (): {
        readonly cssRules: import("../interfaces/official").ICSSRuleList;
        readonly ownerRule: import("../interfaces/official").ICSSRule;
        deleteRule(index: number): Promise<void>;
        insertRule(rule: string, index?: number | undefined): Promise<number>;
    };
};
export interface ISuperStyleSheetProperties extends ICSSStyleSheetIsolateProperties, IStyleSheetIsolateProperties {
    awaitedPath: AwaitedPath;
    awaitedOptions: any;
}
export declare const SuperStyleSheetPropertyKeys: string[];
export declare const SuperStyleSheetConstantKeys: never[];
