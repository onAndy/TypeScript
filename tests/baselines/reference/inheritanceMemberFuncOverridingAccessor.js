//// [inheritanceMemberFuncOverridingAccessor.ts]
class a {
    get x() {
        return "20";
    }
    set x(aValue: string) {

    }
}

class b extends a {
    x() {
        return "20";
    }
}

//// [inheritanceMemberFuncOverridingAccessor.js]
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
    Object.defineProperty(a.prototype, "x", {
        get: function () {
            return "20";
        },
        set: function (aValue) {
        },
        enumerable: true,
        configurable: true
    });
    return a;
}());
var b = (function (_super) {
    __extends(b, _super);
    function b() {
        return _super.apply(this, arguments) || this;
    }
    b.prototype.x = function () {
        return "20";
    };
    return b;
}(a));
