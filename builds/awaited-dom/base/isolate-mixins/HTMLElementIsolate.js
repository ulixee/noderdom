"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLElementIsolateConstantKeys = exports.HTMLElementIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLElementIsolate', exports.getState, exports.setState);
class HTMLElementIsolate {
    get accessKey() {
        return exports.awaitedHandler.getProperty(this, 'accessKey', false);
    }
    get autoCapitalize() {
        return exports.awaitedHandler.getProperty(this, 'autoCapitalize', false);
    }
    get dir() {
        return exports.awaitedHandler.getProperty(this, 'dir', false);
    }
    get draggable() {
        return exports.awaitedHandler.getProperty(this, 'draggable', false);
    }
    get hidden() {
        return exports.awaitedHandler.getProperty(this, 'hidden', false);
    }
    get inert() {
        return exports.awaitedHandler.getProperty(this, 'inert', false);
    }
    get innerText() {
        return exports.awaitedHandler.getProperty(this, 'innerText', false);
    }
    get lang() {
        return exports.awaitedHandler.getProperty(this, 'lang', false);
    }
    get offsetHeight() {
        return exports.awaitedHandler.getProperty(this, 'offsetHeight', false);
    }
    get offsetLeft() {
        return exports.awaitedHandler.getProperty(this, 'offsetLeft', false);
    }
    get offsetParent() {
        throw new Error('HTMLElementIsolate.offsetParent getter not implemented');
    }
    get offsetTop() {
        return exports.awaitedHandler.getProperty(this, 'offsetTop', false);
    }
    get offsetWidth() {
        return exports.awaitedHandler.getProperty(this, 'offsetWidth', false);
    }
    get spellcheck() {
        return exports.awaitedHandler.getProperty(this, 'spellcheck', false);
    }
    get title() {
        return exports.awaitedHandler.getProperty(this, 'title', false);
    }
    get translate() {
        return exports.awaitedHandler.getProperty(this, 'translate', false);
    }
    // methods
    click() {
        return exports.awaitedHandler.runMethod(this, 'click', []);
    }
}
exports.default = HTMLElementIsolate;
exports.HTMLElementIsolatePropertyKeys = ['accessKey', 'autoCapitalize', 'dir', 'draggable', 'hidden', 'inert', 'innerText', 'lang', 'offsetHeight', 'offsetLeft', 'offsetParent', 'offsetTop', 'offsetWidth', 'spellcheck', 'title', 'translate'];
exports.HTMLElementIsolateConstantKeys = [];
//# sourceMappingURL=HTMLElementIsolate.js.map