// Operatory

2 + 2; //4
'2' + '2'; //22
'2' + 2; //22
2 + true; //3, true czyli +1, false czyli -1
2 * '2' //4
'2' + true // 2true

// operator może być znakiem, słowem: typeof, delete, new;
typeof 1200;

// Podział operatorów ze względu na ilość argumentów
let result;
result = 1; //przypisanie, 2arg
result++; //inkrementacja, 1arg
++result; //preinkrementacja. (wyświetli wynik w konsoli odrazu pod zmienną, a nie w kolejnej komórce)

// Operatory są matematyczne i logiczne, powtórka z pythona trochę, nawet nie notuję.

// ciekawostka:
'2' == 2; //dokonuje konkwersji typów i dopiero porównuje
'2' === 2; // nie dokonuje konkwersji typów

// logiczne zaprzeczenie (negacja)
!('coś'); //zamienia na odwrotny i zwraca true/false
!!(2); //podwójna negacja, po prostu zwraca true false
!!200;
//suma logiczna (logiczne 'lub')
true || false;
false || true;
true || true;
false  || false;
(true || false);
(null || 200);
//iloczyn logiczny (logiczne 'i')
true && false;
200 && 0;
"1" && "2";
"1" && "";
(20>10&& 10 <20)

// Kolejność operatorów
2+3*5;
(2+3) *5;
'2'+3*5;

// Operator warunkowy trójargumentowy - na teraz ciekawostka
// warunek? zrobToJakPrawda : zrobToJakFałsz

3>2 ? "tak": "nie"
