//// [superCallParameterContextualTyping3.ts]
interface ContextualType<T> {
    method(parameter: T): void;
}

class CBase<T>  {
    constructor(param: ContextualType<T>) {
    }

    foo(param: ContextualType<T>) {
    }
}

class C extends CBase<string> {
    constructor() {
        // Should be okay.
        // 'p' should have type 'string'.
        super({
            method(p) {
                p.length;
            }
        });

        // Should be okay.
        // 'p' should have type 'string'.
        super.foo({
            method(p) {
                p.length;
            }
        });
    }
}

//// [superCallParameterContextualTyping3.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(d, b);
    } else {
        d.__proto__ = b;
    }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CBase = (function () {
    function CBase(param) {
    }
    CBase.prototype.foo = function (param) {
    };
    return CBase;
}());
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        var _this = 
        // Should be okay.
        // 'p' should have type 'string'.
        _super.call(this, {
            method: function (p) {
                p.length;
            }
        }) || this;
        // Should be okay.
        // 'p' should have type 'string'.
        _super.prototype.foo.call(_this, {
            method: function (p) {
                p.length;
            }
        });
        return _this;
    }
    return C;
}(CBase));
