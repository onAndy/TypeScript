//// [superInConstructorParam1.ts]
class B {
  public foo(): number {
    return 0;
  }
}

class C extends B {
  constructor(a = super.foo()) {
  }
}

//// [superInConstructorParam1.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(d, b);
    } else {
        d.__proto__ = b;
    }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var B = (function () {
    function B() {
    }
    B.prototype.foo = function () {
        return 0;
    };
    return B;
}());
var C = (function (_super) {
    __extends(C, _super);
    function C(a) {
        if (a === void 0) { a = _super.foo.call(_this); }
        var _this;
        return _this;
    }
    return C;
}(B));
