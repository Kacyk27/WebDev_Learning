// Typy danych
// 7 typów wbudowanych

// Typy proste
// string number boolean undefined null symbol

// Typy Referencyjne (obiekty)
// obiekty: obiekt, funkcja, tablica, etc.

// stringi
typeof 'tekst';
typeof '222.222';
typeof 'grawis';
let userName = 'Tymoteusz';
typeof userName;

// liczby bez podziału na int,float,decimal
typeof 222.222;
typeof 1000;
typeof 222.222
typeof NaN;
typeof (2.2 * 'a');

// boolean
typeof true;
typeof false;
typeof (5 == 3); //bez nawiasu daje typ T/F
typeof 5 > 3;

// undefined
typeof undefined;
let dateFirstLogin;
typeof dateFirstLogin;

// Null - nie posiada (jedna wartość)
let SecondName = null;
typeof null;

// Symbol (nowy typ w ES6)
typeof Symbol();

// Obiekty
typeof {};
typeof function() { };
typeof [];

// Przypisanie wartości i rpzypisanie referencji do obiektu.
let primitiveType1 = 20;
let primitiveType2 = primitiveType1;
primitiveType1 = 30;
console.log(primitiveType2);
// Ponieważ wartość została skopiowana i jest nową wartością

// Przy typach prostych kopiuje wartość do nowego obiektu, przy referencyjnych tworzy coś w stylu odnośnika.

let referenceValue1 = [1,2,3];
let referenceValue2 = referenceValue1;
// Tu jest jeden obiekt, tylko ma 2 nazwy, to samo miejsce w pamięci.
referenceValue1[3] = 4;
console.log(referenceValue2);
// Obiekt nie został skopiowany a został przypisany jedynie link do miejsca w pamięci, w którym się znajduje.

