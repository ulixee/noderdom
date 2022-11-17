"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTableSectionElementConstantKeys = exports.HTMLTableSectionElementPropertyKeys = exports.HTMLTableSectionElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLTableSectionElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLTableSectionElementGenerator(HTMLElement) {
    return class HTMLTableSectionElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLTableSectionElement',
            });
        }
        // properties
        get align() {
            return exports.awaitedHandler.getProperty(this, 'align', false);
        }
        get ch() {
            return exports.awaitedHandler.getProperty(this, 'ch', false);
        }
        get chOff() {
            return exports.awaitedHandler.getProperty(this, 'chOff', false);
        }
        get rows() {
            throw new Error('HTMLTableSectionElement.rows getter not implemented');
        }
        get vAlign() {
            return exports.awaitedHandler.getProperty(this, 'vAlign', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLTableSectionElementPropertyKeys, exports.HTMLTableSectionElementConstantKeys);
        }
    };
}
exports.HTMLTableSectionElementGenerator = HTMLTableSectionElementGenerator;
exports.HTMLTableSectionElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'align', 'ch', 'chOff', 'rows', 'vAlign'];
exports.HTMLTableSectionElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLTableSectionElement.js.map