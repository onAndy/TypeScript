//// [derivedClassOverridesPrivates.ts]
class Base {
    private x: { foo: string };
}

class Derived extends Base {
    private x: { foo: string; bar: string; }; // error
}

class Base2 {
    private static y: { foo: string };
}

class Derived2 extends Base2 {
    private static y: { foo: string; bar: string; }; // error
}

//// [derivedClassOverridesPrivates.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(d, b);
    } else {
        d.__proto__ = b;
    }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Base = (function () {
    function Base() {
    }
    return Base;
}());
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super.apply(this, arguments) || this;
    }
    return Derived;
}(Base));
var Base2 = (function () {
    function Base2() {
    }
    return Base2;
}());
var Derived2 = (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        return _super.apply(this, arguments) || this;
    }
    return Derived2;
}(Base2));
