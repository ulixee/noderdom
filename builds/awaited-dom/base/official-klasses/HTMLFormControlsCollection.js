"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLFormControlsCollectionConstantKeys = exports.HTMLFormControlsCollectionPropertyKeys = exports.HTMLFormControlsCollectionGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const HTMLCollectionBase_1 = require("./HTMLCollectionBase");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLFormControlsCollection', exports.getState, exports.setState);
function HTMLFormControlsCollectionGenerator(HTMLCollectionBase) {
    return class HTMLFormControlsCollection extends HTMLCollectionBase {
        constructor() {
            super();
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
                    // delegate to indexer property
                    if ((typeof prop === 'string' || typeof prop === 'number') && !isNaN(prop)) {
                        const param = parseInt(prop, 10);
                        return target.item(param);
                    }
                    // delegate to string indexer
                    if (typeof prop === 'string') {
                        return target.namedItem(prop);
                    }
                },
            });
            return proxy;
        }
        // methods
        namedItem(name) {
            return exports.awaitedHandler.runMethod(this, 'namedItem', [name]);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLFormControlsCollectionPropertyKeys, exports.HTMLFormControlsCollectionConstantKeys);
        }
    };
}
exports.HTMLFormControlsCollectionGenerator = HTMLFormControlsCollectionGenerator;
exports.HTMLFormControlsCollectionPropertyKeys = [...HTMLCollectionBase_1.HTMLCollectionBasePropertyKeys];
exports.HTMLFormControlsCollectionConstantKeys = [...HTMLCollectionBase_1.HTMLCollectionBaseConstantKeys];
//# sourceMappingURL=HTMLFormControlsCollection.js.map