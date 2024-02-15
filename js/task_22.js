// Посчитайте сколько раз можно вызвать функцию document.write() внутри document.write(). Объясните результат.

function dw(i) {
    console.log(i);
    document.write("<script>dw(" + (i + 1) +");</script>")

}

dw(1); // i = 21