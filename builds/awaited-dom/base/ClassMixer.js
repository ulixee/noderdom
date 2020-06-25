"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:ban-types
function ClassMixer(klass, otherKlasses) {
    const isClassable = (element) => typeof element === 'function';
    if (!Array.isArray(otherKlasses)) {
        throw new Error('2nd argument must be an array');
    }
    if (!otherKlasses || otherKlasses.length === 0) {
        throw new Error('2nd argument cannot be an empty array');
    }
    otherKlasses.forEach(otherKlass => {
        if (!otherKlass) {
            throw new Error(`2nd argument has has an empty item: ${otherKlasses.map(m => !!m)}`);
        }
        if (!isClassable(otherKlass)) {
            throw new Error(`${otherKlass.name} is not a Classible mixin: ${otherKlass}`);
        }
    });
    return applyMixins(cloneClass(klass), otherKlasses);
}
exports.default = ClassMixer;
function cloneClass(klass) {
    return class extends klass {
    };
}
function applyMixins(klass, otherKlasses) {
    otherKlasses.forEach(otherKlass => {
        let currentPrototype = otherKlass.prototype;
        let nextPrototype;
        const props = new Set();
        do {
            nextPrototype = Object.getPrototypeOf(currentPrototype);
            if (!nextPrototype)
                break;
            Object.getOwnPropertyNames(currentPrototype).forEach(name => {
                if (name === 'constructor')
                    return;
                if (props.has(name))
                    return;
                const propertyDescriptor = Object.getOwnPropertyDescriptor(currentPrototype, name);
                Object.defineProperty(klass.prototype, name, propertyDescriptor);
                props.add(name);
            });
        } while ((currentPrototype = nextPrototype)); // tslint:disable-line:no-conditional-assignment
    });
    return klass;
}
//# sourceMappingURL=ClassMixer.js.map