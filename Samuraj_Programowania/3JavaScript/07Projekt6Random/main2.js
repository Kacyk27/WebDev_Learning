const chars = 'ABCDDEFGHIJK0123456789';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 1000;
const charsNumber = 12;
let x=1;

const codesGenerator = () => {
    for(let i=0; i<codesNumber; i++) {
        let code = `${x}. `
        for (let i=0; i<charsNumber; i++) {
            code += chars[Math.floor(Math.random() * chars.length)]
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div)
        x++;
    }
    
}


btn.addEventListener('click', codesGenerator);
