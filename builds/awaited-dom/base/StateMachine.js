"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalMap = new WeakMap();
const proxyMap = new WeakMap();
function StateMachine() {
    function recordProxy(proxy, instance) {
        proxyMap.set(proxy, instance);
    }
    function setState(instance, properties) {
        if (proxyMap.has(instance)) {
            instance = proxyMap.get(instance);
        }
        const object = getState(instance);
        Object.entries(properties).forEach(([key, value]) => {
            object[key] = value;
        });
        globalMap.set(instance, object);
    }
    function getState(instance) {
        if (proxyMap.has(instance)) {
            instance = proxyMap.get(instance);
        }
        return globalMap.get(instance) || {};
    }
    return { recordProxy, getState, setState };
}
exports.default = StateMachine;
//# sourceMappingURL=StateMachine.js.map