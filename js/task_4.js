// Разработать функцию, изменяющую окончание слов в зависимости от падежа. Например:
//  - 112 сообщений
//  - 12 сообщений
//  - 1 сообщение
//  - 1024 пользователя
//  - 1026 пользователей
//  - 121 пользователь

// 	Функцию надо упаковать в модуль.


const getPluralWord = (number, one, two, multiple) => {
    switch (true) {
        case ((number % 100) >= 10 && (number % 100) <= 20):
            return `${number} ${multiple}`;
        case ((number % 10) >= 2 && (number % 10) <= 4):
            return `${number} ${two}`;
        case ((number % 10) === 1):
            return `${number} ${one}`;
        default:
            return `${number} ${multiple}`;
    }
};

console.log(getPluralWord(112, 'сообщение', 'сообщения', 'сообщений'));
console.log(getPluralWord(12, 'сообщение', 'сообщения', 'сообщений'));
console.log(getPluralWord(1, 'сообщение', 'сообщения', 'сообщений'));

console.log(getPluralWord(1024, 'пользователь', 'пользователя', 'пользователей'));
console.log(getPluralWord(1026, 'пользователь', 'пользователя', 'пользователей'));
console.log(getPluralWord(121, 'пользователь', 'пользователя', 'пользователей'));

export {getPluralWord};