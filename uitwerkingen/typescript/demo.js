var Student = /** @class */ (function () {
    function Student(adres) {
        this.adres = adres;
    }
    Student.prototype.getAdres = function () {
        return this.adres;
    };
    return Student;
}());
var harald = new Student({ 'huisnummer': 42, 'straatnaam': 'zwanebloemweg' });
