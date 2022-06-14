"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Provincie {
    constructor(naam, pos) {
        this.steden = [];
        this.naam = naam;
        this.positie = pos;
    }
    addSteden(...steden) {
        this.steden = [...this.steden, ...steden];
    }
    getInwoners() {
        return this.steden.map(el => el.getInwoners())
            .reduce((acc, el) => acc + el);
    }
}
exports.default = Provincie;
