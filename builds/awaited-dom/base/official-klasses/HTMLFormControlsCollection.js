"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLFormControlsCollectionConstantKeys = exports.HTMLFormControlsCollectionPropertyKeys = exports.HTMLFormControlsCollectionGenerator = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const HTMLCollectionBase_1 = require("./HTMLCollectionBase");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLFormControlsCollection', exports.getState, exports.setState);
function HTMLFormControlsCollectionGenerator(HTMLCollectionBase) {
    return class HTMLFormControlsCollection extends HTMLCollectionBase {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLFormControlsCollectionConstantKeys, exports.HTMLFormControlsCollectionPropertyKeys);
            // proxy supports indexed property access
            const proxy = new Proxy(this, {
                get(target, prop) {
                    if (prop in target) {
                        // @ts-ignore
                        const value = target[prop];
                        if (typeof value === 'function')
                            return value.bind(target);
                        return value;
                    }
                    // delegate to string indexer
                    return target.namedItem(prop);
                },
            });
            exports.recordProxy(proxy, this);
            return proxy;
        }
        // methods
        namedItem(name) {
            return exports.awaitedHandler.runMethod(this, 'namedItem', [name]);
        }
    };
}
exports.HTMLFormControlsCollectionGenerator = HTMLFormControlsCollectionGenerator;
exports.HTMLFormControlsCollectionPropertyKeys = [...HTMLCollectionBase_1.HTMLCollectionBasePropertyKeys];
exports.HTMLFormControlsCollectionConstantKeys = [...HTMLCollectionBase_1.HTMLCollectionBaseConstantKeys];
//# sourceMappingURL=HTMLFormControlsCollection.js.map