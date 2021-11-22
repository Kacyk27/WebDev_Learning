// Atrybuty zmiennych w JS:
// nazwa
// miejsce w pamięci
// wartość
// można dodać atrybut jakim jest czas życia, zależy od miejsca gdzie jest stworzona zmienna (globalna i lokalna)

// Zmienna w JS nie ma typu - tylko wartość którą ta zmienna przechowuje.


let isUser = 76; //zapis poprawny
// let number isUser =76; //zapis niepoprawny

// Typowanie dynamicznie - istnienie w trakcie wykonywania programu.

// Nazwa zmiennej:
// najlepiej w j.angielskim
// niech oznacza to czym jest lub do czego, co robi
// notacja wielbłądzia = notacjaWielbłądzia
// słowa zarezerwowane (jedno słowo) odpadają
// brak spacji, myślnika, cyfra nie może być na początku
// może być z dużej litery, lepiej z małych
// wielkość liter ma znaczenie
// Można jak w pythonie - z podkreślnikiem
// W JQ używać $

let userSurname = "Smith"
// deklaracja i przypisanie przy tworzeniu funkcji
let showUserName = function() {console.log(userSurname)}

// Deklaracja wielu zmiennych
let name,age,adress;
let position = [200,100], score = null, time = 20.2, ipAdress;
const firstUser = "John", secondUser = "Tom";

// Sposoby tworzenia i deklaracji zmiennych
// const - stała... zmienna stała? zmienna = zbiornik do przechowania danych. Raz zadeklarowana ma tam być.
// let - zmienna która może ulec zmianie w trakcie działania programu (np. dopisywanie elementów do listy)
// var - zmienna przed ES6, ale dalej można używać. JS jest kompatybilny wstecznie.

let example = 200;
example = example + 1;
const example2 = 200;
// example2 = example2 + 1; //wyrzuci błąd bo const.

// Const i zbiorniki typu lista:
const arrayExample = [1,"Adam"];
// Przypisanie nowego obiektu - nie jest możliwe
// arrayExample = [1, 2]; //Tak nie zadziała.
// Modyfikacja:
arrayExample[1] = 3; //zadziała
arrayExample[2] = "Adam"

// Istotny jest zakres (scope) zmiennych.

// Obiekt globalny (window) z var. Z let i const nie ma.
var globalProperty1 = "za pomocą var";
let globalProperty2 = "za pomocą let";
const globalProperty3 = "za pomocą const";

// Hoistowana var let i const (wyniesienie na początek.)
// console.log(varVariable); //hoistuje na górę
// console.log(letVariable); //wyskoczy błąd
// console.log(constVariable); //też błąd
var varVariable = 1;
let letVariable = 1;
const constVariable = 1;


// Jeśli program nie będzie zmieniać imienia użytkownika
const userName = "Adam";
// Jeśli będzie zmieniał wynik
let points = 200;
// Zmiennej var możemy używać, ale bardzo rzadko ma to sens
var userLastLoginDate = "15.10.2018";


