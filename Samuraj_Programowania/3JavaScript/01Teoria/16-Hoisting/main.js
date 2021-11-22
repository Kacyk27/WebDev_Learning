//Hoisting

//Przeniesienie części deklaracji na początek zakresu.

// /zmienne

// console.log(typeNumber); //blad undefined
// console.log(typeString); // blad undefined
console.log(typeBoolean); // nie ma bledu bo var podlega
console.log(tablica); // blad
console.log(obiekt); //blad
console.log(funkcja); //nie ma bledu

funkcjaNazwa();

const typeNumber=20;
let typeString='tekst';
var typeBoolean = false;
//const i let nie podlega hoistingowi

var tablica = [];
let obiekt = {};
const funkcja = function(){};

//FUNKCJA STWORZONA ZA POMOCĄ DEKLARACJI PODLEGA HOISTINGOWI, ZA POMOCĄ CONST NIE PODLEGA.

function funkcjaNazwa() {}; //podlega
const fConst = function() {}; //nie podlega
let fLet = function() {}; //nie podlega
var fVar = function() {}; //podlega ale blad bo undefined.


