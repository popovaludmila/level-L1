// Задача на асинхронность: напишите асинхронную функцию, 
// которая использует ключевое слово await для ожидания выполнения других асинхронных операций, 
// и возвращает результат выполнения.

async function getPhotos() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photos = await res.json();
        return photos.slice(0, 20);
    } catch (err) {
        console.error('Произошла ошибка!', err);
    }
};

getPhotos().then((photos) => console.log(photos));