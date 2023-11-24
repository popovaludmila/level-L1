// Задача на работу с объектами: создайте объект, представляющий собой книгу. 
// Объект должен иметь свойства, такие как: название книги, автор и год издания. 
// Напишите методы для получения и изменения значений свойств книги.

// Способ №1
const book = {
    name: 'Отверженные',
    author: 'Виктор Гюго',
    year: 1862,

    get fullInfoBook() {
        return `"${this.name}", ${this.author}, ${this.year}`;
    },

    set newBook(book) {
        const [newName, newAuthor, newYear] = book.split(', ');
        this.name = newName;
        this.author = newAuthor;
        this.year = newYear;
    }
};

book.newBook = "Грозовой перевал, Эмили Бронте, 1847";

console.log(book.fullInfoBook);


// Способ №2
const bookTwo = {
    name: 'Отверженные',
    author: 'Виктор Гюго',
    year: 1862
}

Object.defineProperty(bookTwo, "fullInfoBook", {
    get() {
        return `"${this.name}", ${this.author}, ${this.year}`;
    }
});

Object.defineProperty(bookTwo, 'newBook', {
    set(book) {
        const [newName, newAuthor, newYear] = book.split(', ');
        this.name = newName;
        this.author = newAuthor;
        this.year = newYear;
    }
});

bookTwo.newBook = "Атлант расправил плечи, Айн Рэнд, 1957";

console.log(bookTwo.fullInfoBook);

// Способ №3

const bookThree = {
    name: 'Отверженные',
    author: 'Виктор Гюго',
    year: 1862,

    getFullInfo() {
     return `"${this.name}", ${this.author}, ${this.year}`;
    },

    addNewBook(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }
};

console.log(bookThree.getFullInfo());
bookThree.addNewBook("Старик и море", "Эрнест Хемингуэй", 1952);
console.log(bookThree.getFullInfo());