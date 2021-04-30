"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLLegendElementConstantKeys = exports.HTMLLegendElementPropertyKeys = exports.HTMLLegendElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLLegendElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLLegendElementGenerator(HTMLElement) {
    return class HTMLLegendElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLLegendElementConstantKeys, exports.HTMLLegendElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLLegendElement',
            });
        }
        // properties
        get align() {
            return exports.awaitedHandler.getProperty(this, 'align', false);
        }
        get form() {
            throw new Error('HTMLLegendElement.form getter not implemented');
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
    };
}
exports.HTMLLegendElementGenerator = HTMLLegendElementGenerator;
exports.HTMLLegendElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'align', 'form'];
exports.HTMLLegendElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLLegendElement.js.map