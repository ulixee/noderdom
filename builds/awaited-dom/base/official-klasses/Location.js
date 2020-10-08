"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const AwaitedHandler_1 = __importDefault(require("../AwaitedHandler"));
const initializeConstantsAndProperties_1 = __importDefault(require("../initializeConstantsAndProperties"));
const StateMachine_1 = __importDefault(require("../StateMachine"));
// tslint:disable:variable-name
_a = StateMachine_1.default(), exports.getState = _a.getState, exports.setState = _a.setState, exports.recordProxy = _a.recordProxy;
exports.awaitedHandler = new AwaitedHandler_1.default('Location', exports.getState, exports.setState);
function LocationGenerator() {
    return class Location {
        constructor() {
            initializeConstantsAndProperties_1.default(this, exports.LocationConstantKeys, exports.LocationPropertyKeys);
        }
        // properties
        get hash() {
            return exports.awaitedHandler.getProperty(this, 'hash', false);
        }
        set hash(value) {
            exports.awaitedHandler.setProperty(this, 'hash', value);
        }
        get host() {
            return exports.awaitedHandler.getProperty(this, 'host', false);
        }
        set host(value) {
            exports.awaitedHandler.setProperty(this, 'host', value);
        }
        get hostname() {
            return exports.awaitedHandler.getProperty(this, 'hostname', false);
        }
        set hostname(value) {
            exports.awaitedHandler.setProperty(this, 'hostname', value);
        }
        get href() {
            return exports.awaitedHandler.getProperty(this, 'href', false);
        }
        set href(value) {
            exports.awaitedHandler.setProperty(this, 'href', value);
        }
        get origin() {
            return exports.awaitedHandler.getProperty(this, 'origin', false);
        }
        get pathname() {
            return exports.awaitedHandler.getProperty(this, 'pathname', false);
        }
        set pathname(value) {
            exports.awaitedHandler.setProperty(this, 'pathname', value);
        }
        get port() {
            return exports.awaitedHandler.getProperty(this, 'port', false);
        }
        set port(value) {
            exports.awaitedHandler.setProperty(this, 'port', value);
        }
        get protocol() {
            return exports.awaitedHandler.getProperty(this, 'protocol', false);
        }
        set protocol(value) {
            exports.awaitedHandler.setProperty(this, 'protocol', value);
        }
        get search() {
            return exports.awaitedHandler.getProperty(this, 'search', false);
        }
        set search(value) {
            exports.awaitedHandler.setProperty(this, 'search', value);
        }
        // methods
        assign(url) {
            return exports.awaitedHandler.runMethod(this, 'assign', [url]);
        }
        reload() {
            return exports.awaitedHandler.runMethod(this, 'reload', []);
        }
        replace(url) {
            return exports.awaitedHandler.runMethod(this, 'replace', [url]);
        }
        toString() {
            return exports.awaitedHandler.runMethod(this, 'toString', []);
        }
    };
}
exports.LocationGenerator = LocationGenerator;
exports.LocationPropertyKeys = ['hash', 'host', 'hostname', 'href', 'origin', 'pathname', 'port', 'protocol', 'search'];
exports.LocationConstantKeys = [];
//# sourceMappingURL=Location.js.map