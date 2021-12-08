const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor')
const txt = ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ex doloremque, adipisci, eum harum omnis error quaerat, nesciunt repudiandae numquam animi. Nihil sint suscipit odio neque vel ipsum odit consequuntur?'

//parametry
let indexText = 0;
const time = 40

//implementacja
const addLetter = () => {
    spnText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) {
        clearInterval(indexTyping)
    }
}

const indexTyping = setInterval(addLetter, time);

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

setInterval(cursorAnimation, 400)


