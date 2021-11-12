// deklaracja stałych zmiennych
const powiekszenie = document.querySelector(".bigger");
const pomniejszenie = document.querySelector(".smaller");
const text = document.querySelector("p");

// Określenie potrzebnych danych

let textSize = 20;

// parametry początkowe
text.style.fontSize = textSize + "px";
text.style.backgroundColor = "#ddd";




// Funkcje
function textUp() {
    textSize++;
    text.style.fontSize = textSize + "px";
}

function textDown() {
    textSize--;
    text.style.fontSize = textSize + "px";
}

// Ustalenie nasłuchiwania
powiekszenie.addEventListener("click", textUp);

pomniejszenie.addEventListener("click", textDown);
