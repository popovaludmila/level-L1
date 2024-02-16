// Реализовать виджет, отображающий список постов из любого паблика в VK 
// (подойдет любой паблик, где постов очень много). 
// Например, с помощью этой функции API VK. 
// Виджет должен иметь фиксированные размеры и возможность прокрутки. 
// При прокрутке содержимого виджета до конца должны подгружаться новые посты. 
// Необходимо реализовать возможность кэширования уже загруженных данных: если пользователь закрыл страницу, 
// а потом снова открыл ее, виджет должен отображать все загруженные ранее данные
// (новые данные должны подгружаться из учетом уже загруженных ранее).

// При переполнении localStorage, данные, загруженные последними должны вытеснять данные загруженные первыми.

const key = '7c6ea6607c6ea6607c6ea660377f78c1b477c6e7c6ea6601931d0e79a36251cb3f8d2dd';
const ownerId = '-56636905';
const postsList = document.querySelector('.comment-list');
const templatePost = document.querySelector('#post').content.querySelector('.comments_item');
const postsContainer = document.querySelector('.commetns-container');

let count = 30; // количество загружаемых постов
let offset = 0; // смещение необходимое для выборки уже загруженных данных

let isLoadingPosts = false; // идёт ли подгрузка данных
let allPosts = [];


// Функция throttle будет принимать 2 аргумента:
// - callee, функция, которую надо вызывать;
// - timeout, интервал в мс, с которым следует пропускать вызовы.
function throttle(callee, timeout) {

    // Таймер будет определять, надо ли пропускать текущий вызов.
    let timer = null

    // Как результат возвращаем другую функцию.
    return function perform(...args) {

        // Если таймер есть, то функция уже была вызвана,
        // и значит новый вызов следует пропустить.
        if (timer) {
            return;
        }
        // Если таймера нет, значит мы можем вызвать функцию:
        timer = setTimeout(() => {
            // Аргументы передаём неизменными в функцию-аргумент:
            callee(...args)
            // По окончании очищаем таймер:
            clearTimeout(timer)
            timer = null
        }, timeout)
    }
}

window.showVkData = (result) => {
    let posts = [];
    if (result.response.items.length) {
        result.response.items.forEach(element => {
            if (element.copy_history !== undefined) {
                const copyHistory = element.copy_history;

                for (let i = 0; i < copyHistory.length; i++) {
                    posts.push({ "text": copyHistory[i].text, "date": copyHistory[i].date });
                }
            }
        });

        render(posts);

        allPosts.push(...posts);
        offset += count;

        saveToLocalStorage();
    }

    isLoadingPosts = false;
}

function setScript() {
    if (isLoadingPosts) {
        // загрузка уже идёт, не дополняем данные
        return;
    }
    isLoadingPosts = true;
    const script = document.createElement('script');
    script.src = `https://api.vk.com/method/wall.get?access_token=${key}&owner_id=${ownerId}&offset=${offset}&count=${count}&v=5.131&callback=showVkData`;
    document.head.appendChild(script);
}

function init() {
    if (localStorage.getItem("offset") > 0) {
        offset = +localStorage.getItem("offset");
        allPosts = JSON.parse(localStorage.getItem("allPosts"));

        render(allPosts);
    } else {
        setScript();
    }
}

function saveToLocalStorage() {
    let data = JSON.stringify(allPosts);
    localStorage.setItem("allPosts", data);
    localStorage.setItem("offset", offset);
    console.log("Размер в байтах:", data.length * 2);
}

function render(elements) {
    const itemFragment = document.createDocumentFragment();

    elements.forEach(item => {
        const { text, date } = item;
        const newDate = new Date(date * 1000);

        const newItem = templatePost.cloneNode(true);
        const textEl = newItem.querySelector('.comment-text');
        const dateEl = newItem.querySelector('.comment-date');

        textEl.textContent = text;
        dateEl.textContent = newDate.toUTCString();

        itemFragment.append(newItem);
    });

    postsList.append(itemFragment);
}

// Отслеживание положения скролла
function checkPosition() {
    if (postsContainer.scrollHeight + postsContainer.scrollTop < 1000) {
        setScript();
    }
}

; (() => {
    postsContainer.addEventListener('scroll', throttle(checkPosition, 100));
    postsContainer.addEventListener('resize', throttle(checkPosition, 100));

    init()
})()
