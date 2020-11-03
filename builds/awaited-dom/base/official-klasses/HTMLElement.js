"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLElementConstantKeys = exports.HTMLElementPropertyKeys = exports.HTMLElementGenerator = exports.nodeAttacher = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const NodeAttacher_1 = __importDefault(require("../NodeAttacher"));
const Element_1 = require("./Element");
const HTMLOrSVGElement_1 = require("../official-mixins/HTMLOrSVGElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLElement', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLElementGenerator(Element, HTMLOrSVGElement) {
    const Parent = ClassMixer_1.default(Element, [HTMLOrSVGElement]);
    return class HTMLElement extends Parent {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLElementConstantKeys, exports.HTMLElementPropertyKeys);
            exports.setState(this, {
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
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
    };
}
exports.HTMLElementGenerator = HTMLElementGenerator;
exports.HTMLElementPropertyKeys = [...Element_1.ElementPropertyKeys, ...HTMLOrSVGElement_1.HTMLOrSVGElementPropertyKeys, 'accessKey', 'autoCapitalize', 'dir', 'draggable', 'hidden', 'inert', 'innerText', 'lang', 'offsetHeight', 'offsetLeft', 'offsetParent', 'offsetTop', 'offsetWidth', 'spellcheck', 'title', 'translate'];
exports.HTMLElementConstantKeys = [...Element_1.ElementConstantKeys, ...HTMLOrSVGElement_1.HTMLOrSVGElementConstantKeys];
//# sourceMappingURL=HTMLElement.js.map