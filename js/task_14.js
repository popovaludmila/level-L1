// Задача на промисы: 
// напишите функцию, которая принимает URL изображения и возвращает промис, 
// который разрешается с данными об изображении, когда оно загружено. 
// Когда говорится "промис разрешается с данными об изображении", это означает, 
// что промис должен быть успешно выполнен (resolved) с данными об изображении после того, как изображение будет загружено.

const loadImage = (url) => {
    return new Promise(function (resolve, reject) {
       const img = document.createElement('img')
        img.onload = function () {
            // В случае успешной загрузки изображения, разрешаем промис объектом img
            resolve(img);
        }
        img.onerror = function () {
            // В случае неуспешной загрузки изображения, отклоняем промис с ошибкой
            reject(new Error("Не удалось загрузить изображение: " + url));
        }
        img.src = url;
    });
}



loadImage('https://thailand-news.ru/sites/default/files/storage/images/2017-31/pattayacoral.jpg').
then(result => {
    document.body.appendChild(result);
    console.log(`width: ${result.width}, height: ${result.height}`);
}).catch(err => console.log(err));


