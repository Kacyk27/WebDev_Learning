const button = document.querySelector('button');

let i=1;

const addElement = function() {
    const div = document.createElement('div');
    div.textContent = i;

    if (i % 5 == 0) {
        div.classList.add('circle')
    };

    document.body.appendChild(div);
    i++;
};

button.addEventListener("click", addElement);

