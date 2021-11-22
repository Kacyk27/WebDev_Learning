//Operator rest (ES6) - wiele elementów podanych jako argumenty do jednej tablicy.

// ...nazwa (dowolna)
// Zwraca tablicę (arguments nie)

function showAllArguments(...args) {
    console.log(args);
    // console.log(arguments);
    return args;
}

showAllArguments('1',2,12,'ab',true,'Adam');

function addAllWords(...words) {
    let txt = '';
    // for (let i =0; i < words.length;i++) {
    //     txt += `${words[i]}.`;
    // }
    words.forEach(word => txt += `${word} `);
    console.log(txt);
}

addAllWords('ja','ty',2,'Gdańsk')


function showUsers(owner,...others) {
    txt=''
    console.log(`Na imprezie był ${owner} ${others.length ? "oraz " + others + ".":"."}`)
}

showUsers("Maciek");
showUsers("Maciek","Wojtek","Heniek")


//--------------------------------------------

//Metody a funkcje

const objectExample = {
    showName: function() {
        console.log('Jan');
    }, //to jest tworzenie metod.
    showAge() {
        console.log(30);
    }
}

objectExample.showName();
objectExample.showAge();

const showName = function() {
    console.log("Jan");
}

showName();














