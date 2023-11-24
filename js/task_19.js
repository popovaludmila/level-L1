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
const postsList = document.querySelector('.comment-list');
const templatePost = document.querySelector('#post').content.querySelector('.comments_item');
const postsContainer = document.querySelector('.commetns-container');

let count = 30;
let offset = 0;

function throttle(callee, timeout) {
    let timer = null

    return function perform(...args) {
        if (timer) return

        timer = setTimeout(() => {
            callee(...args)

            clearTimeout(timer)
            timer = null
        }, timeout)
    }
}

window.showVkData = (result) => {
    let posts = [];
    result.response.items.forEach(element => {
        if (element.copy_history !== undefined) {
            const copyHistory = element.copy_history;

            for (let i = 0; i < copyHistory.length; i++) {
                posts.push({ "text": copyHistory[i].text, "date": copyHistory[i].date });
            }
        }
    });

    render(posts);

    offset += count;
}

function setScript() {
    const script = document.createElement('SCRIPT');
    script.src = `https://api.vk.com/method/wall.get?access_token=${key}&owner_id=-56636905&offset=${offset}&count=${count}&v=5.131&callback=showVkData`;
    document.getElementsByTagName("head")[0].appendChild(script);
}
setScript();

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
})()
