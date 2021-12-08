const user = (name = '', age) => {
    let userName = name;
    let userAge = age;

    function showName() {
        console.log(`Cześć ${userName}, ${userAge >= 18 ? "Możesz kupić piwo": "Nie możesz kupić piwa."}`)
    }

    return showName
}

const mieszk = user('Mieszko',16);

mieszk();

const user1 = user('Piotrek', 20);
user1()