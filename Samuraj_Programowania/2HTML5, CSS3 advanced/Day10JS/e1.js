const btn = document.querySelector("button");
const paragraph = document.querySelector("p");

// btn.addEventListener("click", function () {
//     console.log("klik!");
//     console.log("działa")
//     paragraph.style.backgroundColor = "red"
// })

// btn.addEventListener("mouseover", function() {
//     console.log("najechanie")
// })

// btn.addEventListener("mousemove", function() {
//     console.log("ruch myszką")
// })

// btn.addEventListener("click", function () {
//     alert("kliknąłeś!")
// })

let clicksNumber = 0;

btn.addEventListener("click", function() {
    clicksNumber++;
    console.log("klik numer: ", clicksNumber)
})