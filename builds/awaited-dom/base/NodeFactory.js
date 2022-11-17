"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NodeFactory {
    constructor(getState, setState, awaitedHandler) {
        this.getState = getState;
        this.setState = setState;
        this.awaitedHandler = awaitedHandler;
    }
    async createInstanceWithNodePointer(instance) {
        const { awaitedOptions, awaitedPath, createInstanceName } = this.getState(instance);
        const state = await this.awaitedHandler.createNodePointer(instance);
        if (!state?.id) {
            return null;
        }
        let createNewInstance = NodeFactory.instanceCreatorsByName[createInstanceName];
        if (state.type) {
            const typeCreator = NodeFactory.instanceCreatorsByName[`create${state.type}`];
            if (typeCreator)
                createNewInstance = typeCreator;
        }
        const newAwaitedPath = state?.id ? awaitedPath.withNodeId(awaitedPath.parent, state?.id) : awaitedPath;
        const newInstance = createNewInstance(newAwaitedPath, awaitedOptions);
        this.setState(newInstance, {
            nodePointer: state,
        });
        // @ts-ignore
        newInstance.toJSON = () => {
            return {
                id: state.id,
                type: state.type,
                preview: state.preview,
                ...newInstance,
            };
        };
        const thenable = newInstance;
        // return null first time to escape promise chain
        const originalThen = thenable.then;
        // @ts-ignore
        thenable.then = null;
        // relies on fact a calling promises will share the same microtask stack
        process.nextTick(() => {
            thenable.then = originalThen;
        });
        return newInstance;
    }
    getNodePointer(instance) {
        return this.getState(instance).nodePointer;
    }
}
exports.default = NodeFactory;
NodeFactory.instanceCreatorsByName = require('../impl/create');
//# sourceMappingURL=NodeFactory.js.map