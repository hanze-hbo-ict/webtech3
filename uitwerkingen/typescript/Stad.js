"use strict";
exports.__esModule = true;
var Stad = /** @class */ (function () {
    function Stad(naam, inwoners) {
        this.naam = naam;
        this.inwoners = inwoners;
        // private naam:String
        // private inwoners:number
        this.cafes = [];
        this.parken = [];
        // this.inwoners = inwoners
        // this.naam = naam
    }
    Stad.prototype.getInwoners = function () {
        return this.inwoners;
    };
    Stad.prototype.addCafe = function (c) {
        this.cafes.push(c);
    };
    Stad.prototype.getCafes = function () {
        return this.cafes;
    };
    Stad.prototype.addPark = function (p) {
        this.parken.push(p);
    };
    Stad.prototype.getParken = function () {
        return this.parken;
    };
    return Stad;
}());
exports["default"] = Stad;
// OPGAVE 1
var groningen = new Stad('Groningen', 250000);
var winsum = new Stad('Winsum', 7500);
var delfzijl = new Stad('Delfzijl', 24000);
var total = [groningen, winsum, delfzijl]
    .map(function (el) { return el.getInwoners(); })
    .reduce(function (acc, el) { return acc + el; });
console.log(total);
// OPGAVE 2
groningen.addCafe({ naam: "De Minnaar", bieren: ["Jupiler", "Karmeliet"], stoelen: 20 });
groningen.addCafe({ naam: "De Bres", bieren: ["Dommelsch", "Heineken"], stoelen: 13 });
groningen.addPark({ naam: "Noorderplantsoen", grootte: 120, banken: 20 });
groningen.addPark({ naam: "Stadspark", grootte: 350, banken: 10 });
console.log(groningen.getCafes());
