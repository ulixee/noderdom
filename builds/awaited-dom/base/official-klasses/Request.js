"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestConstantKeys = exports.RequestPropertyKeys = exports.RequestGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const Body_1 = require("../official-mixins/Body");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('Request', exports.getState, exports.setState);
function RequestGenerator(Body) {
    return class Request extends Body {
        constructor(_input, _init) {
            super(_input, _init);
        }
        // properties
        get cache() {
            return exports.awaitedHandler.getProperty(this, 'cache', false);
        }
        get credentials() {
            return exports.awaitedHandler.getProperty(this, 'credentials', false);
        }
        get destination() {
            return exports.awaitedHandler.getProperty(this, 'destination', false);
        }
        get headers() {
            throw new Error('Request.headers getter not implemented');
        }
        get integrity() {
            return exports.awaitedHandler.getProperty(this, 'integrity', false);
        }
        get isHistoryNavigation() {
            return exports.awaitedHandler.getProperty(this, 'isHistoryNavigation', false);
        }
        get isReloadNavigation() {
            return exports.awaitedHandler.getProperty(this, 'isReloadNavigation', false);
        }
        get keepalive() {
            return exports.awaitedHandler.getProperty(this, 'keepalive', false);
        }
        get method() {
            return exports.awaitedHandler.getProperty(this, 'method', false);
        }
        get mode() {
            return exports.awaitedHandler.getProperty(this, 'mode', false);
        }
        get redirect() {
            return exports.awaitedHandler.getProperty(this, 'redirect', false);
        }
        get referrer() {
            return exports.awaitedHandler.getProperty(this, 'referrer', false);
        }
        get referrerPolicy() {
            return exports.awaitedHandler.getProperty(this, 'referrerPolicy', false);
        }
        get url() {
            return exports.awaitedHandler.getProperty(this, 'url', false);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.RequestPropertyKeys, exports.RequestConstantKeys);
        }
    };
}
exports.RequestGenerator = RequestGenerator;
exports.RequestPropertyKeys = [...Body_1.BodyPropertyKeys, 'cache', 'credentials', 'destination', 'headers', 'integrity', 'isHistoryNavigation', 'isReloadNavigation', 'keepalive', 'method', 'mode', 'redirect', 'referrer', 'referrerPolicy', 'url'];
exports.RequestConstantKeys = [...Body_1.BodyConstantKeys];
//# sourceMappingURL=Request.js.map