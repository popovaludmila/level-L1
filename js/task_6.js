// Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }.
// Напишите код, который сортирует этот массив по возрастанию возраста,
// а при равных возрастах сортирует по алфавиту по полю name.


const users = [
    {
        name: 'Ира',
        age: 22
    },
    {
        name: 'Игорь',
        age: 22
    },
    {
        name: 'Михаил',
        age: 12
    },

    {
        name: 'Анна',
        age: 23
    },
    {
        name: 'Анфиса',
        age: 23
    },
    {
        name: 'Илья',
        age: 22
    },
];


const sortArrayByKey = (arr, key, key1) => arr.sort((el1, el2) => {
    if (el1[key] !== el2[key]) {
        return el1[key] - el2[key];
    }

    if (el1[key1] > el2[key1]) {
        return 1;
    }

    return -1;

})


sortArrayByKey(users, "age", "name");

console.log(users);