"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const ShadowRoot_1 = require("../../base/official-klasses/ShadowRoot");
const create_1 = require("../create");
const DocumentFragment_1 = __importDefault(require("./DocumentFragment"));
const DocumentOrShadowRoot_1 = __importDefault(require("../official-mixins/DocumentOrShadowRoot"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const ShadowRootBaseClass = (0, ShadowRoot_1.ShadowRootGenerator)(DocumentFragment_1.default, DocumentOrShadowRoot_1.default);
class ShadowRoot extends ShadowRootBaseClass {
    constructor() {
        super();
    }
    // properties
    get host() {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addProperty(this, 'host'), awaitedOptions);
    }
}
exports.default = ShadowRoot;
//# sourceMappingURL=ShadowRoot.js.map