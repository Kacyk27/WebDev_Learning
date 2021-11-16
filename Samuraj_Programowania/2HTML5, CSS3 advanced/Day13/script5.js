const burger = document.querySelector(".burger");
const activeElement = document.querySelectorAll(".active");

burger.addEventListener("click", function() {
    for(let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle("show")
    }
})


// $(".burger").on("click", function() {
//     $(".fas, .wrapper").toggleClass("show");
//     $("aside").toggleClass("show");
// })


// Tutaj rozwiązanie jakie już znam, wyżej bardziej zaawansowane.
// const burger = document.querySelector(".burger");

// const iconBurger = document.querySelector(".fa-bars");
// const iconX = document.querySelector(".fa-times");
// const column = document.querySelector("aside");
// const wrapper = document.querySelector(".wrapper");

// burger.addEventListener("click", function() {
//     iconBurger.classList.toggle("show")
//     iconX.classList.toggle("show")
//     wrapper.classList.toggle("show")
//     column.classList.toggle("show")
// })

