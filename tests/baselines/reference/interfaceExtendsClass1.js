//// [interfaceExtendsClass1.ts]
class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control {
    select() { }
}
class TextBox extends Control {
    select() { }
}
class Image extends Control {
}
class Location {
    select() { }
}


//// [interfaceExtendsClass1.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (typeof Object.setPrototypeOf === "function") {
        Object.setPrototypeOf(d, b);
    } else {
        d.__proto__ = b;
    }
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Control = (function () {
    function Control() {
    }
    return Control;
}());
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
var Image = (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super.apply(this, arguments) || this;
    }
    return Image;
}(Control));
var Location = (function () {
    function Location() {
    }
    Location.prototype.select = function () { };
    return Location;
}());
