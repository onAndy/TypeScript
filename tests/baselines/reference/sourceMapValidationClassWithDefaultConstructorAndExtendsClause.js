//// [sourceMapValidationClassWithDefaultConstructorAndExtendsClause.ts]
class AbstractGreeter {
}

class Greeter extends AbstractGreeter {
    public a = 10;
    public nameA = "Ten";
}

//// [sourceMapValidationClassWithDefaultConstructorAndExtendsClause.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(d, b);
    } else {
        d.__proto__ = b;
    }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractGreeter = (function () {
    function AbstractGreeter() {
    }
    return AbstractGreeter;
}());
var Greeter = (function (_super) {
    __extends(Greeter, _super);
    function Greeter() {
        var _this = _super.apply(this, arguments) || this;
        _this.a = 10;
        _this.nameA = "Ten";
        return _this;
    }
    return Greeter;
}(AbstractGreeter));
//# sourceMappingURL=sourceMapValidationClassWithDefaultConstructorAndExtendsClause.js.map