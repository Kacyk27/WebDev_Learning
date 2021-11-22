// Nowe rozwiązanie z ES6.

//grawis, lewy apostrof

`tekst`;
"tekst";
'tekst';

`"I'm only human" - Alexander The Great`;
"\"I'm only human\" - Alexander The Great";
'"I\'m only human" - Alexander The Great';

//wielowierszowe stringi
//ES5
const text1 = "tekst\ntekst\ntekst";
//ES6
const text2 = `tekst
tekst
tekst`;

//${} osadzanie kodu JS w stringu;
const yourName = "Jagienka";

//Możliwość wstrzykiwania kodu wewnątrz stringa
const greeting = `Cześć ${yourName}`;
//Podobny efekt ale z konkatenacją
const greeting2 = "Cześć "+yourName

//Możliwość użycia wyrażenia (wyrażenie jest wykonywane i zwracany jest wynik);
const user1 = 29;
const user2 = 45;
const user3 = 34;

console.log(`Średni wiek użytkowników to ${(user1+user2+user3)/3}, a łączny wiek to ${user1+user2+user3}`)

//Pobranie i wyświetlenie aktualnej daty.

console.log(`obecnie zegarek pokazuje ${new Date().toLocaleString()}`)

//Obliczenie

const price = 80.99;
const tax = 0.23;

console.log(`Do zapłaty ${price + price*tax} złotych`);
console.log(`Do zapłaty ${(price + price*tax).toFixed(2)} złotych`);

//wykorzystanie operatora trójargumentowego

console.log(`Dzisiejsza cena netto jest ${price >= 80 ? 'wysoka': 'niska'}`)

//Inkrementacja/dekrementacja

let itemName = 'lcd';
let items = 20;

console.log(`Właśnie sprzedałem jeden ${itemName}, zostało ${--items} sztuk`);
console.log(`Właśnie sprzedałem jeden ${itemName}, zostało ${--items} sztuk`);
console.log(`Właśnie sprzedałem jeden ${itemName}, zostało ${--items} sztuk`);





