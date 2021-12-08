const btn = document.querySelector('button');
const div = document.querySelector('div');
const names = ["Asia","Jagienka","Daria","Kira","Marysia","Antosia","Arielka","Janka"];

// const index = Math.floor(Math.random() * 7) //w ten sposób losuje od 0 do ~6.999999... ale floor ucina wszystko co jest po przecinku

const nameGenerator = () => {
    const index = Math.floor(Math.random() * names.length);
    div.textContent = `Wylosowane imię to: ${names[index]}`
}

btn.addEventListener('click', nameGenerator)