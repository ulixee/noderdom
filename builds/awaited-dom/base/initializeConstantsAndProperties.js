"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function initializeConstantsAndProperties(instance, constantKeys, propertyKeys) {
    constantKeys.forEach(key => {
        Object.defineProperty(instance, key, { enumerable: false });
    });
    const prototypesByChild = getPrototypesByChild(instance);
    propertyKeys.forEach(key => {
        const propertyDescriptor = getPropertyDescriptor(instance, key, prototypesByChild);
        propertyDescriptor.enumerable = true;
        Object.defineProperty(instance, key, propertyDescriptor);
    });
}
exports.default = initializeConstantsAndProperties;
function getPrototypesByChild(instance) {
    const prototypesByChild = new Map();
    const instancePrototype = Object.getPrototypeOf(instance);
    prototypesByChild.set(instance, instancePrototype);
    let childPrototype = instancePrototype;
    let parentPrototype;
    do {
        parentPrototype = Object.getPrototypeOf(childPrototype);
        if (!parentPrototype)
            break;
        prototypesByChild.set(childPrototype, parentPrototype);
    } while ((childPrototype = parentPrototype)); // tslint:disable-line:no-conditional-assignment
    return prototypesByChild;
}
function getPropertyDescriptor(instance, key, prototypesByChild) {
    let prototype = prototypesByChild.get(instance);
    do {
        const propertyDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
        if (propertyDescriptor)
            return propertyDescriptor;
    } while ((prototype = prototypesByChild.get(prototype))); // tslint:disable-line:no-conditional-assignment
}
//# sourceMappingURL=initializeConstantsAndProperties.js.map