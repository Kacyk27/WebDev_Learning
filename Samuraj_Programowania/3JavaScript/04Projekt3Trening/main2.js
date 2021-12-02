let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    btn.style.fontSize = '22px'
    btn.textContent = 'Dodaj 10 elementów'
    document.body.appendChild(btn);

    const btnReset = document.createElement('button');
    btnReset.style.fontSize = '22px';
    btnReset.textContent = 'Reset';
    document.body.appendChild(btnReset)

    const ul = document.createElement('ul');
    ul.style.listStyle = 'none'
    document.body.appendChild(ul)
    btn.addEventListener('click', createLiElements)
    btnReset.addEventListener('click', cleanList);
}

const createLiElements = () => {
    for (let i = 0; i<10; i++) {
        const li = document.createElement('li');
        li.textContent = `Element nr ${orderElement}`;
        orderElement++;
        li.style.fontSize = `${size}px`;
        size++;
        document.querySelector('ul').appendChild(li);
    }

}

const cleanList = () => {
    document.querySelector('ul').textContent=''
    size = 10;
    orderElement = 1;
}

init();
