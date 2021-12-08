const startBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
const panel = document.querySelector('.time div');
let idI;

let active = false;
let time = 0

const startStop = () => {
    if(active === false) {
        active = !active;
        startBtn.textContent = "Stop";
        idI = setInterval(start,10);
    } else {
        active = !active;
        startBtn.textContent = 'Start';
        clearInterval(idI);


    }
}

const start = () => {
    time++
    panel.textContent = (time/100).toFixed(2);
}

const resetTime = () => {
    time = 0;
    panel.textContent = '---';
    active = false;
    startBtn.textContent = 'Start';
    clearInterval(idI);
    
}
startBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', resetTime)

