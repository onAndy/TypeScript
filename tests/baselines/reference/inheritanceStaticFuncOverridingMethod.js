//// [inheritanceStaticFuncOverridingMethod.ts]
class a {
    static x() {
        return "10";
    }
}

class b extends a {
    static x() {
        return "20";
    }
}

//// [inheritanceStaticFuncOverridingMethod.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(d, b);
    } else {
        d.__proto__ = b;
    }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var a = (function () {
    function a() {
    }
    a.x = function () {
        return "10";
    };
    return a;
}());
var b = (function (_super) {
    __extends(b, _super);
    function b() {
        return _super.apply(this, arguments) || this;
    }
    b.x = function () {
        return "20";
    };
    return b;
}(a));
