// window.addEventListener("scroll", function () {
//     console.log("skrolujesz!")
// })

// konkatenacja - łączenie stringów
// document.addEventListener("scroll", function() {
//     console.log("skrolujesz o " + window.scrollY + "px")
// })

// użycie funkcji zadeklarowanej

// function showScrollSize() {
//     console.log("skrolujesz o " + window.scrollY + "px")
// }

// window.addEventListener("scroll", showScrollSize)

const spanResult = document.querySelector("span");

document.addEventListener("scroll", function() {
    spanResult.textContent = window.scrollY;
})


let counter = 0;

const spanCounter = document.querySelector("span.counter");

const dodaj = document.querySelector("button:nth-of-type(1)");
const odejmij = document.querySelector('button:nth-of-type(2)');

dodaj.addEventListener("click", function () {
    counter += 1;
    spanCounter.textContent = counter;
})

odejmij.addEventListener("click", function () {
    counter -= 1;
    spanCounter.textContent = counter;
})

