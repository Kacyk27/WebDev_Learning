//CZĘŚĆ I

// 'use strict' //tryb ścisły z ES5, ale w ES6 np klasa ma to w sobie już. Można stosować, ale nie jest wymagane.
// //THIS

// this // obiekt globalny?

// const fn = function() {
//     // this.a = 5;
//     console.log(this.name);
// }

// // fn();

// const obj = {
//     name: 'Adam',
//     showName:fn,
// }

// const fun = fn;


// // fun();
// obj.showName();

// const outside = obj.showName;
// // outside(); //nie działa

// document.addEventListener('click', function() {
//     console.log(this);
//     const inside = function() {
//         console.log(this);
//     }
//     inside();
// })



// CZĘŚĆ II

function showName() {
    console.log(this.name)
}

const karol = {
    name: 'karol',
    showName: showName
}

const tatiana = {
    name: 'tatiana',
    showName: showName
}

// karol.showName();
// tatiana.showName();

// function one() {
//     this.name = 'pierwsza';
//     return this.name;
// }
// one();

// const obj1 = {
//     two:one,
//     four : function() {
//         console.log(this);
//     }
// };

// obj1.two();

// const three = obj1.two;
// three();

// const five = obj1.four;
// five();

//Wiązanie THIS powstaje w momencie wywołania funkcji, dlatego małe znaczenie ma miejsce stworzenia. Czasami nielogiczne wyniki wychodzą bo myślimy o miejscu stworzenia/deklaracji funkcji

//Reguły dlaczego i jakie wiązanie this ma w różnych sytuacjach

//Po 1 wiązanie domyślne - gdy inne nie występują, wtedy do globalnego wiąże, chyba że jest tryb ścisły


const thisExample = function() {
    // 'use strict';
    console.log(this.example, this)
    const inside = function() {
        console.log(this.example, this)
    }
    inside();
}

thisExample();


//Wiązanie niejawne


const user = {
    age:45,
    showName() {
        console.log(this.age);
    },
    showName2: function() {
        console.log(this.age)
    }
}

user.showName();

const stefan = {
    age:20,
    showName: user.showName
}

stefan.showName();

//wiązanie jawne
//mówimy z czym ma wiązać, za pomocą metody call i apply

const human = {
    pesel:20202020210,
}

const showPesel = function() {
    console.log(`Twój pesel to : ${this.pesel}`);
}

showPesel.call(human);


const showUser = function(name) {
    console.log(`użytkownik ${name} ma : ${this.pesel}`);
}

showUser.call(human, 'Tomasz');
//czyli schemat mniej więcej taki:
// funkcja.call(obiekt)
// dzięki temu : this = obiekt
// funkcja() i zadziała


//Wiązanie TWARDE
//Czyli na stałe.



const showPeselUser = showPesel.bind(human);
showPeselUser();

class User {
    constructor(name) {
        this.name = name
    }
}

const stasiek = new User('stasiek');
//Tutaj this samo w sobie zawsze będzie się odnosić do konstruktora, logicznie jak self w pythonie.

//Arrow function a this
//Nie tworzy, tylko dziedziczy. Czasem +, czasem -.

const cat = {
    age:45,
    showAge() {
        console.log(this.age)
    },
    showAge2() {
        console.log(this.age);
    }
}

cat.showAge();
cat.showAge2();

