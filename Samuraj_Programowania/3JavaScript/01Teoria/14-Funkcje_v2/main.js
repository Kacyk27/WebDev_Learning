//wartości domyślne w funkcji (ES6)

//jeśli nie wprowadzimy argumentu - będzie domyślne.
//Tworzenie z fat arrow
const addTwoNumbers = (x=2, y=4) => {
    const result = x+y;
    console.log(result);
    return result;
}


//Deklaracja - to samo ale inne tworzenie

// const addTwoNumbers = function (x=0,y=0) {
//     const result = x+y;
//     console.log(result);
//     return result;
// }
//Bez domyślnych byłoby undefined

//-----------------------------------

//callback
//funkcja wywołania zwrotnego, czyli funkcja jako argument.


//przykład1
function count(x,callback) {
    return callback(x)
}

function addOne(number) {
    number++;
    console.log(number);
    return number;
}

function substractOne(number) {
    number--;
    console.log(number);
    return number;
}

// const result = count(5,addOne)
count(10,addOne)


//przykład2

window.addEventListener("click", function() {
    console.log("click")
})

//przykład3
setInterval(() => console.log("minęły 2 sekundy"), 2000)

// przykład4

const userAge = [20,30,21,17,67,96,55];
userAge.forEach(userAge => console.log(`Wiek użytkownika to ${userAge}`));
userAge.forEach(function(userAge) {
    console.log("Wiek użytkownika too  "+userAge);
});

/*------------------------------------------------*/
// Arguments - być może nie będzie tak często używane, ale warto wiedzieć że istnieje. Podobny do tablicy ale nią nie jest. Jest to obiekt arguments który zawiera aktualną listę argumentów przekazanych do tablicy.

const showArguments = function() {
    console.log(arguments); //nazwa przypisana
    console.log(arguments.length); // długość
    console.log(arguments[0]); //odwołanie do konkretnego argumentu
    console.log(typeof arguments); //obiekt tablicopodobny. Ma właściwość length, można odwołać się za pomocą notacji tablicowej. np. arguments[2]. Nie ma metod znanych z tablicy
    console.log(Array.isArray(arguments)); 
}

// showArguments('5',null,{})

//wykorzysastanie w praktyce
const addAllNumbers = function() {
    let result = 0;
    for (let i=0; i<arguments.length;i++) {
        result += arguments[i];
    }
    return result;
}

const usersMoney = addAllNumbers(3,2,200,1,3);
console.log(addAllNumbers(19,11.1,29,-32));

/*---------------------------------------------------------*/

// Jak sprawić by funkcja zachowywała się inaczej przy różnych argumentach

function showInfoAboutUser(age,name,sex) {
    if (arguments.length===0) {
        console.log("Brak danych");
    }
    else if (arguments.length ===1) {
        console.log("Użytkownik ma podany tylko wiek: " +age)
    }
    else if (arguments.length ===2) {
        console.log("Użytkownik ma podany tylko wiek: i imię " +age + " " + name)
    }
    else {
        console.log(`Użytkownik ma ${age} lat, na imię ${name} i jest płci: ${sex}`)
    }
}

/*------------------------------------------------- */









