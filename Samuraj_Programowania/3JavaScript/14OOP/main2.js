// prototyp


const Person = function (name, age) {
    this.name = name;
    this.age;
    this.children = [];
    // this.addChildren = function(name) {
    //     this.children.push(name);
    // }
}
Person.prototype.addChildren = function (name) {
    this.children.push(name);
}
// Person.prototype.gender = 'female';

const arek = new Person('Arek', 20);
const monika = new Person('Monika', 30);

arek.addChildren('Asia');
monika.addChildren('Zosia');
// arek.gender = 'male';


//część 2

function Player() {

}

class User {

}

Player.prototype.age = 25
const janek = new Player();
const marta = new User();

janek.constructor
marta.constructor

const darek = new janek.constructor() //tożsame z Player(), bo i tak do tego samego konstruktora idzie.

function Citizen(country, citizenship) {
    this.country = country;
    this.citizenship = citizenship;
    // this.changeCitizenship = function (citizenship) {
    //     this.citizenship = citizenship;
    //     console.log(`Zmiana za pomocą metody w instancji na obywatelstwo ${this.citizenship}`)
    // }
}

Citizen.prototype.changeCitizenship = function(citizenship) {
        this.citizenship = citizenship;
        console.log(`Zmiana za pomocą metody w instancji na obywatelstwo ${this.citizenship}`);
        }
const zenek = new Citizen('Polska', 'polskie');
const marysia = new Citizen('Francja', 'niemieckie');

Citizen.prototype.age = 21;


const arr = [5,6,7,8];
Array.prototype.delete = function(index) {
    return this.splice(index,1)
}


// Część III
//Łańcuch prototypów

arr.__proto__ //prototyp konstruktora
arr.__proto__.__proto__ //Element object, prototyp prototypu? Object to główny obiekt, wszystkie są połączone z Objectem poprzez łańcuch prototypów.
arr.__proto__.__proto__.__proto__ //null, nie ma nic w tym wypadku, gdy klasy i prototypy są zagnieżdżone może być bardzo długie.


arr instanceof Array;
arr instanceof Object;
arr instanceof Citizen;

zenek instanceof Citizen;
zenek instanceof Object;
zenek instanceof Function;


Object.getPrototypeOf(arr); //zwraca prototyp konstruktora.
arr.__proto__.constructor;
Object.getPrototypeOf(zenek);


const janusz = new Citizen();
//janusz otrzymuje:
// janusz.__proto__ = Citizen.prototype











