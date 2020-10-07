"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLSelectElementConstantKeys = exports.HTMLSelectElementPropertyKeys = exports.HTMLSelectElementGenerator = exports.awaitedIterator = exports.nodeAttacher = exports.awaitedHandler = exports.recordProxy = exports.setState = exports.getState = void 0;
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
const AwaitedIterator_1 = __importDefault(require("../AwaitedIterator"));
const NodeAttacher_1 = __importDefault(require("../NodeAttacher"));
const HTMLElement_1 = require("./HTMLElement");
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('HTMLSelectElement', exports.getState, exports.setState);
exports.nodeAttacher = new NodeAttacher_1.default(exports.getState, exports.setState, exports.awaitedHandler);
exports.awaitedIterator = new AwaitedIterator_1.default(exports.getState, exports.setState, exports.awaitedHandler);
function HTMLSelectElementGenerator(HTMLElement) {
    return class HTMLSelectElement extends HTMLElement {
        constructor() {
            super();
            initializeConstantsAndProperties_1.default(this, exports.HTMLSelectElementConstantKeys, exports.HTMLSelectElementPropertyKeys);
            exports.setState(this, {
                createInstanceName: 'createHTMLSelectElement',
                createIterableName: 'createSuperElement',
            });
            // proxy supports indexed property access
            const proxy = new Proxy(this, {
                get(target, prop) {
                    if (prop in target) {
                        // @ts-ignore
                        const value = target[prop];
                        if (typeof value === 'function')
                            return value.bind(target);
                        return value;
                    }
                    // delegate to indexer property
                    if (!isNaN(prop)) {
                        const param = parseInt(prop, 10);
                        return target.item(param);
                    }
                },
            });
            exports.recordProxy(proxy, this);
            return proxy;
        }
        // properties
        get autocomplete() {
            return exports.awaitedHandler.getProperty(this, 'autocomplete', false);
        }
        get autofocus() {
            return exports.awaitedHandler.getProperty(this, 'autofocus', false);
        }
        get disabled() {
            return exports.awaitedHandler.getProperty(this, 'disabled', false);
        }
        get form() {
            throw new Error('HTMLSelectElement.form getter not implemented');
        }
        get labels() {
            throw new Error('HTMLSelectElement.labels getter not implemented');
        }
        get length() {
            return exports.awaitedHandler.getProperty(this, 'length', false);
        }
        get multiple() {
            return exports.awaitedHandler.getProperty(this, 'multiple', false);
        }
        get name() {
            return exports.awaitedHandler.getProperty(this, 'name', false);
        }
        get options() {
            throw new Error('HTMLSelectElement.options getter not implemented');
        }
        get required() {
            return exports.awaitedHandler.getProperty(this, 'required', false);
        }
        get selectedIndex() {
            return exports.awaitedHandler.getProperty(this, 'selectedIndex', false);
        }
        get selectedOptions() {
            throw new Error('HTMLSelectElement.selectedOptions getter not implemented');
        }
        get size() {
            return exports.awaitedHandler.getProperty(this, 'size', false);
        }
        get type() {
            return exports.awaitedHandler.getProperty(this, 'type', false);
        }
        get validationMessage() {
            return exports.awaitedHandler.getProperty(this, 'validationMessage', false);
        }
        get validity() {
            return exports.awaitedHandler.getProperty(this, 'validity', false);
        }
        get value() {
            return exports.awaitedHandler.getProperty(this, 'value', false);
        }
        get willValidate() {
            return exports.awaitedHandler.getProperty(this, 'willValidate', false);
        }
        // methods
        checkValidity() {
            return exports.awaitedHandler.runMethod(this, 'checkValidity', []);
        }
        item(index) {
            throw new Error('HTMLSelectElement.item not implemented');
        }
        namedItem(name) {
            throw new Error('HTMLSelectElement.namedItem not implemented');
        }
        reportValidity() {
            return exports.awaitedHandler.runMethod(this, 'reportValidity', []);
        }
        then(onfulfilled, onrejected) {
            return exports.nodeAttacher.attach(this).then(onfulfilled, onrejected);
        }
        [Symbol.iterator]() {
            return exports.awaitedIterator.iterateAttached(this)[Symbol.iterator]();
        }
    };
}
exports.HTMLSelectElementGenerator = HTMLSelectElementGenerator;
exports.HTMLSelectElementPropertyKeys = [...HTMLElement_1.HTMLElementPropertyKeys, 'autocomplete', 'autofocus', 'disabled', 'form', 'labels', 'length', 'multiple', 'name', 'options', 'required', 'selectedIndex', 'selectedOptions', 'size', 'type', 'validationMessage', 'validity', 'value', 'willValidate'];
exports.HTMLSelectElementConstantKeys = [...HTMLElement_1.HTMLElementConstantKeys];
//# sourceMappingURL=HTMLSelectElement.js.map