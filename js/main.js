function checkPromptNumber(str) {
    try {
        let myPrompt = prompt(str);
        if(!myPrompt) {
            return alert('Вы не ввели значение');
        } else if (!isFinite(+myPrompt)) {
            return alert('Вы ввели НЕ число. Попробуйте еще раз');
        } else if(!myPrompt.trim()) {
            return alert('Вы ввели только пробелы :)')
        } else {
            return +myPrompt;
        }
    } catch (e) {
        console.log(e);
    }
}
//1. Создайте функцию, которая проверяет является ли значение
// числом. Функция должна возвращать Boolean.
function isNumber(num) {
    return isFinite(+num);
}

//2. Создайте функцию, которая принимает 3 числа. Возвращать
// должна среднее из этих 3х чисел. (Не забудьте добавить
// проверки нато, что аргументы не пустые и являются числами).
function middleNumber(firstNum, secondNum, thirdNum) {
    if( firstNum <= secondNum && secondNum <= thirdNum ) {
        return secondNum;
    }
    if( secondNum <= firstNum && firstNum <= thirdNum ) {
        return firstNum;
    }
    if( secondNum <= thirdNum && thirdNum <= firstNum ) {
        return thirdNum;
    } else {
        return false;
    }
}
let num = [];
num[0] = checkPromptNumber();
num[1] = checkPromptNumber();
num[2] = checkPromptNumber();
num.sort();
alert(middleNumber(num[0], num[1], num[2]));

//3. Создайте функцию, которая принимает объект и проверяет
// есть ли в нем свойство 'name'. Вернуть Boolean тип.
function checkName(obg) {
    return obg.hasOwnProperty('name');
}

//4. Создайте функцию, которая принимает объект со свойствами
// name и username и возвращает строку в формате Имя Фамилия.
function writeNamesUser(obg) {
    return `${obg.name} ${obg.username}`;
}
let user = {
    name: 'John',
    username: 'hot mexican boy'
};
alert(writeNamesUser(user));

//5. Создайте функцию, которая принимает объекте типа
// {name1: 200, name2: 500, name3: 400}. Функция должна
// вернуть сумму всех свойств объекта.
function sumNums(obg) {
    return obg.nameFirst + obg.nameSecond + obg.nameThird;
}
let nums = {
    nameFirst: 200,
    nameSecond: 500,
    nameThird: 400,
}
alert(sumNums(nums));

//6. Создайте функцию, которая принимает объект. Все ЧИСЛОВЫЕ
// свойства объекта нужно поделить на 2, если получилось НЕ целое
// число - округлить его по математическим правилами, а текстовые
// поменять на строку Hello, Palmo. Если свойство не числовое или
// не текстовое - удалить его из объекта. Функция должна вернуть
// переделанный объект.
function editObject(obg) {
    for(x in obg) {
        if(isFinite(+obg.x)) {
            obg.x = obg.x / 2;
            if(obg.x % 2 !== 0) {
                obg.x = Math.round(obg.x);
            }
        } else if(!isFinite(+obg.x)) {
            obg.x = 'Hello, Palmo';
        } else {
            delete obg.x;
        }
    }
    return obg;
}

// 7. Создайте игру "Викторина". Опираясь на ваши знания по JS,
// создайте игру, которая поочередно задаст пользователю 10 вопросов.
// За каждый правильный ответ начисляйте пользователю 1 балл. После
// ответа на все вопросы выведите сколько баллов заработал пользователь.
function quiz() {
    let questions = ['Первый президент Украины', 'Palmo - лучшая IT компания',];

    questions += ['undefined === null', 'true == 1', 'false != 0', '“1” == true'];
    questions += ['“0” == false', '5 >= 5'];

    let score = 0;
    for(let i = 0; i < 10; i++) {
        let myAnswer = checkPromptNumber(`${questions[i]}`);
        if (myAnswer === questions[i]) {
            score++;
        }
    }
    return alert(`Поздравляем! Вы набрали ${score} баллов!`);
}
quiz();
