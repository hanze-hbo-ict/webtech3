import { Adres } from './interface'

class Student {

    constructor( private adres:Adres) {}

    public getAdres():Adres {
        return this.adres
    }

}

const harald = new Student({'huisnummer':42, 'straatnaam':'zwanebloemweg'})
