const userName = 'Tomasz Niewierny';
const userName2 = 'Mieszko I';
const userName3 = 'Jaś Fasola';

const secondLetter = userName[1];
//jak z tablicy

//tworzenie instancji/obiektu string

const objUserName = new String(userName);
const primitiveUserName = userName;

//typ prosty
const emptyString = "";

typeof objUserName;
typeof primitiveUserName;

const stringExample = new String("dasasd");
const stringExample2 = new String(200.2); //'200.2'

const userNameUpperCase = userName.toUpperCase();

userName.length;
userName['length'];

//pobranie konkretnego znaku
userName.charAt(2);
userName[2];

userName.concat(' - fajne imię!')
userName + " - fajne imię!";
`${userName} - fajne imię!`;
// ostatnia opcja like python f.

//Który indeks ma dany znak i czy występuje
userName.indexOf('d'); //-1 czyli nie ma

//czy znak występuje w stringu
userName.includes("O");
userName.includes("o");


//pozbywa się białych znaków na początku i końcu łańcucha
const afterTrim = "    słowo   ".trim() // 'słowo'

//skopiuj łanuch tyle razy ile podamy w argumencie
const repeatString = 'word'.repeat(5);

//zwrócenie slice
const slideWord = userName.slice(1,2); //index start + indeks końcowy, wycina od A bo B-1.

const singleQuoteExample = 'i\'m Magda' /// (\)

const slash = 'ktos\\cos' //aby w teksie byl backslash musi być 2 razy
const longText = 'tekst \n tekst'

const superText = `tekst
tekst w nowej linii i cudzysłów " i apostrof '` //zachowuje formatowanie

//konwersja innego typu na stringa

200..toString()
String(100000)
//wskazanie systemu
200..toString(16)

//Sztuczka z niejawną konwersją

''+200;
''+true;

//Zapamiętać o właściwościach string z boolean i konwersji string na boolean

//Tylko pusty string jest jako false
Boolean("")//false
Boolean(" ")//true

