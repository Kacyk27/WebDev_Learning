const txt = "jakiś tekst";
let score = 12.54;

"zbiór znaków w cudzysłowie";1222;true;null;undefined;
//Każdy typ prosty poza symbolem można stworzyć za pomocą literału. Literał to zestaw znaków, które interpreter jakoś rozpozna.

// Literał obiektu: {}, literał tablicy: [],

//Typy proste nie są obiektami, to jednak możemy na nich wykonywać metody i właściwości, które są domeną obiektów bo przecież "Wszystko jest obiektem".

// Właściwość - informacje o stanie (wartości)
//metoda - działanie na wartości, które najczęściej zwraca nową wartość.

// właściwości
txt.length;
txt[2];

//Metody nie dokonują zmiany, tylko zwracają. Metody muszą być wywołane (()), bez wywołania zobaczymy tylko czym są, a nie ich działanie.
txt.toUpperCase;
txt.toUpperCase();
score.toFixed();
txt.indexOf("t");

const newTxt = txt.toUpperCase();
const fixedNumber = score.toFixed(1);

const name1 = "Janek";
name1.length

// const nameTemporary = new String(name1);

const userName = new String("Jagna");
const userID = new Number(2);
const female = new Boolean(true);




