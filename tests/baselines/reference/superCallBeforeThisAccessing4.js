//// [superCallBeforeThisAccessing4.ts]
class D extends null {
    private _t;
    constructor() {
        this._t;
        super();
    }
}

class E extends null {
    private _t;
    constructor() {
        super();
        this._t;
    }
}

//// [superCallBeforeThisAccessing4.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(d, b);
    } else {
        d.__proto__ = b;
    }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        var _this;
        _this._t;
        _this = _super.call(this) || this;
        return _this;
    }
    return D;
}(null));
var E = (function (_super) {
    __extends(E, _super);
    function E() {
        var _this = _super.call(this) || this;
        _this._t;
        return _this;
    }
    return E;
}(null));
