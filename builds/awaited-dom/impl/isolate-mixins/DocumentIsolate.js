"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const DocumentIsolate_1 = __importDefault(require("../../base/isolate-mixins/DocumentIsolate"));
const create_1 = require("../create");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
class DocumentIsolate extends DocumentIsolate_1.default {
    get anchors() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addProperty(this, 'anchors'), awaitedOptions);
    }
    get body() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLElement)(awaitedPath.addProperty(this, 'body'), awaitedOptions);
    }
    get doctype() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createDocumentType)(awaitedPath.addProperty(this, 'doctype'), awaitedOptions);
    }
    get documentElement() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addProperty(this, 'documentElement'), awaitedOptions);
    }
    get embeds() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addProperty(this, 'embeds'), awaitedOptions);
    }
    get featurePolicy() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createFeaturePolicy)(awaitedPath.addProperty(this, 'featurePolicy'), awaitedOptions);
    }
    get forms() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addProperty(this, 'forms'), awaitedOptions);
    }
    get head() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createHTMLHeadElement)(awaitedPath.addProperty(this, 'head'), awaitedOptions);
    }
    get images() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addProperty(this, 'images'), awaitedOptions);
    }
    get implementation() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createDOMImplementation)(awaitedPath.addProperty(this, 'implementation'), awaitedOptions);
    }
    get links() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addProperty(this, 'links'), awaitedOptions);
    }
    get location() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createLocation)(awaitedPath.addProperty(this, 'location'), awaitedOptions);
    }
    get plugins() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addProperty(this, 'plugins'), awaitedOptions);
    }
    get scripts() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addProperty(this, 'scripts'), awaitedOptions);
    }
    get scrollingElement() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addProperty(this, 'scrollingElement'), awaitedOptions);
    }
    // methods
    getElementsByClassName(classNames) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addMethod(this, 'getElementsByClassName', classNames), awaitedOptions);
    }
    getElementsByName(elementName) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperNodeList)(awaitedPath.addMethod(this, 'getElementsByName', elementName), awaitedOptions);
    }
    getElementsByTagName(qualifiedName) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addMethod(this, 'getElementsByTagName', qualifiedName), awaitedOptions);
    }
    getElementsByTagNameNS(namespace, localName) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperHTMLCollection)(awaitedPath.addMethod(this, 'getElementsByTagNameNS', namespace, localName), awaitedOptions);
    }
}
exports.default = DocumentIsolate;
//# sourceMappingURL=DocumentIsolate.js.map