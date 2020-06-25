"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NodeAttacher_1 = __importDefault(require("./NodeAttacher"));
class AwaitedIterator {
    constructor(getState, setState, awaitedHandler) {
        this.getState = getState;
        this.nodeAttacher = new NodeAttacher_1.default(getState, setState, awaitedHandler);
    }
    load(instance) {
        return __awaiter(this, void 0, void 0, function* () {
            const attachedInstance = yield this.nodeAttacher.attach(instance);
            return [...this.iterateAttached(attachedInstance)];
        });
    }
    *iterateAttached(instance) {
        const state = this.getState(instance);
        const awaitedPath = state.awaitedPath;
        const attachedState = this.nodeAttacher.getAttachedState(instance);
        if (!attachedState) {
            throw new Error(`Please await this iterator`);
        }
        if (!attachedState.iterableIsCustomType) {
            yield* this.iterateAttachedItems(instance);
            return;
        }
        const ids = attachedState.iterableIds;
        if (!ids) {
            throw new Error(`Please add an await to ${awaitedPath.hasAttachedId ? 're-' : ''}run this iterator`);
        }
        for (const id of ids) {
            const createChild = AwaitedIterator.creators[state.createIterableName];
            const awaitedOptions = state.awaitedOptions;
            const childPath = awaitedPath.withAttachedId(id);
            yield createChild(childPath, awaitedOptions);
        }
        // clear out iterable ids
        attachedState.iterableIds = undefined;
    }
    *iterateAttachedItems(instance) {
        var _a;
        const state = this.getState(instance);
        const awaitedPath = state.awaitedPath;
        const attachedState = this.nodeAttacher.getAttachedState(instance);
        const items = (_a = attachedState) === null || _a === void 0 ? void 0 : _a.iterableItems;
        if (!items) {
            throw new Error(`Please add an await to ${awaitedPath.hasAttachedId ? 're-' : ''}run this iterator`);
        }
        for (const item of items) {
            yield item;
        }
        // clear out iterable ids
        attachedState.iterableItems = undefined;
    }
}
exports.default = AwaitedIterator;
AwaitedIterator.creators = require('../impl/create');
//# sourceMappingURL=AwaitedIterator.js.map