"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLFormElementIsolateConstantKeys = exports.HTMLFormElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLFormElementIsolate', exports.getState, exports.setState);
class HTMLFormElementIsolate {
    get acceptCharset() {
        return exports.awaitedHandler.getProperty(this, 'acceptCharset', false);
    }
    get action() {
        return exports.awaitedHandler.getProperty(this, 'action', false);
    }
    get autocomplete() {
        return exports.awaitedHandler.getProperty(this, 'autocomplete', false);
    }
    get encoding() {
        return exports.awaitedHandler.getProperty(this, 'encoding', false);
    }
    get enctype() {
        return exports.awaitedHandler.getProperty(this, 'enctype', false);
    }
    get length() {
        return exports.awaitedHandler.getProperty(this, 'length', false);
    }
    get name() {
        return exports.awaitedHandler.getProperty(this, 'name', false);
    }
    get noValidate() {
        return exports.awaitedHandler.getProperty(this, 'noValidate', false);
    }
    get target() {
        return exports.awaitedHandler.getProperty(this, 'target', false);
    }
    // methods
    checkValidity() {
        return exports.awaitedHandler.runMethod(this, 'checkValidity', []);
    }
    reportValidity() {
        return exports.awaitedHandler.runMethod(this, 'reportValidity', []);
    }
    reset() {
        return exports.awaitedHandler.runMethod(this, 'reset', []);
    }
    submit() {
        return exports.awaitedHandler.runMethod(this, 'submit', []);
    }
}
exports.default = HTMLFormElementIsolate;
exports.HTMLFormElementIsolatePropertyKeys = ['acceptCharset', 'action', 'autocomplete', 'encoding', 'enctype', 'length', 'name', 'noValidate', 'target'];
exports.HTMLFormElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLFormElementIsolate.js.map