"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseConstantKeys = exports.ResponsePropertyKeys = exports.ResponseGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const Body_1 = require("../official-mixins/Body");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('Response', exports.getState, exports.setState);
function ResponseGenerator(Body) {
    return class Response extends Body {
        constructor(_body, _init) {
            super(_body, _init);
        }
        // properties
        get headers() {
            throw new Error('Response.headers getter not implemented');
        }
        get ok() {
            return exports.awaitedHandler.getProperty(this, 'ok', false);
        }
        get redirected() {
            return exports.awaitedHandler.getProperty(this, 'redirected', false);
        }
        get status() {
            return exports.awaitedHandler.getProperty(this, 'status', false);
        }
        get statusText() {
            return exports.awaitedHandler.getProperty(this, 'statusText', false);
        }
        get type() {
            return exports.awaitedHandler.getProperty(this, 'type', false);
        }
        get url() {
            return exports.awaitedHandler.getProperty(this, 'url', false);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.ResponsePropertyKeys, exports.ResponseConstantKeys);
        }
    };
}
exports.ResponseGenerator = ResponseGenerator;
exports.ResponsePropertyKeys = [...Body_1.BodyPropertyKeys, 'headers', 'ok', 'redirected', 'status', 'statusText', 'type', 'url'];
exports.ResponseConstantKeys = [...Body_1.BodyConstantKeys];
//# sourceMappingURL=Response.js.map