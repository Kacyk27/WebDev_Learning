document.body.style.height = '10000px';
const div = document.createElement('div');
document.body.appendChild(div);
div.style.width = 100+'%';
div.style.position='fixed';
div.style.left=0;
div.style.top=0;
// div.style.backgroundColor ='green';
let size = 10;
div.style.height=`${size}px`

let flag=true
const changeHeight = function() {
    if (size>=window.innerHeight/2) {
        flag = false;
    }
    else if(size==0){
        flag=true;
    }


    if(flag) {
        size += 2;
        div.style.height=`${size}px`;
        div.style.backgroundColor = 'green';
    }
    else {
        size -= 2;
        div.style.height=`${size}px`;
        div.style.backgroundColor = 'red';
    }
}

document.addEventListener('scroll',changeHeight);
