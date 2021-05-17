"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setStorageSymbol = void 0;
let stateStorageSymbol = Symbol.for('noderdom/StateMachine');
function setStorageSymbol(storageSymbol) {
    stateStorageSymbol = storageSymbol;
}
exports.setStorageSymbol = setStorageSymbol;
function StateMachine() {
    function setState(instance, properties) {
        const object = getState(instance);
        Object.assign(object, properties);
        instance[stateStorageSymbol] = object;
    }
    function getState(instance) {
        if (!instance)
            return {};
        return instance[stateStorageSymbol] || {};
    }
    return { getState, setState };
}
exports.default = StateMachine;
//# sourceMappingURL=StateMachine.js.map