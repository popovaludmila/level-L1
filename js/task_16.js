// Задача на модули и использование внешних библиотек: 
// напишите модуль, который экспортирует функцию для работы с датами. 
// Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами.

import { getPluralWord } from "./task_4.js";

// Функция для вычисления точного возраста человека
// На вход получает дату рождения

const getAge = (d) => {
    const punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    const date = d.replace(punctRE, '');

    moment.locale("ru");
    const birthdayOfWeek = moment(date, "DDMMYYYY").format('dddd');
    const month = date.slice(2, 4);
    const year = date.slice(4, 8);
    let age = moment(date, "DDMMYYYY").fromNow();
    
    if (Number(month) < 6) {
        age = `${getPluralWord(Number(age.slice(0, 2)) - 1, "год", "года", "лет")} назад`;
    }

    return `Вы родились в ${year} году, ${age}. День недели, когда вы родились - ${birthdayOfWeek}`;
};

export { getAge };

