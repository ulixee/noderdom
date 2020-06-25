"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalMap = new WeakMap();
function StateMachine() {
    function setState(instance, properties) {
        const object = getState(instance);
        Object.entries(properties).forEach(([key, value]) => {
            object[key] = value;
        });
        globalMap.set(instance, object);
    }
    function getState(instance) {
        return globalMap.get(instance) || {};
    }
    return {
        getState,
        setState,
    };
}
exports.default = StateMachine;
//# sourceMappingURL=StateMachine.js.map