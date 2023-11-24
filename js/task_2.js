// Задача о странных числах: Напишите функцию, которая принимает число и возвращает true, 
// если это число является странным, и false в противном случае. Странным числом считается число, 
// которое равно сумме всех своих делителей, кроме самого себя.

const checkIsStrangeNumber = (number) => {

    let sumDivisors = 0; // сумма делителей

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sumDivisors += i;
        }
    }

    if (number === sumDivisors) {
        return true;
    }

    return false;
}

// console.log(6, checkIsStrangeNumber(6)); // делители [1, 2, 3] = 6 => true
// console.log(25, checkIsStrangeNumber(25)); // делители [1, 5] = 6 => false
// console.log(24, checkIsStrangeNumber(24)); // делители [1, 2, 3, 4, 6, 8, 12] = 36 => false
// console.log(28, checkIsStrangeNumber(28)); // делители [1, 2, 4, 7, 14] = 28 => true
// console.log(496, checkIsStrangeNumber(496)); // делители [1, 2, 4, 8, 16, 31, 62, 124, 248] = 496 => true

export {checkIsStrangeNumber};