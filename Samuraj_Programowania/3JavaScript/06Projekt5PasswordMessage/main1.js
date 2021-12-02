const input = document.getElementById('pass');
const div = document.querySelector('.message');

const passwords = ['user','wiosna'];
const messages = ['Wiadomość odebrana','piękna pora roku'];




input.addEventListener('input', (e) => {
    div.textContent = ''

    // console.log(e.target.value);
    // console.log(this.value); //funkcja strzałkowa nie posiada this'a, zamiast tego podstawia 'window'
    const text = e.target.value
    
    passwords.forEach((password,index) => {
        if(password===text) {
            div.textContent = messages[index]
        }
    })


})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active')
})
input.addEventListener('blur', (e) => {
    e.target.classList.remove('active')
})








    // if(password===e.target.value) {
    //     div.textContent = message;
    //     e.target.value = '';
    // } else {
    //     div.textContent = "";
    // }