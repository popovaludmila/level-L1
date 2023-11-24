// Задача: Взаимодействие с формами: 
// Напишите функцию, которая получает данные из формы на веб-странице и 
// выполняет определенные действия с этими данными, например, 
// отправляет их на сервер или отображает всплывающее окно с результатами.


const input = document.querySelectorAll('.form__input');
const textarea = document.querySelector('.form__textarea');
const btn = document.querySelector('.form__button');
const form = document.querySelector('#form');

const bodyElement = document.body;

const successTemplateElement = document.querySelector('#success').content.querySelector('.success');
const successModalElement = successTemplateElement.cloneNode(true);
const successButtonElement = successModalElement.querySelector('.success__button');
const info = successModalElement.querySelectorAll('.success__info');

let values = [];

function closeSuccessMessageModal() {
    document.removeEventListener('keydown', onSuccessModalEscKeydown);
    document.removeEventListener('click', onSuccessBackDropClick);
    successModalElement.remove();
    input.forEach(el => el.value = "");
}

const onSuccessModalEscKeydown = (evt) => {
    if (evt.key === 'Escape') {
        evt.preventDefault();

        closeSuccessMessageModal();
    }
};

const onSuccessBackDropClick = (evt) => {
    if (evt.target === successModalElement) {
        closeSuccessMessageModal();
    }
};

const showModal = () => {  
    successModalElement.style.zIndex = 10;
    bodyElement.append(successModalElement);
    document.addEventListener('keydown', onSuccessModalEscKeydown);
    document.addEventListener('click', onSuccessBackDropClick);
    successButtonElement.addEventListener('click', closeSuccessMessageModal);
}

const fillField = (values, fields) => {

    for (let i = 0; i < fields.length; i++) {
        [...fields][i].textContent = values[i];
    }
}

const formSubmit = () => {

    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        input.forEach(el => values.push(el.value));
        showModal();
        fillField(values, info);
    })
};

formSubmit();