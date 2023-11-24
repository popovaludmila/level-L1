// Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.

const parseJSON = function (data) {
    const simbols = data.split("");

    if (simbols.length == 0) {
        return null;
    }

    if (simbols[0] == "{") {

    }

    if (simbols[0] == "[") {
        
    }

    if (simbols[0] == "\"") {
        
    }


    return data.split("");
}


console.log(parseJSON("{\"data\":123}"));