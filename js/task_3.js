// Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:
//  - вычисление N-го числа в ряду Фибоначчи 
//  - вычисление всех чисел в ряду Фибоначчи до числа N
//  - вычисление N-го простого числа
//  - вычисление всех простых чисел до числа N

// 	Будет плюсом, если задумаетесь и об оптимизации.


const fibonacciGenerator = () => {
  let current = 0;
  let next = 1;

  return () => {
    let result = current;

    current = next;
    next = next + result;

    return result;
  }
}

//  - вычисление N-го числа в ряду Фибоначчи 
const getFibonacciNumber = (n) => {
  if (n < 1) {
    return;
  }

  let fib = fibonacciGenerator();
  for (let i = 0; i < n - 1; i++) {
    fib();
  }

  return fib();
}
console.log(getFibonacciNumber(3)); // 1
console.log(getFibonacciNumber(8)); // 13


//- вычисление всех чисел в ряду Фибоначчи до числа N
const getFibonacciNumbersUntil = (n) => {
  if (n < 1) {
    return [];
  }

  let result = [];

  let fib = fibonacciGenerator();
  while (true) {
    let fibNum = fib();
    if (fibNum >= n) {
      break;
    }

    result.push(fibNum);
  }

  return result;
}

console.log(getFibonacciNumbersUntil(5)); //  [0, 1, 1, 2, 3]
console.log(getFibonacciNumbersUntil(15)); // [0, 1, 1, 2, 3, 5, 8, 13]

// Функция проверки числа на простое число
const checkPrimeNumber = (number) => {
  for (let i = 2; i <= (number / 2); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};


const primeNumberGenerator = () => {
  let primeNumber = 1;

  return () => {
    let result = primeNumber;

    while(true) {
      primeNumber++;

      if (checkPrimeNumber(primeNumber)) {
        break;
      }
    }

    return result;
  }
}

//- вычисление всех простых чисел до числа N

const getPrimeNumbersUntil = (number) => {
  let primeNumbers = [];

  if (number < 1) {
    return [];
  }

  let primeNumber = primeNumberGenerator();

  while (true) {
    let primeNum = primeNumber();
    if (primeNum >= number) {
      break;
    }

    primeNumbers.push(primeNum);
  }

  return primeNumbers;

};

console.log(getPrimeNumbersUntil(41)); //  [1, 2, 3, 4, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
console.log(getPrimeNumbersUntil(12)); // [1, 2, 3, 4, 5, 7, 11]


//  - вычисление N-го простого числа

const getPrimeNumberN = (n) => {
  if (n < 1) {
    return;
  }

  let primeNumber = primeNumberGenerator();
  for (let i = 0; i < n - 1; i++) {
    primeNumber();
  }

  return primeNumber();
}

console.log(getPrimeNumberN(1)); // 1
console.log(getPrimeNumberN(10)); // 23
console.log(getPrimeNumberN(100)); // 523