export default class Stad {
    // private naam:String
    // private inwoners:number
    
    private cafes:Cafe[] = []
    private parken:Park[] = []

    constructor(private naam:String, private inwoners:number) {
        // this.inwoners = inwoners
        // this.naam = naam
    }

    public getInwoners():number { 
        return this.inwoners
    }

    public addCafe(c:Cafe):void {
        this.cafes.push(c)
    }

    public addCafes(...c:Cafe[]):void {
        this.cafes.push(...c)

    }

    public getCafes():Cafe[] {
        return this.cafes
    }

    public addPark(p:Park):void {
        this.parken.push(p)
    }

    public getParken():Park[] {
        return this.parken
    }    
}


interface Cafe {
    naam:string
    bieren:string[]
    stoelen:number
}

interface Park {
    naam:string
    grootte:number
    banken:number
}


// OPGAVE 1
const groningen = new Stad('Groningen', 250_000)
const winsum = new Stad('Winsum', 7_500)
const delfzijl = new Stad('Delfzijl', 24_000)

let total = [groningen,winsum,delfzijl]
    .map( el => el.getInwoners() )
    .reduce ( (acc, el) => acc+el )

console.log(total)





// OPGAVE 2

groningen.addCafe({naam:"De Minnaar", bieren:["Jupiler","Karmeliet"], stoelen:20})
groningen.addCafe({naam:"De Bres", bieren:["Dommelsch","Heineken"],stoelen:13})

groningen.addCafes(
    {naam:"De Minnaar", bieren:["Jupiler","Karmeliet"], stoelen:20},
    {naam:"De Bres", bieren:["Dommelsch","Heineken"],stoelen:13}
)

groningen.addPark({naam:"Noorderplantsoen", grootte:120, banken:20})
groningen.addPark({naam:"Stadspark", grootte:350, banken:10})

console.log(groningen.getCafes())

