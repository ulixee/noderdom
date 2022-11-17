"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTableRowElementConstantKeys = exports.HTMLTableRowElementPropertyKeys = exports.HTMLTableRowElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLTableRowElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLTableRowElementGenerator(HTMLElement) {
    return class HTMLTableRowElement extends HTMLElement {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createHTMLTableRowElement',
            });
        }
        // properties
        get align() {
            return exports.awaitedHandler.getProperty(this, 'align', false);
        }
        get bgColor() {
            return exports.awaitedHandler.getProperty(this, 'bgColor', false);
        }
        get cells() {
            throw new Error('HTMLTableRowElement.cells getter not implemented');
        }
        get ch() {
            return exports.awaitedHandler.getProperty(this, 'ch', false);
        }
        get chOff() {
            return exports.awaitedHandler.getProperty(this, 'chOff', false);
        }
        get rowIndex() {
            return exports.awaitedHandler.getProperty(this, 'rowIndex', false);
        }
        get sectionRowIndex() {
            return exports.awaitedHandler.getProperty(this, 'sectionRowIndex', false);
        }
        get vAlign() {
            return exports.awaitedHandler.getProperty(this, 'vAlign', false);
        }
        // methods
        deleteCell(index) {
            return exports.awaitedHandler.runMethod(this, 'deleteCell', [index]);
        }
        insertCell(index) {
            throw new Error('HTMLTableRowElement.insertCell not implemented');
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.HTMLTableRowElementPropertyKeys, exports.HTMLTableRowElementConstantKeys);
        }
    };
}
exports.HTMLTableRowElementGenerator = HTMLTableRowElementGenerator;
exports.HTMLTableRowElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'align', 'bgColor', 'cells', 'ch', 'chOff', 'rowIndex', 'sectionRowIndex', 'vAlign'];
exports.HTMLTableRowElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLTableRowElement.js.map