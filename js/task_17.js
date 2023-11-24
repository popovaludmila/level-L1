// Необходимо реализовать простое поле ввода адреса с функцией геокодинга: 
// пользователь вводит данные в поле с помощью одного из геоинформационных сервисов 
// (Яндекс.Карты, ДаДата, GraphHopper), подбирается адрес. 
// Найденные данные должны отображаться в выпадающем списке, из которого можно выбрать подходящее значение.

const addressList = document.querySelector('.address-list');

const addressInput = document.querySelector('#address');

const api = 'https://geocode-maps.yandex.ru/1.x/?apikey=a0f4d0f8-e6ec-47bb-a14b-ce7dc812dc41&geocode=';
const apiEnd = '&format=json';

const checkResponse = (response) => {
    return response.ok ? response.json() : Promise.reject();
}

const displayAddresses = (name, description) => {
    return `<li onclick="selectAddress(this)" class="address-item">${name}, ${description}</li>`;
}

const request = (url) => {
    return fetch(url)
        .then(res => checkResponse(res))

        .then(data => data.response)
        .then(data => {

            addressList.innerHTML = "";

            data.GeoObjectCollection.featureMember.forEach(el => {
                const html = displayAddresses(el.GeoObject.name, el.GeoObject.description);

                addressList.innerHTML += html;
            });

        })
};
const selectAddress = (item) => {
    addressInput.value = item.textContent;
    getAddresses();
    
}


const getAddresses = () => {
    let value = addressInput.value;
    if (value) {
        request(`${api}${value}${apiEnd}`);    
    }

    if (!value) {
        addressList.innerHTML = "";
    }
};

addressInput.addEventListener('keyup', getAddresses);

