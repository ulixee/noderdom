"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperDocumentConstantKeys = exports.SuperDocumentPropertyKeys = exports.SuperDocumentGenerator = exports.nodeAttacher = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const NodeAttacher_1 = __importDefault(require("../NodeAttacher"));
const NodeIsolate_1 = require("../isolate-mixins/NodeIsolate");
const NonElementParentNode_1 = require("../official-mixins/NonElementParentNode");
const ParentNode_1 = require("../official-mixins/ParentNode");
const XPathEvaluatorBase_1 = require("../official-mixins/XPathEvaluatorBase");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('SuperDocument', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function SuperDocumentGenerator(NodeIsolate, NonElementParentNode, ParentNode, XPathEvaluatorBase) {
    const Parent = ClassMixer_1.default(NodeIsolate, [NonElementParentNode, ParentNode, XPathEvaluatorBase]);
    return class SuperDocument extends Parent {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.SuperDocumentConstantKeys, exports.SuperDocumentPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createSuperDocument',
            });
        }
        // properties
        get URL() {
            return exports.awaitedHandler.getProperty(this, 'URL', false);
        }
        get anchors() {
            throw new Error('SuperDocument.anchors getter not implemented');
        }
        get body() {
            throw new Error('SuperDocument.body getter not implemented');
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
            throw new Error('SuperDocument.doctype getter not implemented');
        }
        get documentElement() {
            throw new Error('SuperDocument.documentElement getter not implemented');
        }
        get documentURI() {
            return exports.awaitedHandler.getProperty(this, 'documentURI', false);
        }
        get domain() {
            return exports.awaitedHandler.getProperty(this, 'domain', false);
        }
        get embeds() {
            throw new Error('SuperDocument.embeds getter not implemented');
        }
        get featurePolicy() {
            throw new Error('SuperDocument.featurePolicy getter not implemented');
        }
        get forms() {
            throw new Error('SuperDocument.forms getter not implemented');
        }
        get fullscreenEnabled() {
            return exports.awaitedHandler.getProperty(this, 'fullscreenEnabled', false);
        }
        get head() {
            throw new Error('SuperDocument.head getter not implemented');
        }
        get hidden() {
            return exports.awaitedHandler.getProperty(this, 'hidden', false);
        }
        get images() {
            throw new Error('SuperDocument.images getter not implemented');
        }
        get implementation() {
            throw new Error('SuperDocument.implementation getter not implemented');
        }
        get lastModified() {
            return exports.awaitedHandler.getProperty(this, 'lastModified', false);
        }
        get links() {
            throw new Error('SuperDocument.links getter not implemented');
        }
        get location() {
            throw new Error('SuperDocument.location getter not implemented');
        }
        get plugins() {
            throw new Error('SuperDocument.plugins getter not implemented');
        }
        get readyState() {
            return exports.awaitedHandler.getProperty(this, 'readyState', false);
        }
        get referrer() {
            return exports.awaitedHandler.getProperty(this, 'referrer', false);
        }
        get scripts() {
            throw new Error('SuperDocument.scripts getter not implemented');
        }
        get scrollingElement() {
            throw new Error('SuperDocument.scrollingElement getter not implemented');
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
            throw new Error('SuperDocument.getElementsByClassName not implemented');
        }
        getElementsByName(elementName) {
            throw new Error('SuperDocument.getElementsByName not implemented');
        }
        getElementsByTagName(qualifiedName) {
            throw new Error('SuperDocument.getElementsByTagName not implemented');
        }
        getElementsByTagNameNS(namespace, localName) {
            throw new Error('SuperDocument.getElementsByTagNameNS not implemented');
        }
        hasFocus() {
            return exports.awaitedHandler.runMethod(this, 'hasFocus', []);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
    };
}
exports.SuperDocumentGenerator = SuperDocumentGenerator;
exports.SuperDocumentPropertyKeys = [...NodeIsolate_1.NodeIsolatePropertyKeys, ...NonElementParentNode_1.NonElementParentNodePropertyKeys, ...ParentNode_1.ParentNodePropertyKeys, ...XPathEvaluatorBase_1.XPathEvaluatorBasePropertyKeys, 'URL', 'anchors', 'body', 'characterSet', 'compatMode', 'contentType', 'cookie', 'designMode', 'dir', 'doctype', 'documentElement', 'documentURI', 'domain', 'embeds', 'featurePolicy', 'forms', 'fullscreenEnabled', 'head', 'hidden', 'images', 'implementation', 'lastModified', 'links', 'location', 'plugins', 'readyState', 'referrer', 'scripts', 'scrollingElement', 'title', 'visibilityState'];
exports.SuperDocumentConstantKeys = [...NodeIsolate_1.NodeIsolateConstantKeys, ...NonElementParentNode_1.NonElementParentNodeConstantKeys, ...ParentNode_1.ParentNodeConstantKeys, ...XPathEvaluatorBase_1.XPathEvaluatorBaseConstantKeys];
//# sourceMappingURL=SuperDocument.js.map