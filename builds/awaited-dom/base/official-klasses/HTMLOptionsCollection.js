"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLOptionsCollectionConstantKeys = exports.HTMLOptionsCollectionPropertyKeys = exports.HTMLOptionsCollectionGenerator = exports.awaitedHandler = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const inspectInstanceProperties_1 = __importDefault(require("../inspectInstanceProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const HTMLCollection_1 = require("./HTMLCollection");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLOptionsCollection', exports.getState, exports.setState);
function HTMLOptionsCollectionGenerator(HTMLCollection) {
    return class HTMLOptionsCollection extends HTMLCollection {
        constructor() {
            super();
        }
        [Symbol.for('nodejs.util.inspect.custom')]() {
            return inspectInstanceProperties_1.default(this, exports.HTMLOptionsCollectionPropertyKeys, exports.HTMLOptionsCollectionConstantKeys);
        }
    };
}
exports.HTMLOptionsCollectionGenerator = HTMLOptionsCollectionGenerator;
exports.HTMLOptionsCollectionPropertyKeys = [...HTMLCollection_1.HTMLCollectionPropertyKeys];
exports.HTMLOptionsCollectionConstantKeys = [...HTMLCollection_1.HTMLCollectionConstantKeys];
//# sourceMappingURL=HTMLOptionsCollection.js.map