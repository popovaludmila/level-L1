// Задача: Создать и добавить стиль для элемента: 
// Напишите функцию, которая создает новый элемент, добавляет его в DOM 
// и устанавливает для него стиль с помощью CSS.

const body = document.body;

const createElement = (tag, where, styleCSS, text) => {
    const divElement = document.createElement(tag);
    divElement.style.cssText = styleCSS;

    //divElement.setAttribute('style', styleCSS);
    //divElement.className = styleCSS;
    //divElement.classList.add(styleCSS);

    divElement.textContent = text;

    where.append(divElement);
   // where.appendChild(divElement);
}

createElement('h1', body, 'color: green', "Hello, World!");

const createTemplate = () => {
    return `
    <h1 style="color: orange">Hello, world!</h1>
    `
}

body.insertAdjacentHTML("beforeend", createTemplate());
body.append(createElement('div'));
document.createDocumentFragment



