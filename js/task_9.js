// Реализовать функцию конвертации JSON в строку

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

function convertToJSON(el) {
    if (el === null) {
        return nullToJSON(el)
    }

    if (typeof el === "number") {
        return numberToJSON(el)
    }

    if (typeof el === "string") {
        return stringToJSON(el)
    }

    if (typeof el === "boolean") {
        return booleanToJSON(el)
    }

    if (Array.isArray(el)) {
        return arrayToJSON(el)
    }

    if (Object.prototype.toString.call(el) === '[object Object]') {
        return objectToJSON(el);
    }

    if (Object.prototype.toString.call(el) === '[object Date]') {
        return dateToJSON(el);
    }

    return "undefined";
};

function dateToJSON (date) {
    return "\"" + date.toISOString() + "\"";
};

function numberToJSON(number) {
    return "" + number;
};

function stringToJSON(str) {
    return "\"" + str + "\"";
};

function booleanToJSON(bool) {
    return bool ? "true" : "false";
};

function nullToJSON(b) {
    return "null";
};

function arrayToJSON(arr) {
    let res = "["

    let isFirst = true;

    arr.forEach((el) => {
        if (!isFirst) {
            res += ",";
        }

        res += convertToJSON(el);

        isFirst = false;
    })

    res += "]";

    return res;
};

function objectToJSON(el) {
    let res = "{"

    let isFirst = true;

    for (let key in el) {
        if (Object.prototype.toString.call(el[key]) === '[object Function]') {
            continue;
        } 

        if (!isFirst) {
            res += ",";
        }

        res += "\"" + key + "\":";

        res += convertToJSON(el[key]);

        isFirst = false;
    }

    res += "}"
    return res;
}

console.log(JSON.stringify(student));
console.log(convertToJSON(student));


