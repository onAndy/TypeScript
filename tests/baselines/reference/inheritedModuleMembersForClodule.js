//// [inheritedModuleMembersForClodule.ts]
class C {
    static foo(): string {
        return "123";
    }
}

class D extends C {
}

module D {
    export function foo(): number {
        return 0;
    };
}

class E extends D {
    static bar() {
        return this.foo();
    }
}


//// [inheritedModuleMembersForClodule.js]
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
    C.foo = function () {
        return "123";
    };
    return C;
}());
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        return _super.apply(this, arguments) || this;
    }
    return D;
}(C));
(function (D) {
    function foo() {
        return 0;
    }
    D.foo = foo;
    ;
})(D || (D = {}));
var E = (function (_super) {
    __extends(E, _super);
    function E() {
        return _super.apply(this, arguments) || this;
    }
    E.bar = function () {
        return this.foo();
    };
    return E;
}(D));
