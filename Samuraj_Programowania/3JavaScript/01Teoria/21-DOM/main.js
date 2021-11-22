//Czym jest DOM

//reprezentacja dokumentu HTML w przeglądarce
// elementy strony są węzłami które mogą być pobrane, modyfikowane. Można też usuwać węzły i tworzyć nowe.
// Struktura DOM przypomina drzewo, na szczycie jest obiekt document
// DOM nie jest częścią JS, ale JS umożliwa pracę z DOM

// --------------------------------------


//Pobieranie elementów ze strony:

// Właściwości obiektu document
document.documentElement;
document.body;
document.images; //lista pasujących elementów - obiekt

//łatwo tablicę zrobić z tego:
const imgs = Array.from(document.images);
const imgs2 = [...document.images];

//Metody pobierające jeden element
document.querySelector('li:nth-child(2)'); //jak selektor CSS
document.getElementById('first'); //Jako argument przy wywołaniu metody podajemy identyfikator.
const firstElement = document.getElementById('car')
//Obie metody zwracają pierwszy pasujący element chyba że nie ma żadnego to null.

//Metody pobierające wszystkie pasujące elementy

document.querySelectorAll('ul>li'); //nodelist - lista węzłów.
document.getElementsByTagName('li'); //HTMLCollection -starsza generacja, mało oferuje.
document.getElementsByClassName('even');

const liList = document.querySelectorAll('li');

//Jeśli w brakuje nam metod z listy bo w nodelist ich nie ma to konwertujemy sobie na listę.
const liArray = [...liList];
const liArray2 = Array.from(liList);

//pobieranie atrrybutów elementów
const h2 = document.querySelector('h2');

console.log(h2.getAttribute('class'));
console.log(h2.getAttribute('data-color'));
console.log(h2.getAttribute('id'));

const h2Text = h2.textContent;
const h2HTML = h2.innerHTML;

console.log(h2.classList);
h2.classList.contains('title'); //jeśli ma to zwraca true, jak nie - false.


//modyfikacja elementów

const firstLi = document.querySelector('li:first-child');
firstLi.textContent = 'Nowa zawartość tekstowa'; //nadpisanie starej zawartości

firstLi.innerHTML = '<strong>Pogrubienie</strong> i normalnie';

firstLi.style.fontSize = '20px';
firstLi.style.backgroundColor = '#ccc';

firstLi.classList.add('space'); //jest też remove i toggle

firstLi.className = 'one two';
firstLi.id = "";

firstLi.setAttribute('title','Uwaga, ważne');
firstLi.setAttribute('class','sizeX');
//setAttribute nadpisuje, więc nie zawsze jest dobrym rozwiązaniem.

//modyfikowanie wielu elementów
//pobranie

const liItems = document.querySelectorAll('li');

//dla wielu elementów nie ma możliwości użycia .style

// for (leti=0; i < liItems.length; i++) {
//     liItems[i].style.fontSize = '40px';
//     liItems[i].classList.add('red') //rozwiązaniem jest odniesienie do konkretnych elementów poprzez pętlę.
// }
// To był 1 sposób, jest jeszcze forEach

liItems.forEach(function(liItem) {
    liItem.style.textDecoration = 'underline';
    liItem.style.fontSize = '40px';
    liItem.classList.add('red')
})

//NASŁUCHIWANIE I OBSŁUGA ZDARZEŃ

//metoda addEventListener

//przykład

window.addEventListener("dblclick", function(){
    console.log("podwójne kliknięcie");
})

// window.addEventListener("scroll", () => console.log("scroll")) //opcja krótsza

const showScroll = function() {
    console.log("skroll");
}
window.addEventListener("scroll",showScroll)

//przykład next

// document.querySelector('h1').addEventListener("click", function() {
//     this.textContent += "+";
// })

const h1 = document.querySelector('h1')
const addText = function() {
    this.textContent += " :) "
    this.classList.toggle('red');
}

h1.addEventListener("click",addText);

const items = document.querySelectorAll('li');
// dla listy jak wyżej nie zadziała pojedyncze addEventListener.

const addClassRed = function() {
    console.log('klik li');
}

items.forEach((item) => {
    item.addEventListener("click", addClassRed)
})

//Tworzenie i dodawanie elementów do strony.

const liElement = document.createElement('li');
liElement.textContent = 'Ostatni';
liElement.style.backgroundColor = "yellow"
document.querySelector('ul').appendChild(liElement);







