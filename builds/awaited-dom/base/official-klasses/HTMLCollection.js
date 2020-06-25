"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const HTMLCollectionBase_1 = require("./HTMLCollectionBase");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLCollection', exports.getState, exports.setState);
function HTMLCollectionGenerator(HTMLCollectionBase) {
    return class HTMLCollection extends HTMLCollectionBase {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLCollectionConstantKeys, exports.HTMLCollectionPropertyKeys);
        }
        // methods
        namedItem(name) {
            throw new Error('HTMLCollection.namedItem not implemented');
        }
    };
}
exports.HTMLCollectionGenerator = HTMLCollectionGenerator;
exports.HTMLCollectionPropertyKeys = [...HTMLCollectionBase_1.HTMLCollectionBasePropertyKeys];
exports.HTMLCollectionConstantKeys = [...HTMLCollectionBase_1.HTMLCollectionBaseConstantKeys];
//# sourceMappingURL=HTMLCollection.js.map