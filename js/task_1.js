// Задача о палиндроме: напишите функцию, которая проверяет, является ли заданная строка палиндромом.
// Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра»).

const checkIsPalindrom = (str) => {
    //Регулярное выражение для всех возможных знаков пунктуации
    const punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;

    const characters = str.toLowerCase() // преобразование строки в нижний регистр
        .replace(punctRE, '') // замена всех пунктуаций в строке на пустую строку
        .split('')            // преобразование сторки в массив символов
        .filter(el => el !== ' '); // фильтрация массива (возвращаем массив символов без пробелов)

    const halfLength = Math.floor(Number(characters.length / 2)); // половина длины массива

    for (let i = 0; i < halfLength; i++) {
        if (characters[i] !== characters[characters.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// console.log(checkIsPalindrom('"Пустите!" - Летит супу миска Максиму. - "Пустите, летит суп!"'));
// console.log(checkIsPalindrom('Кот учен, но как он нечу?ток.'));
// console.log(checkIsPalindrom('"Пустите!" - Летит супу миска Максиму.'));
// console.log(checkIsPalindrom('Кот учен, но как он неч.'));
// console.log(checkIsPalindrom("а"));

export {checkIsPalindrom};
