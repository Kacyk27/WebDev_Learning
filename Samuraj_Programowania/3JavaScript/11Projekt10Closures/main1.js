// function x() {
//     let number = 0;
//     function y() {
//         console.log(number);
//         number++
//     }
//     return y
// }

// const example = x();

// example();
// example();

// let number = 0;

// const add = () => {
//     number++;
//     document.body.textContent = `Stan licznika: ${number}`;
// }

// document.addEventListener('click', add);

//Closure to mechanizm który pomaga uzyskać dostęp do danej wartości poza funkcją i gdy ta funkcja nie jest już aktywna.

// Closure - zmienna istnieje w danej funkcji mimo, że funkcja, w której była stworzona ta zmienna nie jest już aktywna.

// W pamięci programu zmienna istnieje jeśli prowadzi do niej referencja z innej funkcji. Możemy mieć do niej dostęp, ale także je zmieniać.

const add = (start = 0) => {
    let number = start;
    return () => {
        number++;
        document.body.textContent = `Aktualny stan licznika: ${number}`
    }

}
const counter = add()
const counterFrom5 = add(5)
document.addEventListener('click', counterFrom5)