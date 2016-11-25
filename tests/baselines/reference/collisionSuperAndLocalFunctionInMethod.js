//// [collisionSuperAndLocalFunctionInMethod.ts]
function _super() { // No error
} 
class Foo {
    x() {
        function _super() { // No error
        } 
    }
    _super() { // No error
    }
}
class b extends Foo {
    public foo() {
        function _super() { // should be error
        } 
    }
    _super() { // No Error
    }
}
class c extends Foo {
    public foo() {
        var x = () => {
            function _super() { // should be error
            } 
        }
    }
    _super() { // No error
    }
}

//// [collisionSuperAndLocalFunctionInMethod.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(d, b);
    } else {
        d.__proto__ = b;
    }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function _super() {
}
var Foo = (function () {
    function Foo() {
    }
    Foo.prototype.x = function () {
        function _super() {
        }
    };
    Foo.prototype._super = function () {
    };
    return Foo;
}());
var b = (function (_super) {
    __extends(b, _super);
    function b() {
        return _super.apply(this, arguments) || this;
    }
    b.prototype.foo = function () {
        function _super() {
        }
    };
    b.prototype._super = function () {
    };
    return b;
}(Foo));
var c = (function (_super) {
    __extends(c, _super);
    function c() {
        return _super.apply(this, arguments) || this;
    }
    c.prototype.foo = function () {
        var x = function () {
            function _super() {
            }
        };
    };
    c.prototype._super = function () {
    };
    return c;
}(Foo));
