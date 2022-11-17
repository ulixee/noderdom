"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLMetaElementIsolateConstantKeys = exports.HTMLMetaElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLMetaElementIsolate', exports.getState, exports.setState);
class HTMLMetaElementIsolate {
    get content() {
        return exports.awaitedHandler.getProperty(this, 'content', false);
    }
    get httpEquiv() {
        return exports.awaitedHandler.getProperty(this, 'httpEquiv', false);
    }
    get name() {
        return exports.awaitedHandler.getProperty(this, 'name', false);
    }
    get scheme() {
        return exports.awaitedHandler.getProperty(this, 'scheme', false);
    }
}
exports.default = HTMLMetaElementIsolate;
exports.HTMLMetaElementIsolatePropertyKeys = ['content', 'httpEquiv', 'name', 'scheme'];
exports.HTMLMetaElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLMetaElementIsolate.js.map