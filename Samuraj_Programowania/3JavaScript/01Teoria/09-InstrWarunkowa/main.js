// Instr warunkowa

// przykład
const condition =2;
if (condition) {
    console.log("Widać bo warunek prawdziwy.");
    // alert("działa")
};

// Kod w bloku startuje tylko gdy warunek prawdziwy. Jeśli nie to pomijany.

const userName="Marek";

if (userName !== "") {
    console.log("witaj " + userName)
};

// warunkwoa if else

const hasTicket = true;
const moreThen15Years = false;

if (hasTicket && moreThen15Years) {
    console.log("wchodzisz")
}
else {
    console.log("Nie wchodzisz")
}

// wersja bezsensowna
const age = 16
if (age <=9) {
    console.log("dziecko")
}
if (age > 9 && age <= 18) {
    console.log("młodziedż")
} 
if (age > 18 && age <= 70) {
    console.log("dorosły")
}
if (age >70) {
    console.log("dziadek")
}

// wersja optymalna

if (age <=9) {
    console.log("dziecko")
}
else if (age <= 18) {
    console.log("młodziedż")
} 
else if (age <= 70) {
    console.log("dorosły")
}
else {
    console.log("dziadek")
}

// Zagnieżdżenie IF
const guestName = "Bolek"
const guestAge = 12;

if (guestName) {
    if (guestAge > 18) {
        console.log("Witaj w klubie" + guestName)
    }
    else {
        console.log("Jesteś za młody" + guestName)
    }
}
else {
    console.log("Nie znam twojego imienia.")
}

// Instrukcja warunkowa switch
// Drzewko z możliwymi opcjami
const dayOfTheWeek = 'środa';

switch (dayOfTheWeek) {
    case 'poniedziałek':
        console.log("jest poniedziałek");
        break;
    case "wtorek":
        console.log("jest wtorek");
        break;
    case "środa" :
        console.log("jest środa");
        break;
    default:
        console.log("Nie wiem jaki jest dzień");
        break;
}
// bez poprawnej odpowiedzi i defaulta nic się nie wykona.

// Operator warunkowy / operator trójkowy

// a ? b : c

const score = 100;
20 === '20' && score ? console.log('wykonuje się, bo prawda') : console.log("wykonuje się bo nie prawda");

score > 120 ? console.log('prawda') : console.log('fałsz');

console.log(1>10 ? 1:0)

let gameResult = 0;
let killedMonsters =11;
gameResult += killedMonsters >10? 1:0;

const playerName = "Mściwoj";
console.log(`Witaj ${playerName ? playerName: "nieznajomy"}`)