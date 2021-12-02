const square = document.createElement('div');
document.body.appendChild(square);

let size = 10; //wielkość kwadratu

let grow = true

square.style.height = size + 'px';
square.style.width = `${size}px`;

window.addEventListener('scroll', function () {

    if(size >=window.innerWidth/2) {
        grow = false;
    }
    else if (size == 10) {
        grow = true;
    };
    
    if (grow==true) {
        size += 4;
        square.style.width = size + 'px'
        square.style.height = size + 'px'
    }
    else {
        size -= 4;
        square.style.width = size + 'px'
        square.style.height = size + 'px'
    };


});