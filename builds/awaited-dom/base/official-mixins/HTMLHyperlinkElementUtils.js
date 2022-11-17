"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLHyperlinkElementUtilsConstantKeys = exports.HTMLHyperlinkElementUtilsPropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLHyperlinkElementUtils', exports.getState, exports.setState);
class HTMLHyperlinkElementUtils {
    get hash() {
        return exports.awaitedHandler.getProperty(this, 'hash', false);
    }
    get host() {
        return exports.awaitedHandler.getProperty(this, 'host', false);
    }
    get hostname() {
        return exports.awaitedHandler.getProperty(this, 'hostname', false);
    }
    get href() {
        return exports.awaitedHandler.getProperty(this, 'href', false);
    }
    get origin() {
        return exports.awaitedHandler.getProperty(this, 'origin', false);
    }
    get password() {
        return exports.awaitedHandler.getProperty(this, 'password', false);
    }
    get pathname() {
        return exports.awaitedHandler.getProperty(this, 'pathname', false);
    }
    get port() {
        return exports.awaitedHandler.getProperty(this, 'port', false);
    }
    get protocol() {
        return exports.awaitedHandler.getProperty(this, 'protocol', false);
    }
    get search() {
        return exports.awaitedHandler.getProperty(this, 'search', false);
    }
    get username() {
        return exports.awaitedHandler.getProperty(this, 'username', false);
    }
    // methods
    toString() {
        return exports.awaitedHandler.runMethod(this, 'toString', []);
    }
}
exports.default = HTMLHyperlinkElementUtils;
exports.HTMLHyperlinkElementUtilsPropertyKeys = ['hash', 'host', 'hostname', 'href', 'origin', 'password', 'pathname', 'port', 'protocol', 'search', 'username'];
exports.HTMLHyperlinkElementUtilsConstantKeys = [];
//# sourceMappingURL=HTMLHyperlinkElementUtils.js.map