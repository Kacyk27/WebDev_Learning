const Car = function(name) {
    // console.log(this);
    this.name = name
}


const maluch = new Car('maluch');
const polonez = new Car('polonez');
// maluch.name = 'KiA'

//Co się dzieje?
// 1. Nowy pusty obiekt
// 2. Następuje wiązanie this z utworzonym obiektem
// 3. Powstaje właściwość __proto__;
// 4. Wywołanie funkcji i przypisanie do zmiennej

maluch.name = 'zabytek';
