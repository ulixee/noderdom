"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTrackElementConstantKeys = exports.HTMLTrackElementPropertyKeys = exports.HTMLTrackElementGenerator = exports.nodeFactory = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const NodeFactory_1 = __importDefault(require("../NodeFactory"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLTrackElement', exports.getState, exports.setState);
exports.nodeFactory = new NodeFactory_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLTrackElementGenerator(HTMLElement) {
    var _a;
    return _a = class HTMLTrackElement extends HTMLElement {
            constructor() {
                super();
                this.ERROR = 3;
                this.LOADED = 2;
                this.LOADING = 1;
                this.NONE = 0;
                (0, exports.setState)(this, {
                    createInstanceName: 'createHTMLTrackElement',
                });
            }
            // properties
            get default() {
                return exports.awaitedHandler.getProperty(this, 'default', false);
            }
            get kind() {
                return exports.awaitedHandler.getProperty(this, 'kind', false);
            }
            get label() {
                return exports.awaitedHandler.getProperty(this, 'label', false);
            }
            get readyState() {
                return exports.awaitedHandler.getProperty(this, 'readyState', false);
            }
            get src() {
                return exports.awaitedHandler.getProperty(this, 'src', false);
            }
            get srclang() {
                return exports.awaitedHandler.getProperty(this, 'srclang', false);
            }
            get track() {
                return exports.awaitedHandler.getProperty(this, 'track', false);
            }
            then(onfulfilled, onrejected) {
                return exports.nodeFactory.createInstanceWithNodePointer(this).then(onfulfilled, onrejected);
            }
            [Symbol.for('nodejs.util.inspect.custom')]() {
                return (0, inspectInstanceProperties_1.default)(this, exports.HTMLTrackElementPropertyKeys, exports.HTMLTrackElementConstantKeys);
            }
        },
        _a.ERROR = 3,
        _a.LOADED = 2,
        _a.LOADING = 1,
        _a.NONE = 0,
        _a;
}
exports.HTMLTrackElementGenerator = HTMLTrackElementGenerator;
exports.HTMLTrackElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'default', 'kind', 'label', 'readyState', 'src', 'srclang', 'track'];
exports.HTMLTrackElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys, 'ERROR', 'LOADED', 'LOADING', 'NONE'];
//# sourceMappingURL=HTMLTrackElement.js.map