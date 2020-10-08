"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeAttacher_1 = __importDefault(require("../NodeAttacher"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLLabelElement', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLLabelElementGenerator(HTMLElement) {
    return class HTMLLabelElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLLabelElementConstantKeys, exports.HTMLLabelElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLLabelElement',
            });
        }
        // properties
        get control() {
            throw new Error('HTMLLabelElement.control getter not implemented');
        }
        get form() {
            throw new Error('HTMLLabelElement.form getter not implemented');
        }
        get htmlFor() {
            return exports.awaitedHandler.getProperty(this, 'htmlFor', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
    };
}
exports.HTMLLabelElementGenerator = HTMLLabelElementGenerator;
exports.HTMLLabelElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'control', 'form', 'htmlFor'];
exports.HTMLLabelElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLLabelElement.js.map