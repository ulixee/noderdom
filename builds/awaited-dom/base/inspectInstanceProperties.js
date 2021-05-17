"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protoDescriptors = new Map();
function inspectInstanceProperties(instance, propertyKeys, constantKeys) {
    const proto = Object.getPrototypeOf(instance);
    if (protoDescriptors.has(proto)) {
        Object.defineProperties(instance, protoDescriptors.get(proto));
        return instance;
    }
    const descriptors = {};
    if (constantKeys) {
        for (const key of constantKeys) {
            descriptors[key] = { enumerable: false };
        }
    }
    let parentPrototype = instance;
    do {
        const properties = Object.getOwnPropertyDescriptors(parentPrototype);
        for (const [key, propertyDescriptor] of Object.entries(properties)) {
            if (!descriptors[key] && propertyKeys.includes(key)) {
                propertyDescriptor.enumerable = true;
                descriptors[key] = propertyDescriptor;
            }
        }
        parentPrototype = Object.getPrototypeOf(parentPrototype);
    } while (parentPrototype && parentPrototype !== Object.prototype);
    Object.defineProperties(instance, descriptors);
    protoDescriptors.set(proto, descriptors);
    return instance;
}
exports.default = inspectInstanceProperties;
//# sourceMappingURL=inspectInstanceProperties.js.map