export interface Docent {
    naam:String,
    code:String,
    vakken:String[]
}

export interface Student {
    naam:String,
    studentnummer:number,
    opleiding:String
}

export interface searchdata {
    type:String,
    searchstring:String|number
}
