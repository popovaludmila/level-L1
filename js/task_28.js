// Задача: Создать и добавить элемент с использованием шаблонов: 
// Напишите функцию, которая создает новый элемент с использованием шаблонов 
// (например, с помощью тега <template>) и добавляет его в DOM.

const btn = document.querySelector('.btn-right');
const btnContainer = document.querySelector('.container');

const createNewTemplate = () => {
    return `
        <template id="postcard">
            <section class="postcard_wrapper">
                <h1 class="title">Happy New Year</h1>
                <span class="text-year">2024</span>
            </section>
        </template>
         `
};

const addElement = () => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if(!document.querySelector('#postcard')) {
            btnContainer.insertAdjacentHTML("afterend", createNewTemplate());
        }
    });
}

export {addElement};