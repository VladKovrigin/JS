
//1.Напишите функцию upFirst(str), которая возвращает строку str с заглавным первым символом,
//    остальные символы должны быть в нижнем регистре (пример: upFirst("иванов"),
//    должно вернуть "Иванов", up_first("ИВАНОВ"), должно вернуть "Иванов")
function upFirst(str) {
    if(str.length < 2) {
        return str;
    }
    str = str.toLowerCase();
    let firstLetter = str[0].toUpperCase();
    return firstLetter + str.substr(1);
}

//2. Напишите функцию truncate(str, maxlength), которая проверяет длину строки str,
// и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength
function truncate(str, maxLength) {
    if(str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    }
    return str;
}


//3. Напишите функцию getShortName(fullName), которая преобразует полное ФИО fullName в краткое.
// Например getShortName("Иванов Сергей Петрович"), функция должна вернуть "Иванов С.П."
function getShortName(fullName) {
    fullName = fullName.split(' ');
    return `${fullName[0]} ${fullName[1][0]}. ${fullName[2][0]}.`;
}

//4. Напишите функцию, которая принимает массив объектов.
// Функция должна вернуть массив только с теми объектами, у которых есть свойство name
function checkName(objectArray) {
    let newArray = [];
    for(let item in objectArray) {
        if(objectArray[item].hasOwnProperty('name')) {
            newArray.push(objectArray[item]);
        }
    }
    return newArray;
}


//5. Напишите функцию, которая принимает два массива. Функция должна
// вернуть результат объединения этих массивов без дубликатов
function unionArrays(arrayFirst, arraySecond) {
    let result = [];
    const fullArray = arrayFirst.concat(arraySecond);

    for(let item of fullArray) {
        if(!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}


//6. Напишите функцию, которая преобразует строки snake_case в camelCase.
// Например modifyString('super-user-name') // вернуть 'superUserName'
function toCamelCase(str) {
    str = str.split('-');
    str = str.map((word, index) => index === 0 ? word :
            word[0].toUpperCase() + word.slice(1));
    str = str.join('');
    return str;
}
alert(toCamelCase('код-с-тире'));


//7. Напишите функцию, которая принимает значение с математическим
// выражением и возвращает результат его решения. Например:
// calc('5 + 10') // вернет 15
function calc(string) {
    string = string.split(' ');
    if(isNaN(string[0]) || isNaN(string[2])) {
        return 'ошибка';
    }
    if(string[1] === '+') {
        return +string[0] + +string[2];
    }
    if(string[1] === '-') {
        return +string[0] - +string[2];
    }
    if(string[1] === '/') {
        return +string[0] / +string[2];
    }
    if(string[1] === '*') {
        return +string[0] * +string[2];
    }
    return 'что-то не так';
}
alert(calc('5 + 10'));


//8. Напишите функцию, которая принимает объект с пользователями
// и возвращает массив имён.
const users = [
    {
        id: 1,
        name: 'John',
        age: 20
    },
    {
        id: 2,
        name: 'Marry',
        age: 22
    },
    {
        id: 3,
        name: 'Poll',
        age: 25
    },
]
function usersNames(users) {
    let names = [];
    for(let item in users) {
        if(users[item].hasOwnProperty('name')) {
            names[item] = users[item].name;
        }
    }
    return names;
}
alert(usersNames(users));


// 9. Напишите функцию, которая принимает массив. Каждый элемент
// массива, который является числом - умножить на 2, строки -
// преобразовать в массив, где каждый символ - отдельный элемент
// массива. Функция должна вернуть измененный объект
function changeArray(array) {
    for(let item in array) {
        if(isFinite(array[item])) {
            array[item] = +array[item] * 2;
        } else {
            array[item] = array[item].split('');
        }
    }
    return array;
}
let array = [1234, 'qwerty'];
console.log(changeArray(array));


// 10. Напишите функцию, которая проверяет строку на спам.
// Функция должна возвращать true, если в строке есть 2
// одинаковых слова, и false - если все слова уникальны.
function checkSpam(string) {
    string = string.split(' ');
    return new Set(string).size !== string.length;
}


//11.Напишите функцию, которая проверяет строку на нецензурную лексику.
// Создайте массив, который будет содержать слова, которые нельзя пропускать.
// Функция должна принимать строку и проверять наличие в ней слов из
// массива, которые нужно пропускать. Если в строке есть слово из массива
// - вернуть true, если нет - false.
const swearWords = ['блять', 'ебать', 'пизда', 'сука', 'хуй'];
function checkSwearWords(string) {
    string = string.split(' ');
    for(let item of string) {
        if(swearWords.includes(item)) {
            return true;
        }
    }
    return false;
}
alert('нет мата: ' + checkSwearWords('ого как неожиданно и приятно'));
alert('есть мат: ' + checkSwearWords('ого ебать сука'));


//12. Напишите функцию, которая принимает массив. Функция должна вернуть
// предложение только из строковых значений массива. Например:
// arrayToSentence(['Привет', 1, null, 'как', '{}', 'дела']) // вернуть Привет как дела
function arrayToSentence(array) {
    let newString = '';
    for(let item of array) {
        if(typeof item === 'string') {
            newString += `${item} `;
        }
    }
    return newString;
}

console.log(arrayToSentence(['Привет', 1, null, 'как', {}, 'дела']));

//13. Напишите функцию, которая принимает массив из 10 целых чисел
// (от 0 до 9), который возвращает строку этих чисел в форме номера телефона.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
function createPhoneNumber(numbers){
    let format = '(xxx) xxx-xxxx';

    for (let number of numbers) {
        format = format.replace('x', number);
    }

    return format;
}

//14. Напишите функцию, которая принимает массив с пользователями и возвращает
// имя пользователя с наибольшей заработной платой.
const usersSecond = [
    {
        id: 1,
        name: 'John',
        age: 20,
        salary: 1000
    },
    {
        id: 2,
        name: 'Marry',
        age: 22,
        salary: 1500
    },
    {
        id: 3,
        name: 'Poll',
        age: 25,
        salary: 1200
    },
]
function getHighestSalary(users) {
    let maxSalary = users[0].salary;
    let richest = '';
    for(let item in users) {
        if(users[item].salary > maxSalary) {
            maxSalary = users[item].salary;
            richest = users[item].name;
        }
    }
    return richest;
}

console.log(`богатейший из всех ${getHighestSalary(usersSecond)}`);


//15. Напишите функцию, которая проверяет корректность строки.
// Строка должна быть не менее 3х символов и не более 16ти
// символов, должна быть не пустая, не должна содержать числа.
function checkCorrectString(string) {
    if(typeof string !== 'string')  {
        return false;
    }
    string = string.trim();
    if(string.length < 3 || string.length > 16) {
        return false;
    }
    for(let item of string) {
        if( item !== ' '  && !isNaN(+item) ) {
            return false;
        }
    }
    return true;
}

//16. Напишите функцию, которая проверяет пароль на корректность.
// Пароль должен быть не менее 6ти символов, должен содержать
// хотя бы одну цифру и хотя бы одну заглавную букву
function checkCorrectPassword(password) {
    let truthFirst = false;
    let truthSecond = false;
    password = password.split('');
    if(password.length >= 6) {
        for(let item of password) {
            if(item === item.toUpperCase()) {
                truthFirst = true;
            }
            if(item !== ' '  && !isNaN(+item)) {
                truthSecond = true;
            }
        }
    }
    if(truthSecond && truthSecond) {
        return true;
    } else {
        return false;
    }
}
