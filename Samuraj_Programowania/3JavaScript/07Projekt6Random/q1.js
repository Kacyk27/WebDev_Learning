const options = ['ucz się','walcz'];

const dodaj = document.querySelector('.add');
const input = document.querySelector('input');

const addOption = (e) => {
    e.preventDefault();
    const val = input.value;
    options.push(val);
    alert(`Dodano opcję "${val}"`);
    input.value = '';
    console.log(options);
}

dodaj.addEventListener('click', addOption);

const reset = document.querySelector('.reset');

reset.addEventListener('click', function() {
    options.length = 0;
    document.querySelector('h1').textContent = ''
})

const rada = document.querySelector('.rada');

const showAdvice = () => {
    const number = Math.floor(Math.random()* options.length);
    const h1 = document.querySelector('h1');
    h1.textContent = options[number];
}

rada.addEventListener('click', showAdvice)

const optionsAlert = document.querySelector('.opcje');

optionsAlert.addEventListener('click', function() {
    alert(`Możliwości: ${options}`);
});
