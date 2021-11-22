//pętle część I


//FOR
/*  for(inicjalizacja iteratora; warunek; zwiększenie iteratora) {
    blok kodu
}
*/

for (let i=0; i<10; i++) {
    console.log('wyświetlenie: ' + i);
}
//musi być let bo const nie pozwala zmienić wartości.

let j=0;
for(;j<4;) {
    console.log(j);
    j++;
}


//while
// uruchamiaj tak długo jak warunek jest prawdziwy.
/*
while (warunek) {
    blok kodu
}
*/
let k =15;
while (k<20) {
    console.log('wyświetlenie: ' + k);
    k++;
}

let money = 50;
while (money >= 8) {
    console.log("mam jeszcze " +money+ " złotych, czas na piwo.");
    money-=8;
}
// alert(`za ${money} złotych piwa nie kupię.`)

let gasoline = 5;
let km = 0;

while(gasoline--) {
    km+=18;
    console.log("Przejechaliśmy " +km+ "km, zostało " +gasoline+ " litrów benzyny");
}

//DO....WHILE

//Wykona się przynajmniej raz. Czy dalej- jeśli spełni warunek

let study = "nie, nie wyrzucili mnie"

// do {
    
// } while (condition);

do {
    console.log("Idę do szkoły");
} while(study===true);

// CZĘŚĆ II
// Nowocześniejsze pętle, z ES6, zagnieżdżenia

for(let i=0; i<3; i++) {
    for(let j=0; j<6; j++) {
        console.log(`zmienna i czyli ${i} pomnożona przez j czyli ${j} da wynik ${i*j}`);
    }
}
// pętla na tablicy
const userAge = [19,18,15,45,45,33,25];

for (let i=0; i<userAge.length; i++) {
    console.log(`wiek użytkownika o indeksie ${i} to ${userAge[i]}`)
}

//obliczanie wieku użytkownika - przykład

const userDateBirth = [2005, 1992, 1932, 1980];
const currentYear = 2021;

for (i=0; i < userDateBirth.length; i++) {
    const userAge1 = currentYear-userDateBirth[i];
    console.log(`wiek użytkownika numer ${i} to ${userAge1}`);
}

// Przykład 3 - for + warunkowa

const guest = ['pilkarz','kucharz','murarz','programista','polityk','pisarz','emeryt','magazynier'];

for (let i=0; i<guest.length; i++) {
    if(guest[i]==="programista") {
        console.log("Nie wpuszczamy, brak miejsca.")
    }
    else if (guest[i] === "polityk") {
        console.log("Nie wpuszczamy kłamców.")
    }
    else {
        console.log(`Witam Pana ${guest[i]}, zapraszamy.`)
    }
}


// pętla FOR - OF (ES6) - samoiterująca, jak for w pythonie.

const colors = ['red','green','blue','white','black','violet'];

for (const i of colors) {
    console.log(i)
}







