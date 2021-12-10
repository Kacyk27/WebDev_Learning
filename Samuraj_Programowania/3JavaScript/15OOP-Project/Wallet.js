class Wallet {
    constructor(money) {
        let _money = money;

        // Pobieranie zawartości portfela
        this.getWalletValue = () => {
            return _money
        }

        // Sprawdzenie czy uzytkownik ma wystarczająco środków
        this.checkCanPlay = (value) => {
            if(money >= value) {
                return true;
            } else {
                return false;
            }
        }

        // Zmiana zawartości portfela
        this.changeWallet = (value, type ='+')=> {
            if (typeof value === 'number' && !isNaN(value)) {
                if (type === '+') {
                    return _money += value;
                } else if (type === '-') {
                    return _money -= value
                } else {
                    throw new Error('nieprawidłowy typ działania.')
                }
                
            } else {
                throw new Error('nieprawidłowa liczba.');
            }
        }
    }

}

// const wallet = new Wallet(200)