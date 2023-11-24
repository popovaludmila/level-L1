// Подсчитать максимальный объем данных, который можно записать в localStorage вашего браузера.

let count = 0;


const setItem = () => {
    while(true) {
        count++;
        window.localStorage.setItem(count, count);
    }
}

const getLocalStorageSize = () => {
    let total = 0;
  
    for (let x in localStorage) {
        //Значение умножается на 2 из-за того, что данные хранятся в формате `utf-16`, 
        //который требует в два раза больше места.
        let amount = (localStorage[x].length * 2) / 1024;
        if (!isNaN(amount) && localStorage.hasOwnProperty(x)) {
            total += amount;
        }
    }
    return total / 1024;
};

try {
    setItem()
} catch (err) {
    console.log(` size: ${getLocalStorageSize()} mb`);
}

export {getLocalStorageSize};