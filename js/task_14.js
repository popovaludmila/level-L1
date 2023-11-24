// Задача на промисы: 
// напишите функцию, которая принимает URL изображения и возвращает промис, 
// который разрешается с данными об изображении, когда оно загружено. 
// Когда говорится "промис разрешается с данными об изображении", это означает, 
// что промис должен быть успешно выполнен (resolved) с данными об изображении после того, как изображение будет загружено.

const createImg = (tag, where, src) => {
    const divElement = document.createElement(tag);
    divElement.src = src;
    divElement.style.width = "100%";
    where.append(divElement);
}

let imgSrc = '';
const getPhoto = (url) => {
    return fetch(url)
        .then(result => {
            imgSrc = result.url;
            createImg('img', document.body, imgSrc);
        },
            error => console.log(error)
        )
}

getPhoto('../img/christmas-red-background.png');