//// [constructorOverloads3.ts]
declare class FooBase {
    constructor(s: string);
    constructor(n: number);
    constructor(x: any);
}


 class Foo extends FooBase {
    constructor(s: string);
    constructor(n: number);
    constructor(a: any);
    constructor(x: any, y?: any) { }
    bar1() { /*WScript.Echo("Yo");*/}
}

var f1 = new Foo("hey");
var f2 = new Foo(0);
var f3 = new Foo(f1);
var f4 = new Foo([f1,f2,f3]);

f1.bar1();


//// [constructorOverloads3.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(d, b);
    } else {
        d.__proto__ = b;
    }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Foo = (function (_super) {
    __extends(Foo, _super);
    function Foo(x, y) {
        var _this;
        return _this;
    }
    Foo.prototype.bar1 = function () { };
    return Foo;
}(FooBase));
var f1 = new Foo("hey");
var f2 = new Foo(0);
var f3 = new Foo(f1);
var f4 = new Foo([f1, f2, f3]);
f1.bar1();
