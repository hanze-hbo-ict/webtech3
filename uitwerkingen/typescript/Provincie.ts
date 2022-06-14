import Stad from "./Stad"
import { Positie } from "."

export default class Provincie {
    steden:Stad[] = []
    naam:String
    positie:Positie

    constructor (naam:String, pos:Positie) {
        this.naam = naam
        this.positie = pos
    }

    public addSteden(...steden:Stad[]):void {
        this.steden = [...this.steden, ...steden]
    }

    public getInwoners():number {
        return this.steden.map( el => el.getInwoners() )
            .reduce( (acc,el) => acc+el)
    }
}