//// [subtypingWithNumericIndexer3.ts]
// Derived type indexer must be subtype of base type indexer

interface Base { foo: string; }
interface Derived extends Base { bar: string; }
interface Derived2 extends Derived { baz: string; }

class A {
    [x: number]: Derived;
}

class B extends A {
    [x: number]: Base; // error
}

class B2 extends A {
    [x: number]: Derived2; // ok
}

module Generics {
    class A<T extends Derived> {
        [x: number]: T;
    }

    class B extends A<Base> {
        [x: number]: Derived; // error
    }

    class B2 extends A<Derived> {
        [x: number]: Derived2; // ok
    }

    class B3<T extends Derived> extends A<T> {
        [x: number]: Base; // error
    }

    class B4<T extends Derived> extends A<T> {
        [x: number]: Derived; // error
    }

    class B5<T extends Derived2> extends A<T> {
        [x: number]: Derived2; // error
    }
}

//// [subtypingWithNumericIndexer3.js]
// Derived type indexer must be subtype of base type indexer
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
var B2 = (function (_super) {
    __extends(B2, _super);
    function B2() {
        return _super.apply(this, arguments) || this;
    }
    return B2;
}(A));
var Generics;
(function (Generics) {
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
    var B2 = (function (_super) {
        __extends(B2, _super);
        function B2() {
            return _super.apply(this, arguments) || this;
        }
        return B2;
    }(A));
    var B3 = (function (_super) {
        __extends(B3, _super);
        function B3() {
            return _super.apply(this, arguments) || this;
        }
        return B3;
    }(A));
    var B4 = (function (_super) {
        __extends(B4, _super);
        function B4() {
            return _super.apply(this, arguments) || this;
        }
        return B4;
    }(A));
    var B5 = (function (_super) {
        __extends(B5, _super);
        function B5() {
            return _super.apply(this, arguments) || this;
        }
        return B5;
    }(A));
})(Generics || (Generics = {}));
