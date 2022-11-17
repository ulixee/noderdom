"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowRootConstantKeys = exports.ShadowRootPropertyKeys = exports.ShadowRootGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const ClassMixer_1 = __importDefault(require("../ClassMixer"));
const DocumentFragment_1 = require("./DocumentFragment");
const DocumentOrShadowRoot_1 = require("../official-mixins/DocumentOrShadowRoot");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('ShadowRoot', exports.getState, exports.setState);
function ShadowRootGenerator(DocumentFragment, DocumentOrShadowRoot) {
    const Parent = (0, ClassMixer_1.default)(DocumentFragment, [DocumentOrShadowRoot]);
    return class ShadowRoot extends Parent {
        constructor() {
            super();
        }
        // properties
        get delegatesFocus() {
            return exports.awaitedHandler.getProperty(this, 'delegatesFocus', false);
        }
        get host() {
            throw new Error('ShadowRoot.host getter not implemented');
        }
        get innerHTML() {
            return exports.awaitedHandler.getProperty(this, 'innerHTML', false);
        }
        get mode() {
            return exports.awaitedHandler.getProperty(this, 'mode', false);
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return (0, inspectInstanceProperties_1.default)(this, exports.ShadowRootPropertyKeys, exports.ShadowRootConstantKeys);
        }
    };
}
exports.ShadowRootGenerator = ShadowRootGenerator;
exports.ShadowRootPropertyKeys = [...DocumentFragment_1.DocumentFragmentPropertyKeys, ...DocumentOrShadowRoot_1.DocumentOrShadowRootPropertyKeys, 'delegatesFocus', 'host', 'innerHTML', 'mode'];
exports.ShadowRootConstantKeys = [...DocumentFragment_1.DocumentFragmentConstantKeys, ...DocumentOrShadowRoot_1.DocumentOrShadowRootConstantKeys];
//# sourceMappingURL=ShadowRoot.js.map