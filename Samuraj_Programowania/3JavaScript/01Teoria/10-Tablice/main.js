// Tablice w JS

// Każda wartość ma indeks, uporządkowana.

// Tworzenie
// I
const nameList = ["Marek",'Paweł','Piotrek'];
// II
const city = [];

city[0] = 'Zamość';
city[1] = 'Szczebrzeszyn';

// Konstruktor
const gameItems = new Array();
gameItems[0] = 'sword'
console.log(gameItems[0])
// Konstruktor z elementami
const colors = new Array('red','blue');
console.log(colors[1])

// zawartość tablicy

const differentValues = ['string',20, {}, [1,2], null,Infinity]

const popularName = nameList[2];
nameList[3] = 'Witek';
nameList[2] === "Piotrek"


// tworzenie nowych elementów i modyfikowanie istniejących
nameList[5] = "Kacper" //za pomocą indeksu
// nameList[15] = "Adam" // tworzy się puste miejsca pomiędzy.

// Usuwanie z tablicy
delete nameList[2]; //Usuwa dokładnie tą wartość, ale nie skraca długości tablicy.
typeof nameList[2]; 
// Są też metody usuwające i element i indeks. (skracają tablicę)



// długośc tablicy
const cities = ["Poznań","Kraków","Zamość","Lublin","Rzeszów","Warszawa","Wrocław","Gdańsk"];
cities.length;

const users = [];
users.length;

// Wykorzystanie długości
const longArray = [];
longArray.length = 100;

cities[cities.length-1]; //ost. element

//dodanie na koniec
cities[cities.length] = "Tokio";

// Powiększenie zmniejszenie i zerowanie tablicy

users.length = 20;
cities.length += 2; //2 empty na koniec
cities.length = 3; //ucina i zostawia tylko indeksy 0,1,2
users.length = 0 //pusta tablica

//Sprawdzenie czy tablica

cities instanceof String;
cities instanceof Number;
cities instanceof Set;
cities instanceof Array;
cities instanceof Object;

Array.isArray(cities);


//Dyreferencja obiektu (nie tylko tablicy)

let letters = ["a",'d'];
let characters = letters; //ta sama tablica, obie zmienne mają tylklo referencje (odnoszą się do tego samego miejsca w pamięci)

//Zostanie usunięta jeśli nie będzie odnośnika/referencji do niej
letters = null;
characters = null;
// letters = characters = null;


// Ciekawostka - stworzenie wielu zmiennych w oparciu o zawartość tablicy i obiektu.

const [nameUser, idUser, ageUser] = ["Sławoj",210,54];

const game = [120.12, 87, "dobry wujek"];
let [time, points, name] = game;
console.log(game)



