//Losowanie dowolnego przedziału

Math.random() * 7; //od 0 do 7 (bez 7)

// od  4 do 6, ale bez 6
// x>=4 i x <6

Math.random() * (6-4) + 4; // ??? Why? Słabo wytłumaczone na tym etapie

//Funkcja uniwersalna
const numberRandom = (min,max) => {
    const number = Math.random() * (max - min) + min;
    return number
}
//min po plusie zapewnia minimalną wartość, nawet jak nawias będzie przez 0 mnożony bo tak wylosuje, a nawias średnio rozumiem, prawdopodobnie określa wielkość przedziału do losowania????
//Funkcja w razie co w JQ_cdn.txt


//od do z całkowitymi
//od 4 do 6 wliczając 6.  -> 4,5,6
// x >=4 i x <=6

Math.floor(Math.random() * (6 - 4 + 1) + 4);

const numberRandomInt = (min,max) => {
    const number = Math.floor(Math.random() * (6 - 4 + 1) + 4);
    return number
}