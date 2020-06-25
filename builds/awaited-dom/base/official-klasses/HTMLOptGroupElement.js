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
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLOptGroupElement', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLOptGroupElementGenerator(HTMLElement) {
    return class HTMLOptGroupElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLOptGroupElementConstantKeys, exports.HTMLOptGroupElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLOptGroupElement',
            });
        }
        // properties
        get disabled() {
            return exports.awaitedHandler.getProperty(this, 'disabled', false);
        }
        get label() {
            return exports.awaitedHandler.getProperty(this, 'label', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
    };
}
exports.HTMLOptGroupElementGenerator = HTMLOptGroupElementGenerator;
exports.HTMLOptGroupElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'disabled', 'label'];
exports.HTMLOptGroupElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLOptGroupElement.js.map