"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var Provincie = /** @class */ (function () {
    function Provincie(naam, pos) {
        this.steden = [];
        this.naam = naam;
        this.positie = pos;
    }
    Provincie.prototype.addSteden = function () {
        var steden = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            steden[_i] = arguments[_i];
        }
        this.steden = __spreadArray(__spreadArray([], this.steden, true), steden, true);
    };
    Provincie.prototype.getInwoners = function () {
        return this.steden.map(function (el) { return el.getInwoners(); })
            .reduce(function (acc, el) { return acc + el; });
    };
    return Provincie;
}());
exports["default"] = Provincie;
