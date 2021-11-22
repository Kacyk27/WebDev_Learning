//DOM - obiektowy model dokumentu

console.log(window);
console.log(window.document);
console.log(document);

window.console.log('w konsoli');

document.title;
document.domain;
document.body;



window.innerHeight; //innerWidth - szerokość

window.scrollY;

//window.alert('popup');

// funkcja setTimeout

// setTimeout(function(){
//     alert("Minęło 5 sekund");
// },5000)


//Przykład 2

const showTime = function() {
    time +=5;
    console.log(`Już ${time} sekund tu jesteś`);
    setTimeout(showTime,5000);
}

let time=0;

setTimeout(showTime,5000)
//to wyżej to alternatywa dla setInterval.


// let timer = 0;
// window.setInterval(() => console.log(++timer),1000);
//działa w nieskończoność przy defaultowych ustawieniach

