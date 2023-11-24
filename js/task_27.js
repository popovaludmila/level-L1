// Задача: Добавить анимацию для элемента: 
// Напишите функцию, которая добавляет анимацию для элемента на веб-странице, 
// например, плавное изменение его положения или размера.


const btn = document.querySelector('.btn');
const templateEl = document.querySelector('#animate-template').content.querySelector('.animation');
const animateContainer = templateEl.cloneNode(true);
const circle = animateContainer.querySelector('.circle');


btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.body.append(animateContainer);
});

function animate({ timing, draw, duration }) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
};

function makeEaseOut(timing) {
    return function (timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
};

function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
};

function linear(timeFraction) {
    return timeFraction;
};

function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
};

circle.onclick = () => {

    const to = animateContainer.clientHeight - circle.clientHeight;
    const width = 450;
    const deg = 1800;

    animate({
        duration: 3000,
        timing: makeEaseOut(bounce),
        draw(progress) {
            circle.style.top = to * progress + 'px';
        }
    });

    animate({
        duration: 3000,
        timing: makeEaseOut(quad),
        draw(progress) {
            circle.style.left = width * progress + 'px';
        }
    });

    animate({
        duration: 2000,
        timing: makeEaseOut(quad),
        draw(progress) {
            circle.style.transform = `rotate(${progress * deg}deg)`;
        }
    });
}


