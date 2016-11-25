//// [staticFactory1.ts]
class Base {
    foo() { return 1; }
    static create() {
        return new this();
    }
}

class Derived extends Base {
    foo() { return 2; }
}
var d = Derived.create(); 

d.foo();  

//// [staticFactory1.js]
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
    Base.prototype.foo = function () { return 1; };
    Base.create = function () {
        return new this();
    };
    return Base;
}());
var Derived = (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super.apply(this, arguments) || this;
    }
    Derived.prototype.foo = function () { return 2; };
    return Derived;
}(Base));
var d = Derived.create();
d.foo();
