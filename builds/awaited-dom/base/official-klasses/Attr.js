"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttrConstantKeys = exports.AttrPropertyKeys = exports.AttrGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const Node_1 = require("./Node");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('Attr', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function AttrGenerator(Node) {
    return class Attr extends Node {
        constructor() {
            super();
            (0, exports.setState)(this, {
                createInstanceName: 'createAttr',
            });
        }
        // properties
        get localName() {
            return exports.awaitedHandler.getProperty(this, 'localName', false);
        }
        get name() {
            return exports.awaitedHandler.getProperty(this, 'name', false);
        }
        get namespaceURI() {
            return exports.awaitedHandler.getProperty(this, 'namespaceURI', true);
        }
        get ownerElement() {
            throw new Error('Attr.ownerElement getter not implemented');
        }
        get prefix() {
            return exports.awaitedHandler.getProperty(this, 'prefix', true);
        }
        get specified() {
            return exports.awaitedHandler.getProperty(this, 'specified', false);
        }
        get value() {
            return exports.awaitedHandler.getProperty(this, 'value', false);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.AttrPropertyKeys, exports.AttrConstantKeys);
        }
    };
}
exports.AttrGenerator = AttrGenerator;
exports.AttrPropertyKeys = [...Node_1.NodePropertyKeys, 'localName', 'name', 'namespaceURI', 'ownerElement', 'prefix', 'specified', 'value'];
exports.AttrConstantKeys = [...Node_1.NodeConstantKeys];
//# sourceMappingURL=Attr.js.map