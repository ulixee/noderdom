"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioNodeListConstantKeys = exports.RadioNodeListPropertyKeys = exports.RadioNodeListGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeList_1 = require("./NodeList");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('RadioNodeList', exports.getState, exports.setState);
function RadioNodeListGenerator(NodeList) {
    return class RadioNodeList extends NodeList {
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
                },
            });
            return proxy;
        }
        // properties
        get value() {
            return exports.awaitedHandler.getProperty(this, 'value', false);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.RadioNodeListPropertyKeys, exports.RadioNodeListConstantKeys);
        }
    };
}
exports.RadioNodeListGenerator = RadioNodeListGenerator;
exports.RadioNodeListPropertyKeys = [...NodeList_1.NodeListPropertyKeys, 'value'];
exports.RadioNodeListConstantKeys = [...NodeList_1.NodeListConstantKeys];
//# sourceMappingURL=RadioNodeList.js.map