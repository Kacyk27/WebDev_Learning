const button = document.querySelector('button');

let i =1

const addLiPosition = function() {
    const li = document.createElement('li');
    li.textContent = i;

    if (i % 3 == 0) {
        li.classList.add('higher');
    }
    document.body.querySelector('ul').appendChild(li);
    i+=2;
}


button.addEventListener('click', addLiPosition)