// Задача о коллекции функций: у вас есть массив функций, напишите код, который вызовет каждую функцию в этом массиве 
// и выведет их порядковый номер. Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.
// Другими словами, нужно выполнить следующие шаги:
// - Вызвать первую функцию из массива.
// - После завершения работы первой функции вызвать вторую функцию.
// - После завершения работы второй функции вызвать третью функцию.
// - И так далее, пока все функции в массиве не будут вызваны по порядку.

const fn = (functions) => {
    functions.forEach((el, index) => {
        console.log(index, el());
    })
};

export { fn };
