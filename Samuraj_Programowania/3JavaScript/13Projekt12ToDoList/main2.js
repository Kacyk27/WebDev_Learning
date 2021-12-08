//filter i przypomnienie map

const arr = [34,219,109,2934,12,10,29]

const oddNumbers = arr.filter((number)=> number%2 == 1);
const evenNumbers = arr.filter((number)=> number%2 == 0);
const numbersBiggerThan100 = arr.filter((number)=> number>100);

// Map
const double = arr.map(number => number*2);


//forEach
arr.forEach(number => number*2) //nie zmienia
arr.forEach((number, index) => arr[index] = number*2) // zmienia

//search

const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li')

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter((li) => li.textContent.toLocaleLowerCase().includes(searchText));
    console.log(tasks);
    ul.textContent = '';
    tasks.forEach(li => ul.appendChild(li))
}

input.addEventListener('input', searchTask);


