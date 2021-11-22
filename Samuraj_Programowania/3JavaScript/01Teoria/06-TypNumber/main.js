const integerExample = 100;
const decimalExample = 100.212;

typeof integerExample;
typeof decimalExample;

// szestnastkowy
const hexNumber = 0xff;
console.log(0b01101001)

console.log(5e3)

const newNumber = 123.45;

newNumber.toFixed(1); //zaokrąglenie. pusty nawias da do całości.
// Praca bezpośrednio na liczbie - problem, trzeba dać drugą kropkę
123..toFixed(1);

// .toString() zmiana typów z number na string z możliwością zamiany systemu liczbowego.
newNumber.toString();
newNumber.toString(2);

newNumber.toExponential(); //zamienia na notację naukową.

// FUNKCJE, które pozwalają zrobić różne zadania z liczbani

// sprawdzenie czy całkowita.
Number.isInteger(decimalExample);
Number.isInteger(100.01);
Number.isInteger(integerExample);
Number.isInteger(28000);

const integerExample2 = 100.00
Number.isInteger(integerExample2); //Da true


// Czy liczba jest skończona?
Number.isFinite(2); //true
Number.isFinite(NaN); //false
Number.isFinite(Infinity); //false
Number.isFinite(3e400); //false bo maksymalna to 1e308., minimalna ma znak minus przed nią.
Number.isFinite(3e300); //true

// NaN - wartość typu number, ale o nierozpoznanej wartości (Not a Number). Liczba która nie jest liozbą, np gdy number mnożymy przez string.
typeof NaN;

// Infinity - gdy przekroczymy maksymalne i minimalne wartości i gdy dzielimy przez 0(dzielenie przez 0 nie podnosi błędu)
typeof Infinity;

// Tworzenie obiektu instancji Number
const numberObj = new Number() //bez podania wartości da 0
const numberObj2 = new Number('coś') //Podanie stringa zwróci NaN
const numberObj3 = new Number('222.121') //da liczbę nawet podane jako string, dokona konwersji typu.
const numberObj4 = new Number(222.121); //correct

//działania arytmetyczne - przykłady
//Reszta z dzielenia - modulo, więc standardowo
console.log(20%2)
console.log(20%3)
console.log(20%7)
console.log(20%21)

//Potęgowanie
2**5

//Operatory dwuargumentowe (argumenty to operandy)

//Konwersja niejawna/automatyczna (coercion) liczby w stringa lub stringa w liczbę przy różnych operatorach
//konkatenacja
20+'20' //'2020'
20*20 //400

//Konwersja jawna
Number('210') //210
Number(true) //1
Number("") //0
Number('cos') //NaN

//Wykorzystanie konwersji niejawnej
//trick - przemnożyć przez jeden bo mnożenie zamienia stringa na number
'20' *1 // i mamy number.

//Kolejna sztuczka:
+ '20' //i też jest number 20.

//A liczbę na stringa? dodajmy pusty string
20 + '' //I jest '20'

//Gdy chcemy typ number zamienić na typ string (toString było wyżej)

200..toString();
String(200);
//Najczęściej konwersja odbywa się przez odwołanie do zmiennej a nie bezpośrednio liczby.

//Również parseInt() pozwala nam zmienić stringa w number.
// Drugi argument mówi w jakim systemie jest liczba
parseInt("20",10);//20
parseInt("20",3);//
parseInt("100",4); //8
parseInt("0xff",16);//255
//Druga wartość jest zbędna jeśli chcemy system dziesiętny.
parseInt("100");
parseInt("200");
parseInt("0xff");
parseInt("202abc"); //202, usunie litery gdy liczba jest pierwsza
parseInt("22.52"); // usunie to co po kropce, 22.
parseFloat("3.33");//Nie usuwa.

// Wykorzystanie wbudowanego obiektu math. Ma wiele metod.
Math.round(200.55);
Math.round(200.45);
Math.floor(200.55); //200
Math.random()

//ciekawostki

undefined + NaN //NaN
Infinity + undefined //NaN
Infinity - Infinity //Nan
Infinity - 100 //Infinity
0 + null //0
1 / Infinity //0

