//// [classAbstractConstructorAssignability.ts]

class A {}

abstract class B extends A {}

class C extends B {}

var AA : typeof A = B;
var BB : typeof B = A;
var CC : typeof C = B;

new AA;
new BB;
new CC;

//// [classAbstractConstructorAssignability.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(d, b);
    } else {
        d.__proto__ = b;
    }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function () {
    function A() {
    }
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        return _super.apply(this, arguments) || this;
    }
    return B;
}(A));
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        return _super.apply(this, arguments) || this;
    }
    return C;
}(B));
var AA = B;
var BB = A;
var CC = B;
new AA;
new BB;
new CC;
