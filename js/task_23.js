// Анализатор сложности пароля: создайте функцию, которая оценивает сложность введенного пользователем пароля. 
// Необходимо анализировать длину пароля, использование различных символов, 
// наличие чисел и букв в разных регистрах. 
// Выведите пользователю оценку сложности пароля и предложите улучшения, если пароль слишком слабый.

const punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
const numberRE = /^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/gm;

let complexity = 0;

const containsSymbol = (password) => {
    return punctRE.test(password);
};

const containNumber = (password) => {
    return numberRE.test(password);
};

const checkCase = (password) => {
    return password === password.toUpperCase();
}

const checkPasswordLength = (password) => {
    const length = password.length;

    if (length <= 5) {
        return complexity += 1;
    }

    if (length > 5 && length < 10) {
        return complexity += 2;

    }
    return complexity += 3;
}

const showNotice = () => {
    if (complexity >= 5) {
        return console.log(`Пароль надежный`)
    }

    if (complexity < 2) {
        return console.log(`Пароль ненадежный. Придумайте новый пароль.`)
    }

    return console.log(`Надежность пароля средняя`);
};

const analyzePassword = (password) => {
    checkPasswordLength(password);

    if (containsSymbol(password)) {
        complexity += 1;
    }

    if (containNumber(password)) {
        complexity += 1;
    }

    if (checkCase(password)) {
        complexity += 1
    }

    return showNotice();
};

console.log(analyzePassword('a'));

console.log(analyzePassword('a2'));

console.log(analyzePassword('a5t4!'));

console.log(analyzePassword('agfd!bvsdSvdv'));


