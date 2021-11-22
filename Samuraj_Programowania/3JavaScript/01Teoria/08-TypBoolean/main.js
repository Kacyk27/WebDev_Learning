

Boolean(0) //false
Boolean(2 >= 2)
Boolean('cos')
Boolean({})
Boolean(['ktos', 200, false])
Boolean('') //false


//obiekty konwertowane na false
"";
0;
NaN;
// Infinity; błąd, zwraca true
null;
undefined;

//Operatory zwracające typ logiczny - znam.
// negacja logiczna
!false; //true
!0; //true
!200; //false
!true; //false

// podwójna negacja
!!true; //true
!!0; //false
!!""; //false

const userName = "Ścibor";
const userName2 = "";

!!userName;
!!userName2;


// logiczne i oraz lub
let userAge =22;
let userMoney = 10.2;
let beerPrice = 9;
(userAge>=18 && userMoney > beerPrice) //true


const userConnections = "Syn głównej księgowej";
const userExperience = 0;

Boolean(userConnections || userExperience)