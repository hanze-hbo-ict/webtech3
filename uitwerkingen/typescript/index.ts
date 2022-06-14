import Stad from "./Stad";
import Provincie from "./Provincie";

export enum Positie {
    Noord,
    Zuid,
    Oost,
    West
}

const groningen = new Stad('Groningen', 250_000)
const winsum = new Stad('Winsum', 7_500)
const delfzijl = new Stad('Delfzijl', 24_000)


groningen.addCafe({naam:"De Minnaar", bieren:["Jupiler","Karmeliet"], stoelen:20})
groningen.addCafe({naam:"De Bres", bieren:["Dommelsch","Heineken"],stoelen:13})

groningen.addPark({naam:"Noorderplantsoen", grootte:120, banken:20})
groningen.addPark({naam:"Stadspark", grootte:350, banken:10})

console.log(groningen.getCafes())

const grunn:Provincie = new Provincie("Grunn", Positie.Noord);
grunn.addSteden(groningen, winsum, delfzijl)
console.log(`Onze provincie heeft ${grunn.getInwoners()} inwoners`)
