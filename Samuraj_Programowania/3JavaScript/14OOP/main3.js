// Czym jest klasa w JS

// Jak tworzymy klasę

class Family {
    constructor(name) {
        this.name = name;
        this.addMember = function() {
        console.log('wywołane z konstruktora')

        }


    }
    addMember() {
        console.log('wywołane z prototypu')
    }
}

const nowakowie = new Family();

const Family2 = function(name) {
    this.name = name
}
Family2.prototype.addMember = function() {};

const kowalscy = new Family2();

// Prototyp klasy

// Funkcja konstruktora i klasa

// Wyrażenie klasy

//2 metody, jak z funkcjami
class Family4 {
    // .....
}

const Family5 = class {
    // ......
}

// Metody statyczne

class FamilyX {
    constructor(members,...names) {
        this.members = members;
        this.names = names;
    }
    addMember(newMember) {
        this.names.push(newMember);
        this.members++;
        console.log(`Nowy członek: ${newMember}, Liczebność: ${this.members}`)
    }

    static makeFamily(...members) {
        return members;
    }
    //Metoda statyczna jest możliwa do wywołania tylko z poziomu klasy, a nie z instancji. wisniewscy.makeFamily nie zadziała.
}

const wisniewscy = new FamilyX(3,'Jan','Ewa','Adam');
wisniewscy.addMember('Jaś')

// Warto pamiętać o klasach

//Klasy nie podlegają hoistingowi
class Animal {
    
}

const dog = new Animal(); //bez new nie stworzy instancji.




