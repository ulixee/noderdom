"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLFormElementConstantKeys = exports.HTMLFormElementPropertyKeys = exports.HTMLFormElementGenerator = exports.nodeAttacher = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeAttacher_1 = __importDefault(require("../NodeAttacher"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLFormElement', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLFormElementGenerator(HTMLElement) {
    return class HTMLFormElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLFormElementConstantKeys, exports.HTMLFormElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLFormElement',
            });
        }
        then(onfulfilled, onrejected) {
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
    };
}
exports.HTMLFormElementGenerator = HTMLFormElementGenerator;
exports.HTMLFormElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys];
exports.HTMLFormElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLFormElement.js.map