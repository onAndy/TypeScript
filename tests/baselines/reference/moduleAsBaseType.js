//// [moduleAsBaseType.ts]
module M {}
class C extends M {}
interface I extends M { }
class C2 implements M { }

//// [moduleAsBaseType.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(d, b);
    } else {
        d.__proto__ = b;
    }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        return _super.apply(this, arguments) || this;
    }
    return C;
}(M));
var C2 = (function () {
    function C2() {
    }
    return C2;
}());
