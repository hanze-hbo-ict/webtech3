"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stad {
    constructor(naam, inwoners) {
        this.cafes = [];
        this.parken = [];
        this.inwoners = inwoners;
        this.naam = naam;
    }
    getInwoners() {
        return this.inwoners;
    }
    addCafe(c) {
        this.cafes.push(c);
    }
    getCafes() {
        return this.cafes;
    }
    addPark(p) {
        this.parken.push(p);
    }
    getParken() {
        return this.parken;
    }
}
exports.default = Stad;
/*
// OPGAVE 1
const groningen = new Stad('Groningen', 250_000)
const winsum = new Stad('Winsum', 7_500)
const delfzijl = new Stad('Delfzijl', 24_000)

let total = [groningen,winsum,delfzijl]
    .map( el => el.getInwoners() )
    .reduce ( (acc, el) => acc+el)

console.log(total)

// OPGAVE 2

groningen.addCafe({naam:"De Minnaar", bieren:["Jupiler","Karmeliet"], stoelen:20})
groningen.addCafe({naam:"De Bres", bieren:["Dommelsch","Heineken"],stoelen:13})

groningen.addPark({naam:"Noorderplantsoen", grootte:120, banken:20})
groningen.addPark({naam:"Stadspark", grootte:350, banken:10})

console.log(groningen.getCafes())


*/ 
