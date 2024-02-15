import { getAge } from "./task_16.js";
import { closure } from "./task_8.js";
import {checkIsPalindrom} from "./task_1.js";
import {checkIsStrangeNumber} from "./task_2.js";
import {getPluralWord} from "./task_4.js";
import { fn } from "./task_7.js";
import { someFn } from "./task_11.js";
import { addElement } from "./task_28.js";
import { traversalTree } from "./task_26.js";

const arrFunctions = [
    () => checkIsPalindrom('"Пустите!" - Летит супу миска Максиму. - "Пустите, летит суп!"'),
    () => checkIsPalindrom('Кот учен, но как он нечу?ток.'),
    () => checkIsStrangeNumber(7),
    () => getPluralWord(104, 'пользователь', 'пользователя', 'пользователей'),
    () => getPluralWord(1024, 'пользователь', 'пользователя', 'пользователей')];


 traversalTree(document.querySelector('.container'));
// addElement();

//console.log(fn(arrFunctions));
//  console.log(getAge('05021958'));
 console.log(closure(arrFunctions)());
console.log(someFn(11)(12));