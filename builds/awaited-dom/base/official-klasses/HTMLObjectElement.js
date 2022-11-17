"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLObjectElementConstantKeys = exports.HTMLObjectElementPropertyKeys = exports.HTMLObjectElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLObjectElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLObjectElementGenerator(HTMLElement) {
    return class HTMLObjectElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLObjectElement',
            });
        }
        // properties
        get align() {
            return exports.awaitedHandler.getProperty(this, 'align', false);
        }
        get archive() {
            return exports.awaitedHandler.getProperty(this, 'archive', false);
        }
        get border() {
            return exports.awaitedHandler.getProperty(this, 'border', false);
        }
        get code() {
            return exports.awaitedHandler.getProperty(this, 'code', false);
        }
        get codeBase() {
            return exports.awaitedHandler.getProperty(this, 'codeBase', false);
        }
        get codeType() {
            return exports.awaitedHandler.getProperty(this, 'codeType', false);
        }
        get contentDocument() {
            throw new Error('HTMLObjectElement.contentDocument getter not implemented');
        }
        get data() {
            return exports.awaitedHandler.getProperty(this, 'data', false);
        }
        get declare() {
            return exports.awaitedHandler.getProperty(this, 'declare', false);
        }
        get form() {
            throw new Error('HTMLObjectElement.form getter not implemented');
        }
        get height() {
            return exports.awaitedHandler.getProperty(this, 'height', false);
        }
        get hspace() {
            return exports.awaitedHandler.getProperty(this, 'hspace', false);
        }
        get name() {
            return exports.awaitedHandler.getProperty(this, 'name', false);
        }
        get standby() {
            return exports.awaitedHandler.getProperty(this, 'standby', false);
        }
        get type() {
            return exports.awaitedHandler.getProperty(this, 'type', false);
        }
        get useMap() {
            return exports.awaitedHandler.getProperty(this, 'useMap', false);
        }
        get validationMessage() {
            return exports.awaitedHandler.getProperty(this, 'validationMessage', false);
        }
        get validity() {
            return exports.awaitedHandler.getProperty(this, 'validity', false);
        }
        get vspace() {
            return exports.awaitedHandler.getProperty(this, 'vspace', false);
        }
        get width() {
            return exports.awaitedHandler.getProperty(this, 'width', false);
        }
        get willValidate() {
            return exports.awaitedHandler.getProperty(this, 'willValidate', false);
        }
        // methods
        checkValidity() {
            return exports.awaitedHandler.runMethod(this, 'checkValidity', []);
        }
        reportValidity() {
            return exports.awaitedHandler.runMethod(this, 'reportValidity', []);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLObjectElementPropertyKeys, exports.HTMLObjectElementConstantKeys);
        }
    };
}
exports.HTMLObjectElementGenerator = HTMLObjectElementGenerator;
exports.HTMLObjectElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'align', 'archive', 'border', 'code', 'codeBase', 'codeType', 'contentDocument', 'data', 'declare', 'form', 'height', 'hspace', 'name', 'standby', 'type', 'useMap', 'validationMessage', 'validity', 'vspace', 'width', 'willValidate'];
exports.HTMLObjectElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLObjectElement.js.map