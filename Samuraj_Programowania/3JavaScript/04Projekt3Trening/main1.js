let font = 10;
const button = document.querySelector('button');
const items = document.querySelectorAll('li');



// button.addEventListener('click', function() {
//     for (let i=0; i<items.length; i++){
//         items[i].style.display = 'block';
//         items[i].style.fontSize = `${font}px`
//     }
//     font++;
// })


//FOREACH
button.addEventListener('click', () => {
    items.forEach((liItem) => {
        liItem.style.display = 'block';
        liItem.style.fontSize = `${font}px`;
    })
    font++;
})