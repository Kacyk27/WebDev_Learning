const navi = document.querySelector("nav");
const arrow = document.querySelector(".arrow");
const ifas = document.querySelector(".fas");

arrow.addEventListener("click", function() {
    navi.classList.toggle("on");
    arrow.classList.toggle("on");
    ifas.classList.toggle("on");
})