// Zakres lokalny  FUNKCJE

// Przykład1


var varFun = 'a';
let letFun = 'b';
const constFun = 'c';

function variablesInFunction() {
    var inFunction = 'jestem';
    // varFun = 4; //wpływa na zmienną i rzeczywiście zmienia
    let varFun = 0; //Tak stworzona już nie pozwala na odwołanie, jest lokalna.
    let letFun = 5; //również nie wpływa, jest lokalna.
    const constFun = 6; //tak samo nie gryzą się.
    function showVariable() {
        const constFun = 'funkcja w funkcji';
        varFun = 'nadpisuje wartość zmiennej z wyższego zakresu';
        console.log(varFun, letFun, constFun);
    }
    showVariable();
    //Zmienne zadeklarowane w zakresach wyższych są widoczne w lokalnych ale odwrotnie nie. Przy wywołaniu znalazło w swoim zakresie zmienne więc nie szukało w globalnym. Nie da się dostać do zakresu bardziej zagłębionego (z globala do lokalnego)


};


variablesInFunction();

// showVariable(); //Jest niewidoczna, logiczne, jest w lokalnym więc z lokalnego nie działa.

//Przykład 2

function calculate(a, b) {
    // const a=a;
    // const b=b;
    const number1 = a;
    const number2 = b;
    console.log(a);
    console.log(b);
    console.log(number1);
    console.log(number2);

    function add() {
        // number2 = 10;
        const number2 = 10;
        console.log(number1 + number2);
    }
    add();
}

calculate(2, 3)



//Zakres lokalny BLOK

let var1 = 1;
const var2 = 2;
var var3 = 3; {
    let var1 = "wew1";
    const var2 = "wew2";
    var var3 = "wew3";
    console.log(var1);
    console.log(var2);
    console.log(var3);
    var1 = "wew1";
    // var2 = "wew2";
    var3 = "wew3";
}
console.log(var1);
console.log(var2);
console.log(var3);


//Przykład 2

const a = "1 w zakresie globalnym"
let b = "2 w zakresie globalnym"
var c = "3 w zakresie globalnym"

if (true) {
    // console.log(a); //zmienna globalna jest widoczna w bloku
    // a="Przyipisanie do a? ale którego?"; //błąd 
    const a = "1 w bloku"; //silnik wie że jest a a wcześniej console woła o a, hoisting nie działa dla const więc błąd
    // console.log("a w bloku to :" +a);
    // b="2 w bloku";
    // console.log("b w bloku to:" +b);
    var c = "3 w bloku";
}

console.log(a);
console.log(c);

// Zakres zmiennej a jej widoczność - widoczność może być przysłaniana.


//Przykład 3

let i =9;
for (let i=0; i<10; i++) { //zakres niezależny. Szuka w warunku.
    // let i =10;
    console.log(i);
    const inFor = 'wewnątrz pętli';
    if (i<4) {
        i=10;
        let i=20;
        inFor="wewnątrz pętli i wewnątrz instrukcji warunkowej";
        const inFor="wewnątrz pętli i wewnątrz instrukcji warunkowej";
        console.log("i wewnątrz instrukcji warunkowej, w pętli " + i);

    }
}







