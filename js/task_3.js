// Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:
//  - вычисление N-го числа в ряду Фибоначчи 
//  - вычисление всех чисел в ряду Фибоначчи до числа N
//  - вычисление N-го простого числа
//  - вычисление всех простых чисел до числа N

// 	Будет плюсом, если задумаетесь и об оптимизации.


//  - вычисление N-го числа в ряду Фибоначчи 
const getNextNumberFibonacci = (n) => {
  let previous = 1;
  let current = 1;

  for (let i = 3; i <= n; i++) {
    let next = previous + current;

    previous = current;
    current = next;

  }
  return current;
};

console.log(getNextNumberFibonacci(13));

//- вычисление всех чисел в ряду Фибоначчи до числа N

const getNumbersFibonacci = (number) => {
  let numbersFibonacci = [1, ]; // массив чисел Фибоначчи

  let k = 1; 

  while (number >=  getNextNumberFibonacci(k)) { 
    numbersFibonacci.push(getNextNumberFibonacci(k));
    k++;
  }

  return numbersFibonacci;
}

console.log(getNumbersFibonacci(13));

// Функция проверки числа на простое число
const checkPrimeNumber = (number) => {
  for (let i = 2; i < (number / 2); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

console.log("7", checkPrimeNumber(7));
console.log("4", checkPrimeNumber(4));
console.log("13", checkPrimeNumber(13));


//- вычисление всех простых чисел до числа N
const getPrimeNumbers = (number) => {
  let primeNumbers = [];

  for (let i = 1; i <= number; i++) {
    if (checkPrimeNumber(i)) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;

};

console.log(getPrimeNumbers(41));

//  - вычисление N-го простого числа

const getPrimeNumberN = (n) => {
  let k = 1; // первое простое число
   
  let count = 1; // количество простых чисел

  while (n > count) {
    k++;
    if (checkPrimeNumber(k)) {
      count++;
    }
  }

  return k;

}

console.log(getPrimeNumberN(1));
console.log(getPrimeNumberN(10));
console.log(getPrimeNumberN(100));