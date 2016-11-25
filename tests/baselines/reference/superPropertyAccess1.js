//// [superPropertyAccess1.ts]
class C {
    public foo() { }
    public get x() {
        return 1;
    }

    public bar() { }
}

class D extends C {
    public foo() {
        super.bar();
        super.x;  // error
    }    

    constructor() {
        super();
        super.bar();
        super.x;  // error
    }

    public get y() {
        super.bar();
        super.x; // error
        return 1;
    }
}

//// [superPropertyAccess1.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(d, b);
    } else {
        d.__proto__ = b;
    }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var C = (function () {
    function C() {
    }
    C.prototype.foo = function () { };
    Object.defineProperty(C.prototype, "x", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    C.prototype.bar = function () { };
    return C;
}());
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        var _this = _super.call(this) || this;
        _super.prototype.bar.call(_this);
        _super.prototype.x; // error
        return _this;
    }
    D.prototype.foo = function () {
        _super.prototype.bar.call(this);
        _super.prototype.x; // error
    };
    Object.defineProperty(D.prototype, "y", {
        get: function () {
            _super.prototype.bar.call(this);
            _super.prototype.x; // error
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    return D;
}(C));
