const names = [];
const div = document.querySelector('div');


const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value;

    if (input.value.length) {
        for(name1 of names) {
            if(name1 ===newName) {
                alert('to już jest');
                return
            }
        }
        names.push(newName);
        console.log(names);
        div.textContent += newName + ", ";
        input.value = '';
    }
}

document.querySelector('button').addEventListener('click', addName);