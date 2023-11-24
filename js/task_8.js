// Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию, 
// которая вызывает каждую функцию в этом массиве и возвращает массив результатов,
// полученных после вызова каждой функции.

function closure(functions) {
  return function() {
    let result =[];

    functions.forEach(element => {
        result.push(element());
    });
    return result;
  }
};


export {closure};