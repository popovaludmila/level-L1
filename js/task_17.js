// Необходимо реализовать простое поле ввода адреса с функцией геокодинга: 
// пользователь вводит данные в поле с помощью одного из геоинформационных сервисов 
// (Яндекс.Карты, ДаДата, GraphHopper), подбирается адрес. 
// Найденные данные должны отображаться в выпадающем списке, из которого можно выбрать подходящее значение.


// Реализовать дебоунсинг и защиту от троттлинга с помощью замыканий.


const addressList = document.querySelector('.address-list');

const addressInput = document.querySelector('#address');

const api = 'https://geocode-maps.yandex.ru/1.x/?apikey=a0f4d0f8-e6ec-47bb-a14b-ce7dc812dc41&geocode=';
const apiEnd = '&format=json';

// Аргументами функции будут:
// - функция, которую надо «откладывать»;
// - интервал времени, спустя которое функцию следует вызывать.
function debounce(callee, timeoutMs) {
    return function perform(...args) {
      // В переменной previousCall мы будем хранить
      // временную метку предыдущего вызова...
      let previousCall = this.lastCall
  
      // ...а в переменной текущего вызова —
      // временную метку нынешнего момента.
      this.lastCall = Date.now()
  
      // Нам это будет нужно, чтобы потом сравнить,
      // когда была функция вызвана в этот раз и в предыдущий.
      // Если разница между вызовами меньше, чем указанный интервал,
      // то мы очищаем таймаут...
      if (previousCall && this.lastCall - previousCall <= timeoutMs) {
        clearTimeout(this.lastCallTimer)
      }
  
      // ...который отвечает за непосредственно вызов функции-аргумента.
      // Обратите внимание, что мы передаём все аргументы ...args,
      // который получаем в функции perform —
      // это тоже нужно, чтобы нам не приходилось менять другие части кода.
      this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs)
  
      // Если таймаут был очищен, вызова не произойдёт
      // если он очищен не был, то callee вызовется.
      // Таким образом мы как бы «отодвигаем» вызов callee
      // до тех пор, пока «снаружи всё не подуспокоится».
    }
  }
  

const checkResponse = (response) => {
    return response.ok ? response.json() : Promise.reject();
}

const displayAddresses = (name, description) => {
    const liEl =  document.createElement('li');
    liEl.textContent = `${name}, ${description}`;
    liEl.className = 'address-item';
    
    liEl.addEventListener('click', (e)=> {
        selectAddress(e.target);
        addressList.style.display = "none";

    })
    return liEl;
}

const request = async (url) => {
    const res = await fetch(url);
    const data = checkResponse(res);
    const result = data.response;

    addressList.innerHTML = "";
    addressList.style.display = "block";

    result.GeoObjectCollection.featureMember.forEach(el => {
        const html = displayAddresses(el.GeoObject.name, el.GeoObject.description);

        addressList.append(html);
    });
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

addressInput.addEventListener('keyup', debounce(getAddresses, 250));

