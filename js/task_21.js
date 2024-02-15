// Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari (если есть возможность).

let count = 0; // переменная, показывающая сколько раз вызвалась функция
let countTwo = 0; // переменная, показывающая сколько раз вызвалась функция, если в ней объявлена переменная
const sizeOfVar = 8; // количество байт, которые занимает переменная в памяти.
let k;  // количество объявленных переменных в теле функции


const func = () => {
    count++;

    func();
};

const funcTwo = () => {
    let i;
    countTwo++;

    funcTwo();
};

try {
    func();
} catch (err) {
    console.log(count);
}

try {
    funcTwo();
} catch (err) {
    console.log(countTwo);
}

// количество байт, которое занимает функция
const calcFunctionSize = (count, countTwo, k1, k2) => {
    const result = sizeOfVar * (k2 * countTwo - k1 * count) / (count - countTwo);

    return result;
}

const functionSize = calcFunctionSize(count, countTwo, 0, 1)


console.log(calcFunctionSize(count, countTwo, 0, 1));

const calcCallstackSize = (k1, count) => {
    const size =( functionSize + k1 * sizeOfVar) * count;
    return size;
}

console.log(calcCallstackSize(0, count));



// Safari: count = 45 605, countTwo = 39 905, functionSize = 56.00701754385965, calcCallstackSize = 2 554 200.035087719
// Chrome: count = 13 956, countTwo = 12 560, functionSize = 71.97707736389685, calcCallstackSize = 1 004 512.0916905445
// Opera: count = 13 922, countTwo = 12 530, functionSize = 72.01149425287356, calcCallstackSize = 1 002 544.0229885057
// Firefox: count = 26 546, countTwo = 26 236, functionSize = 677.058064516129, calcCallstackSize = 17 973 183.38064516

//https://habr.com/ru/articles/550534/