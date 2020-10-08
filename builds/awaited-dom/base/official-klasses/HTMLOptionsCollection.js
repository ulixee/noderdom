"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const HTMLCollection_1 = require("./HTMLCollection");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLOptionsCollection', exports.getState, exports.setState);
function HTMLOptionsCollectionGenerator(HTMLCollection) {
    return class HTMLOptionsCollection extends HTMLCollection {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLOptionsCollectionConstantKeys, exports.HTMLOptionsCollectionPropertyKeys);
        }
    };
}
exports.HTMLOptionsCollectionGenerator = HTMLOptionsCollectionGenerator;
exports.HTMLOptionsCollectionPropertyKeys = [...HTMLCollection_1.HTMLCollectionPropertyKeys];
exports.HTMLOptionsCollectionConstantKeys = [...HTMLCollection_1.HTMLCollectionConstantKeys];
//# sourceMappingURL=HTMLOptionsCollection.js.map