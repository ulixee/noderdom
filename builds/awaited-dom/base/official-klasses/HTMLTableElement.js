"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTableElementConstantKeys = exports.HTMLTableElementPropertyKeys = exports.HTMLTableElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLTableElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLTableElementGenerator(HTMLElement) {
    return class HTMLTableElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLTableElement',
            });
        }
        // properties
        get align() {
            return exports.awaitedHandler.getProperty(this, 'align', false);
        }
        get bgColor() {
            return exports.awaitedHandler.getProperty(this, 'bgColor', false);
        }
        get border() {
            return exports.awaitedHandler.getProperty(this, 'border', false);
        }
        get caption() {
            throw new Error('HTMLTableElement.caption getter not implemented');
        }
        get cellPadding() {
            return exports.awaitedHandler.getProperty(this, 'cellPadding', false);
        }
        get cellSpacing() {
            return exports.awaitedHandler.getProperty(this, 'cellSpacing', false);
        }
        get frame() {
            return exports.awaitedHandler.getProperty(this, 'frame', false);
        }
        get rows() {
            throw new Error('HTMLTableElement.rows getter not implemented');
        }
        get rules() {
            return exports.awaitedHandler.getProperty(this, 'rules', false);
        }
        get summary() {
            return exports.awaitedHandler.getProperty(this, 'summary', false);
        }
        get tBodies() {
            throw new Error('HTMLTableElement.tBodies getter not implemented');
        }
        get tFoot() {
            throw new Error('HTMLTableElement.tFoot getter not implemented');
        }
        get tHead() {
            throw new Error('HTMLTableElement.tHead getter not implemented');
        }
        get width() {
            return exports.awaitedHandler.getProperty(this, 'width', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLTableElementPropertyKeys, exports.HTMLTableElementConstantKeys);
        }
    };
}
exports.HTMLTableElementGenerator = HTMLTableElementGenerator;
exports.HTMLTableElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'align', 'bgColor', 'border', 'caption', 'cellPadding', 'cellSpacing', 'frame', 'rows', 'rules', 'summary', 'tBodies', 'tFoot', 'tHead', 'width'];
exports.HTMLTableElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLTableElement.js.map