//// [constructorFunctionTypeIsAssignableToBaseType.ts]
class Base {
    static foo: {
        bar: Object;
    }
}

class Derived extends Base {
    // ok
    static foo: {
        bar: number;
    }
}

class Derived2 extends Base {
    // ok, use assignability here
    static foo: {
        bar: any;
    }
}

//// [constructorFunctionTypeIsAssignableToBaseType.js]
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
var Derived2 = (function (_super) {
    __extends(Derived2, _super);
    function Derived2() {
        return _super.apply(this, arguments) || this;
    }
    return Derived2;
}(Base));
