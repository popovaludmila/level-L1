// Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.

const student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null,
    friend: {
        name: 'John',
        age: 30,
        isAdmin: false,
        courses: ['html', 'css', 'js'],
        wife: null
    },
    birthDay: new Date(Date.UTC(1985, 3, 5)),
    getAge: function () {
        const ageDate = new Date(Date.now() - this.birthDay.getTime());
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
};

const array = ["abcd", {name: 'John', age: 30, isAdmin: false, courses: ['html', 'css', 'js'], wife: null}, 111];

console.log(JSON.stringify([123, 4, "fef"]))
const stringify = JSON.stringify(array);
const parse = JSON.parse(stringify);
console.log(stringify);
console.log(parse);

const punctREforNumber = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&,\\:;<=>?@\[\]^_`{|}~]/g; // без знаков + - * / ()
const firstCharKeyPunctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#%&()*+,\-.\/:;<=>?@\[\]^`{|}~]/g; // кроме $ _
const firstCharNumberRE = /[*/]/g;
const strRE = /[a-zA-Z]+/g;
const numberRE = /^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/gm;

const a = "[\"abcd\",{\"name\":\"John\",\"age\":30,\"isAdmin\":false,\"courses\":[\"html\",\"css\",\"js\"],\"wife\":null},111]";

function parseJSON(str) {
    const arr = str.split(",")

    if(arr.length === 0) {
        return;
    }

    // for(let i = 0; i < arr.length; i++ ) {

    // }

   return arr;
};

console.log(parseJSON(a));

function stringToNumber(str) {
    if (firstCharNumberRE.test(srt[0]) && strRE.test(str) || punctREforNumber.test(str)) {
        return stringToString(str);
    }
    return Number(str);
}

function stringToString(str) {
    return String(str);
}

function stringToBoolean(str) {
    if (str === "false") {
        return Boolean(0);
    }
    return Boolean("true");
}

function checkKeyArray(str) {
    if(numberRE.test(str[0])) {
        return;
    }

    if(firstCharKeyPunctRE.test(str[0])) {
        return;
    }
}
