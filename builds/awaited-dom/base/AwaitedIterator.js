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
        const iterator = this.iterateNodePointers(nodePointerInstance);
        const result = [];
        let next;
        while ((next = iterator.next())) {
            if (next.done)
                break;
            result.push(next.value);
        }
        return result;
    }
    iterateNodePointers(instance) {
        const state = this.getState(instance);
        const awaitedPath = state.awaitedPath;
        const nodePointer = this.nodeFactory.getNodePointer(instance);
        if (!nodePointer) {
            throw new Error(`Please await this iterator`);
        }
        if (!nodePointer.iterableItems) {
            throw new Error(`Please add an await to ${awaitedPath.hasNodeId ? 're-' : ''}run this iterator`);
        }
        let index = 0;
        const defaultCreateChild = AwaitedIterator.creators[state.createIterableName];
        return {
            next: () => {
                if (index < nodePointer.iterableItems.length) {
                    const value = nodePointer.iterableItems[index];
                    index += 1;
                    if (!nodePointer.iterableIsNodePointers) {
                        return { value: value, done: false };
                    }
                    else {
                        const { type, id } = value;
                        let createChild = defaultCreateChild;
                        if (type) {
                            const dynamicCreator = AwaitedIterator.creators[`create${type}`];
                            if (dynamicCreator)
                                createChild = dynamicCreator;
                        }
                        const awaitedOptions = state.awaitedOptions;
                        const childPath = awaitedPath.withNodeId(instance, id);
                        const child = createChild(childPath, awaitedOptions);
                        this.setState(child, {
                            nodePointer: value,
                        });
                        return { value: child, done: false };
                    }
                }
                else {
                    // clear out iterable ids
                    nodePointer.iterableItems = undefined;
                    return { value: undefined, done: true };
                }
            },
        };
    }
}
exports.default = AwaitedIterator;
AwaitedIterator.creators = require('../impl/create');
//# sourceMappingURL=AwaitedIterator.js.map