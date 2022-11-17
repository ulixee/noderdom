"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const StateMachine_1 = __importDefault(require("../../base/StateMachine"));
const SuperHTMLCollection_1 = require("../../base/super-klasses/SuperHTMLCollection");
const create_1 = require("../create");
const HTMLCollectionBaseIsolate_1 = __importDefault(require("../isolate-mixins/HTMLCollectionBaseIsolate"));
const HTMLCollectionIsolate_1 = __importDefault(require("../isolate-mixins/HTMLCollectionIsolate"));
const HTMLOptionsCollectionIsolate_1 = __importDefault(require("../isolate-mixins/HTMLOptionsCollectionIsolate"));
// tslint:disable:variable-name
_a = (0, StateMachine_1.default)(), exports.getState = _a.getState, exports.setState = _a.setState;
const SuperHTMLCollectionBaseClass = (0, SuperHTMLCollection_1.SuperHTMLCollectionGenerator)(HTMLCollectionBaseIsolate_1.default, HTMLCollectionIsolate_1.default, HTMLOptionsCollectionIsolate_1.default);
class SuperHTMLCollection extends SuperHTMLCollectionBaseClass {
    constructor() {
        super();
    }
    // methods
    namedItem(name) {
        const { awaitedPath, awaitedOptions } = (0, exports.getState)(this);
        return (0, create_1.createSuperElement)(awaitedPath.addMethod(this, 'namedItem', name), awaitedOptions);
    }
}
exports.default = SuperHTMLCollection;
//# sourceMappingURL=SuperHTMLCollection.js.map