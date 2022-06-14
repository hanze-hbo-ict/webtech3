"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Positie = void 0;
const Stad_1 = __importDefault(require("./Stad"));
const Provincie_1 = __importDefault(require("./Provincie"));
var Positie;
(function (Positie) {
    Positie[Positie["Noord"] = 0] = "Noord";
    Positie[Positie["Zuid"] = 1] = "Zuid";
    Positie[Positie["Oost"] = 2] = "Oost";
    Positie[Positie["West"] = 3] = "West";
})(Positie = exports.Positie || (exports.Positie = {}));
const groningen = new Stad_1.default('Groningen', 250000);
const winsum = new Stad_1.default('Winsum', 7500);
const delfzijl = new Stad_1.default('Delfzijl', 24000);
groningen.addCafe({ naam: "De Minnaar", bieren: ["Jupiler", "Karmeliet"], stoelen: 20 });
groningen.addCafe({ naam: "De Bres", bieren: ["Dommelsch", "Heineken"], stoelen: 13 });
groningen.addPark({ naam: "Noorderplantsoen", grootte: 120, banken: 20 });
groningen.addPark({ naam: "Stadspark", grootte: 350, banken: 10 });
console.log(groningen.getCafes());
const grunn = new Provincie_1.default("Grunn", Positie.Noord);
grunn.addSteden(groningen, winsum, delfzijl);
console.log(`Onze provincie heeft ${grunn.getInwoners()} inwoners`);
