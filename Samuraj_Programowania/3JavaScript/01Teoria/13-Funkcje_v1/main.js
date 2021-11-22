// Funkcje

// Są obiektami jak np tablica.

// Można je wywoływać  w sposób: nazwafunkcji()

// metoda/funkcja zamiennie.

// Funkcja może pracować na danych i je modyfikować, wystarczy tak ją zaimplementować. Są wielokrotnego użytku.

//TWORZENIE FUNKCJI

// szkielet funkcji:  const nazwaFunkcjiCoRobi = function() {};

const showMessage = function(message) {
    console.log(message);
}

showMessage("Witajcie, funkcja showMessage wywołana.")

//funkcja bez nazwy taka jak wyżej to funkcja anonimowa


// Deklaracja funkcji:

function addNumbers(number1,number2) {
    return number1+number2;
}

showCourseName()
console.log(addNumbers(5,10))

//Plusem/minusem jest to, że dzięki HOISTINGOWI jest ona możliwa do włączenia przed deklaracją. Jeśli jest anonimowa to wtedy nie działa.

function showCourseName() {
    console.log("Programowanie w JS")
}

// Konstruktor

const textAlert = new Function("text","alert(text)");

// textAlert("działa!")

// 4, ostatni sposób z ES6, strzałkowa, działa nieco inaczej

// const nazwaFunkcji = () => {};

const showTextMyArrowFunc = (txt) => {
    console.log(txt);
}
// jako że jest jeden parametr nie musi mieć części nawiasów więc będzie:
// const showTextMyArrowFunc = txt => console.log(txt);
// strzałkowe są zawsze anonimowe.

showTextMyArrowFunc("hej")


// Wywołania funkcji (invoking)
// nazwa() - wywołanie
// nazwa(arg1,arg2) - wywołanie z arg

const divideBy2 = function(number) {
    console.log(number/2);
}
const result1 = divideBy2(10); //undefined bo nie zmienia nic.

let numberr = 0
const add = function() {
    numberr++;
    console.log(numberr)
}

const divideBy3 = function(number) {
    return number/3;
}
const result2 = divideBy3(20)


const divideBy5 = function(number) {
    const result = number/5
    console.log(result)
    return result;
}


const result3 = divideBy5(26)

//PARAMETRY I ARGUMENTY

//Jeśli podamy za dużo argumentów to zbędne będą ignorowane,
//A jak za mało to będzie wstawione undefined.
divideBy5.length //mówi ile argumentów funkcja przyjmuje.

















