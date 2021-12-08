//Sposób I
//getter i setter, podobne jak w pythonie tylko nie jako dekorator

class Cat {
    constructor(color) {
        this._color = color;
    }
    // metoda pobierająca zawartość _color
    getColor() {
        return this.color;
    }
    //Metoda ustawiająca kolor
    setColor(value) {
        if(typeof value === "string"){
            return this._color = value;
        } else{
            console.log('wartość niepoprawna')
        }
    }
}

const kotek = new Cat('czarny')
kotek.color

//Sposób II
//Closure - domknięcia

//Przykład I

class Dog {
    constructor(name,color) {
        this.name = name;
        let _color = color;
        this.getColor = () => {
            return _color;
        }
        this.setColor = (color) => {
            _color = color;
            return _color;
        }
    }
}

const fafik = new Dog('fafik', 'brązowy')

//Przykład II

class Car {
    constructor(name, counter = 100000, year = 2000) {
        this.name = name;
        let _counter = counter;
        let _year = year;
        let _changeNumber = 0;

        this.getYear = function() {
            return _year;
        }
        this.getYear = () => _year;
        
        this.setCounter = function(value) {
            _changeNumber++;
            return _counter = value;
        }

        this.getCounter = function() {
            if(_changeNumber) alert(`uważaj, licznik zmieniony ${_changeNumber} razy`)
            return _counter
        }
        this.showCarAge = function(year) {
            return year - _year;
        }
        
    }

}

const polonez = new Car('polonez',25000,2009);