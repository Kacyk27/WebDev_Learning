//tablica - metody

const italianUsers = ['Giovani',"Michele",'Angelo','Luigi','Valentina','Marco'];
console.log(italianUsers);


//podstawowe metody, które trzeba znać

//push - dodaj element na końcu (odpowiednij append)
italianUsers.push('Aleksander');
console.log(italianUsers);

//unshift - dodaj na początku tablicy, resztę przesuwa
italianUsers.unshift('Tommaso');
console.log(italianUsers);

//pop - usunięcie ostatniego elementu wraz z indeksem

italianUsers.pop();
console.log(italianUsers);

delete italianUsers[italianUsers.length-1] //zmiana ostatniego indeksu an undefined

//shift - usuwa pierwszy element

italianUsers.shift();
console.log(italianUsers);

//metoda concat

const redColors = ["czerwony",'purpurowy','krwisty','wiśniowy'];
const greenColors = ['zielony', 'trawiasty','zgniła zieleń'];

const redAndGreenColors = redColors.concat(greenColors);
const redGreenBlueColors = redColors.concat(greenColors, ['morski']);

//Nowy sposób od ES6 - operator spread, operator 3 kropek

const colorsCollections = [...redColors, ...greenColors];

//elementy tablicy są pojedyńczo wyjęte.

const colorsCollections2 = [...redColors, ...greenColors, 'morski']

/* --------------------------------------- */
const items = ['zad','bza','asd','sdf', 'fgh', 'ghj','vbn','zxc']

//metoda SLICE
// zwraca nową tablicę która jest częścią pierwotnej, nie wpływa na pierwotną.
items.slice(3); //jeden argument - od 3 indeksu do końca
const newItems =items.slice(1,5); // dwa - od 1 do 5 ale bez 5.
//całą tablicę można pobrać tak
items.slice(0); // ale nie ma to sensu, chyba że do tworzenia kopii z innym miejscem w pamięci.

items.slice(-2); // ile od końca elementów brać. -2 zwróci 2 ostatnie.



/*-----------------------------------------*/

//metoda SPLICE
// zwraca nową tablicę i modyfikuje pierwotną. Jak coś wycinamy to znika z pierwszej. (metoda destrukcyjna)

const animals = ['dog', 'cat', 'canary', 'mouse'];
// animals.splice(1,2) //od którego indeksu, ile elementów. czyli usuwa cat i canary
// animals.splice(2) // usunie wszystkie elementy od index 2, łącznie z tym elementem.
// animals.splice(0) czyści tablicę, tak jak .length = 0

//Splice umożliwia też zastąpienie usuniętych elementów.

animals.splice(3,1,'hamster'); // mysz na chomika
animals.splice(0,2, 'fishes','snake');

// Umożliwia też dodawanie nowych elementów ale są inne opcje.
animals.splice(2,0,"rat");
animals.splice(0,0,"horse","pig","donkey");

//METODA SPLICE ZMIENIA TABLICĘ - było wyżej, ale przypomnienie.

const pets = animals.splice(0,3);

/*-------------------------------------*/

//METODA SORT

//destrukcyjna bo zmienia.
["marek","arek",'zenek'].sort();

animals.sort();
italianUsers.sort()

//METODA indexof
//Szuka elementu o takim indeksie lub zwraca -1 jeśli brak
animals.indexOf('canary');
['Arek',22, null, 22].indexOf(22);
['Arek',22, null, 22].lastIndexOf(22);
['Arek',22, null, 22].indexOf('Are');//-1



/*-------------------------------------*/



//metoda includes

animals.includes('rat');
animals.includes('canary');

[20,22,120,120].includes('22');
[20,22,120,120].includes(120);

/*-------------------------------------*/

//metoda join
//tworzy stringa z elementów listy, oddzielając przecinkami

items.join();
items.join('----');

items.join(' - 10 lat w obozie pracy');

/*-------------------------------------*/

//metoda reverse
//destrukcyjna, odwraca kolejność

animals.reverse();
items.reverse();

/*-------------------------------------*/

//Metoda split
//można wykonać na string, a tworzy tablicę

'Marek Adam Justyna Teresa'.split("");
'Marek Adam Justyna Teresa'.split(" ");
'Marek Adam Justyna Teresa'.split(" ",2); //podzieli i zwróci listę o tylu elementach ile wynosi 2 argument


