//// [classExtendingNull.ts]
class C1 extends null { }
class C2 extends (null) { }


//// [classExtendingNull.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(d, b);
    } else {
        d.__proto__ = b;
    }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var C1 = (function (_super) {
    __extends(C1, _super);
    function C1() {
        return _super.apply(this, arguments) || this;
    }
    return C1;
}(null));
var C2 = (function (_super) {
    __extends(C2, _super);
    function C2() {
        return _super.apply(this, arguments) || this;
    }
    return C2;
}((null)));
