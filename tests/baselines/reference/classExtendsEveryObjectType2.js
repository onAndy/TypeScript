//// [classExtendsEveryObjectType2.ts]
class C2 extends { foo: string; } { } // error

class C6 extends []{ } // error

//// [classExtendsEveryObjectType2.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(d, b);
    } else {
        d.__proto__ = b;
    }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var C2 = (function (_super) {
    __extends(C2, _super);
    function C2() {
        return _super.apply(this, arguments) || this;
    }
    return C2;
}({ foo: string })); // error
var C6 = (function (_super) {
    __extends(C6, _super);
    function C6() {
        return _super.apply(this, arguments) || this;
    }
    return C6;
}([])); // error
