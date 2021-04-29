"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NodeFactory_1 = __importDefault(require("./NodeFactory"));
class AwaitedIterator {
    constructor(getState, setState, awaitedHandler) {
        this.getState = getState;
        this.setState = setState;
        this.nodeFactory = new NodeFactory_1.default(getState, setState, awaitedHandler);
    }
    async load(instance) {
        const nodePointerInstance = await this.nodeFactory.createInstanceWithNodePointer(instance);
        return [...this.iterateNodePointers(nodePointerInstance)];
    }
    *iterateNodePointers(instance) {
        const state = this.getState(instance);
        const awaitedPath = state.awaitedPath;
        const nodePointer = this.nodeFactory.getNodePointer(instance);
        if (!nodePointer) {
            throw new Error(`Please await this iterator`);
        }
        if (!nodePointer.iterableItems) {
            throw new Error(`Please add an await to ${awaitedPath.hasNodeId ? 're-' : ''}run this iterator`);
        }
        for (const item of nodePointer.iterableItems) {
            if (!nodePointer.iterableIsState) {
                yield item;
                continue;
            }
            const itemState = item;
            const { type, id } = itemState;
            let createChild = AwaitedIterator.creators[state.createIterableName];
            if (type) {
                const dynamicCreator = AwaitedIterator.creators[`create${type}`];
                if (dynamicCreator)
                    createChild = dynamicCreator;
            }
            const awaitedOptions = state.awaitedOptions;
            const childPath = awaitedPath.withNodeId(instance, id);
            const child = createChild(childPath, awaitedOptions);
            this.setState(child, {
                nodePointer: itemState,
            });
            yield child;
        }
        // clear out iterable ids
        nodePointer.iterableItems = undefined;
    }
}
exports.default = AwaitedIterator;
AwaitedIterator.creators = require('../impl/create');
//# sourceMappingURL=AwaitedIterator.js.map