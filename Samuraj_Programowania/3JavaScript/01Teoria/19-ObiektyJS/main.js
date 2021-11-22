//OBIEKTY - WPROWADZENIE

// Nieuporządkowana lista właściwości złożonych z nazwy i wartości, tzn key-value. Nazwa jest stringiem, wartość dowolna. Jeśli wartością jest funkcja to mówimy, że dana właściwość jest metodą.

//Tworzenie obiektu

//operator new i konstruktor obiektu.

// 1 - tworzymy obiekt
 const cat = new Object();
 //2 - przypisujemy właściwości

 cat.name = "Gacek";
 cat['age'] = 2; //2 możliwości dodania właściwości.
 cat["eye color"] ='red';
 cat.meow = function() {
     console.log("miau miau śmiertelniku.");
 }
 cat.name = "Mruczek" //zmiana




 //literał obiektu {} - efekt ten sam

const dog = {
    name: 'Fafik',
    age: 9,
    'eye color': 'brown',
    barking: function() {
        console.log('hau hau.');
    },

    //Sposób z ES6:
    squeaking() {
        console.log("aaa uuu eee");
    },
}

//2 możemy ddynamicznie dodawać i zmieniać właściwości.
dog.castrated = true;
dog.childrens = ['bobik','jagódka','muszka'];
dog.castrated = false

//usuwanie:

delete dog.childrens;
delete dog.castrated;

//Przykład1
const result = {
    value:1,
}

function plus() {
    result.value++
}

// /Przykład2
const counter = {
    score:0,

    increment: function() {
        this.score++;
        console.log(this.score); //wykonuje dla obiektu na którym metoda jest wywoływana.
    }
}

counter.increment()













