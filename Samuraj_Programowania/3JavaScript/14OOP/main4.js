// Nadzrzędne  (superclass) i podrzędne/pochodne (subclass)

//Słowa kluczowe:
// extends - wskazanie klasy po której nowa klasa powinna dziedziczyć
// super - służy do rozszerzania konstruktora nowej klasy o konstruktor klasy z której dziedziczy



class Animal {
    constructor(age,name) {
        this.age = age;
        this.name = name
    }
    breathe() {
        console.log('Zwierze oddycha')
    }
}

const zwierze = new Animal(2, 'Artek')

class Mammel extends Animal {
    //wywołuje się konstruktor z animala
    constructor(age, name, hairs) {
        super(age, name);  //wywołujemy konstruktor klasy nadrzędnej
        this.hairs = hairs
    }
    drinkMilk() {
        console.log('Ssaki piją mleko')
    }
}

const ssak = new Mammel(3,'blond','Maks');

ssak.breathe(); //działa
ssak.drinkMilk();

zwierze.__proto__ == Animal.prototype


class Human extends Mammel {
    constructor(age,name,hairs,language) {
        super(age, name, hairs);
        this.language = language
    }
    speak() {
        console.log('człowiek mówi')
    }
}

const czlowiek = new Human(34,'Roman','ciemne','polski');
