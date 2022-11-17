"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentIsolateConstantKeys = exports.DocumentIsolatePropertyKeys = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('DocumentIsolate', exports.getState, exports.setState);
class DocumentIsolate {
    get URL() {
        return exports.awaitedHandler.getProperty(this, 'URL', false);
    }
    get anchors() {
        throw new Error('DocumentIsolate.anchors getter not implemented');
    }
    get body() {
        throw new Error('DocumentIsolate.body getter not implemented');
    }
    get characterSet() {
        return exports.awaitedHandler.getProperty(this, 'characterSet', false);
    }
    get compatMode() {
        return exports.awaitedHandler.getProperty(this, 'compatMode', false);
    }
    get contentType() {
        return exports.awaitedHandler.getProperty(this, 'contentType', false);
    }
    get cookie() {
        return exports.awaitedHandler.getProperty(this, 'cookie', false);
    }
    get designMode() {
        return exports.awaitedHandler.getProperty(this, 'designMode', false);
    }
    get dir() {
        return exports.awaitedHandler.getProperty(this, 'dir', false);
    }
    get doctype() {
        throw new Error('DocumentIsolate.doctype getter not implemented');
    }
    get documentElement() {
        throw new Error('DocumentIsolate.documentElement getter not implemented');
    }
    get documentURI() {
        return exports.awaitedHandler.getProperty(this, 'documentURI', false);
    }
    get domain() {
        return exports.awaitedHandler.getProperty(this, 'domain', false);
    }
    get embeds() {
        throw new Error('DocumentIsolate.embeds getter not implemented');
    }
    get featurePolicy() {
        throw new Error('DocumentIsolate.featurePolicy getter not implemented');
    }
    get forms() {
        throw new Error('DocumentIsolate.forms getter not implemented');
    }
    get fullscreenEnabled() {
        return exports.awaitedHandler.getProperty(this, 'fullscreenEnabled', false);
    }
    get head() {
        throw new Error('DocumentIsolate.head getter not implemented');
    }
    get hidden() {
        return exports.awaitedHandler.getProperty(this, 'hidden', false);
    }
    get images() {
        throw new Error('DocumentIsolate.images getter not implemented');
    }
    get implementation() {
        throw new Error('DocumentIsolate.implementation getter not implemented');
    }
    get lastModified() {
        return exports.awaitedHandler.getProperty(this, 'lastModified', false);
    }
    get links() {
        throw new Error('DocumentIsolate.links getter not implemented');
    }
    get location() {
        throw new Error('DocumentIsolate.location getter not implemented');
    }
    get plugins() {
        throw new Error('DocumentIsolate.plugins getter not implemented');
    }
    get readyState() {
        return exports.awaitedHandler.getProperty(this, 'readyState', false);
    }
    get referrer() {
        return exports.awaitedHandler.getProperty(this, 'referrer', false);
    }
    get scripts() {
        throw new Error('DocumentIsolate.scripts getter not implemented');
    }
    get scrollingElement() {
        throw new Error('DocumentIsolate.scrollingElement getter not implemented');
    }
    get title() {
        return exports.awaitedHandler.getProperty(this, 'title', false);
    }
    get visibilityState() {
        return exports.awaitedHandler.getProperty(this, 'visibilityState', false);
    }
    // methods
    exitFullscreen() {
        return exports.awaitedHandler.runMethod(this, 'exitFullscreen', []);
    }
    exitPointerLock() {
        return exports.awaitedHandler.runMethod(this, 'exitPointerLock', []);
    }
    getElementsByClassName(classNames) {
        throw new Error('DocumentIsolate.getElementsByClassName not implemented');
    }
    getElementsByName(elementName) {
        throw new Error('DocumentIsolate.getElementsByName not implemented');
    }
    getElementsByTagName(qualifiedName) {
        throw new Error('DocumentIsolate.getElementsByTagName not implemented');
    }
    getElementsByTagNameNS(namespace, localName) {
        throw new Error('DocumentIsolate.getElementsByTagNameNS not implemented');
    }
    hasFocus() {
        return exports.awaitedHandler.runMethod(this, 'hasFocus', []);
    }
}
exports.default = DocumentIsolate;
exports.DocumentIsolatePropertyKeys = ['URL', 'anchors', 'body', 'characterSet', 'compatMode', 'contentType', 'cookie', 'designMode', 'dir', 'doctype', 'documentElement', 'documentURI', 'domain', 'embeds', 'featurePolicy', 'forms', 'fullscreenEnabled', 'head', 'hidden', 'images', 'implementation', 'lastModified', 'links', 'location', 'plugins', 'readyState', 'referrer', 'scripts', 'scrollingElement', 'title', 'visibilityState'];
exports.DocumentIsolateConstantKeys = [];
//# sourceMappingURL=DocumentIsolate.js.map