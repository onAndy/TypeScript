//// [functionSubtypingOfVarArgs.ts]
class EventBase {
    private _listeners = [];

    add(listener: (...args: any[]) => void): void {
        this._listeners.push(listener);
    }
}

class StringEvent extends EventBase { // should work
    add(listener: (items: string) => void ) { // valid, items is subtype of args
        super.add(listener);
    }
}


//// [functionSubtypingOfVarArgs.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(d, b);
    } else {
        d.__proto__ = b;
    }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EventBase = (function () {
    function EventBase() {
        this._listeners = [];
    }
    EventBase.prototype.add = function (listener) {
        this._listeners.push(listener);
    };
    return EventBase;
}());
var StringEvent = (function (_super) {
    __extends(StringEvent, _super);
    function StringEvent() {
        return _super.apply(this, arguments) || this;
    }
    StringEvent.prototype.add = function (listener) {
        _super.prototype.add.call(this, listener);
    };
    return StringEvent;
}(EventBase));
