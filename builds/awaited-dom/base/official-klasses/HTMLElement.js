"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLElementConstantKeys = exports.HTMLElementPropertyKeys = exports.HTMLElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const Element_1 = require("./Element");
const ElementCSSInlineStyle_1 = require("../official-mixins/ElementCSSInlineStyle");
const ElementContentEditable_1 = require("../official-mixins/ElementContentEditable");
const HTMLOrSVGElement_1 = require("../official-mixins/HTMLOrSVGElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLElementGenerator(Element, ElementCSSInlineStyle, ElementContentEditable, HTMLOrSVGElement) {
    const Parent = (0, ClassMixer_1.default)(Element, [ElementCSSInlineStyle, ElementContentEditable, HTMLOrSVGElement]);
    return class HTMLElement extends Parent {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLElement',
            });
        }
        // properties
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
            throw new Error('HTMLElement.offsetParent getter not implemented');
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
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLElementPropertyKeys, exports.HTMLElementConstantKeys);
        }
    };
}
exports.HTMLElementGenerator = HTMLElementGenerator;
exports.HTMLElementPropertyKeys = [...Element_1.ElementPropertyKeys, ...ElementCSSInlineStyle_1.ElementCSSInlineStylePropertyKeys, ...ElementContentEditable_1.ElementContentEditablePropertyKeys, ...HTMLOrSVGElement_1.HTMLOrSVGElementPropertyKeys, 'accessKey', 'autoCapitalize', 'dir', 'draggable', 'hidden', 'inert', 'innerText', 'lang', 'offsetHeight', 'offsetLeft', 'offsetParent', 'offsetTop', 'offsetWidth', 'spellcheck', 'title', 'translate'];
exports.HTMLElementConstantKeys = [...Element_1.ElementConstantKeys, ...ElementCSSInlineStyle_1.ElementCSSInlineStyleConstantKeys, ...ElementContentEditable_1.ElementContentEditableConstantKeys, ...HTMLOrSVGElement_1.HTMLOrSVGElementConstantKeys];
//# sourceMappingURL=HTMLElement.js.map