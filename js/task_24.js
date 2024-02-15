// Разработайте страницу, отображающую таблицу с данными. Данные необходимо подгружать из этого источника.

// Требования:
// данные должны загружаться при загрузке страницы
// необходимо реализовать сортировку по убыванию и по возрастания для всех колонок
// необходимо реализовать клиентскую пагинацию (50 элементов на странице)

const api = 'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true'

const tableBody = document.querySelector('.table-body'); // тело таблицы
const templateRow = document.querySelector('#row'); 
const btnIncrease = document.querySelectorAll('.increase'); // кнопки по убыванию
const btnDecrease = document.querySelectorAll('.decrease'); // кнопки по возрастанию
const btnLoadMore = document.querySelector('.btn'); // кнопка загрузить еще

let items = [];  // создаем переменную для записи данных 

let removeButtonClickEvent = () => null;

// функция для разделения данных на части
const createChunks = (elements, chunkSize) => {
    const result = [];

    for (let i = 0; i < elements.length; i += chunkSize) {
        result.push(elements.slice(i, i + chunkSize));
    }
    return result;
};

const checkResponse = (response) => {
    return response.ok ? response.json() : Promise.reject();
};

// функция сортировки 
const itemsSort = (field, abs) => {
    items = items.sort((a, b) => {
        let aVal = a[field];
        let bVal = b[field];


        if ( typeof aVal === "string") {
            aVal = aVal.toLowerCase();
        }

        if (typeof bVal === "string") {
            bVal = bVal.toLowerCase();
        }

        if (abs) {
            return aVal > bVal ? 1 : -1;
        } else {
            return aVal > bVal ? -1 : 1;
        }
    });
    loadMoreDatas();
}

// получаем данные
const getData = () => {
    fetch(api)
        .then(res => checkResponse(res))
        .then(data => {
            items = data;
            loadMoreDatas();
        })
};

// если данные не получены скрываем кнопку "загрузить еще"
if (items.length === 0) {
    btnLoadMore.classList.add('hidden');
}

// отображаем данные на стра
function render(elements) {
    const tableRowFragment = document.createDocumentFragment();

    elements.forEach(item => {

        const { fname, lname, tel, address, city, state, zip } = item;

        const newTableRow = templateRow.content.cloneNode(true);

        const firstNameEl = newTableRow.querySelector('.first-name');
        const lastNameEl = newTableRow.querySelector('.last-name');
        const phoneEl = newTableRow.querySelector('.phone');
        const addressEl = newTableRow.querySelector('.address');
        const cityEl = newTableRow.querySelector('.city');
        const stateEl = newTableRow.querySelector('.state');
        const zipEl = newTableRow.querySelector('.zip');

        firstNameEl.textContent = fname;
        lastNameEl.textContent = lname;
        phoneEl.textContent = tel;
        addressEl.textContent = address;
        cityEl.textContent = city;
        stateEl.textContent = state;
        zipEl.textContent = zip;

        tableRowFragment.append(newTableRow);
    });

    tableBody.append(tableRowFragment);
}


function loadMoreDatas() {
    removeButtonClickEvent();

    btnLoadMore.classList.remove('hidden');
    tableBody.textContent = "";
    
    let i = 0;
    let loadDatasLength = 0;

    const datasChunks = createChunks(items, 50);

    const onBtnLoadMoreClick = () => {
        if (datasChunks.length <= i + 1) {
            btnLoadMore.classList.add('hidden');
        }

        render(datasChunks[i])
        loadDatasLength += datasChunks[i].length;
        i++;
    }

    removeButtonClickEvent = () => {
        btnLoadMore.removeEventListener('click', onBtnLoadMoreClick);
    };

    btnLoadMore.addEventListener('click', onBtnLoadMoreClick);
    onBtnLoadMoreClick();
}

getData();


