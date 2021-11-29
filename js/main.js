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
function middleNumber(a, b, c) {
    if ( a > b && a < c || a < b && a > c ) {
        return a;
    } else if( b > a && b < c || b < a && b > c ){
        return b;
    } else {
        return c;
    }
}

let a = checkPromptNumber();
let b = checkPromptNumber();
let c = checkPromptNumber();
alert(middleNumber(a, b, c));


//3. Создайте функцию, которая принимает объект и проверяет
// есть ли в нем свойство 'name'. Вернуть Boolean тип.
function checkName(obj) {
    return obj.hasOwnProperty('name');
}


//4. Создайте функцию, которая принимает объект со свойствами
// name и username и возвращает строку в формате Имя Фамилия.
function writeNamesUser(obj) {
    return `${obj.name} ${obj.username}`;
}
let user = {
    name: 'John',
    username: 'hot mexican boy'
};
alert(writeNamesUser(user));


//5. Создайте функцию, которая принимает объекте типа
// {name1: 200, name2: 500, name3: 400}. Функция должна
// вернуть сумму всех свойств объекта.
function sumNums(obj) {
    let res = 0;
    for(let x in obj) {
        res += Number(obj[x]);
        console.log(res);
    } return res;
}

let nums = {
    nameFirst: 200,
    nameSecond: 500,
    nameThird: 400,
}

alert('5 задание' + sumNums(nums));


//6. Создайте функцию, которая принимает объект. Все ЧИСЛОВЫЕ
// свойства объекта нужно поделить на 2, если получилось НЕ целое
// число - округлить его по математическим правилами, а текстовые
// поменять на строку Hello, Palmo. Если свойство не числовое или
// не текстовое - удалить его из объекта. Функция должна вернуть
// переделанный объект.
function editObject(obj) {
    for(let x in obj) {
        if(isFinite(+obj[x])) {
            obj[x] = obj[x] / 2;
            if(obj[x] % 2 !== 0) {
                obj[x] = Math.round(obj[x]);
            }
        } else if(!isFinite(+obj[x])) {
            obj[x] = 'Hello, Palmo';
        } else {
            delete obj[x];
        }
    }
    return obj;
}

alert('6 задание ' + editObject(user) + '\n' + editObject(nums));

// 7. Создайте игру "Викторина". Опираясь на ваши знания по JS,
// создайте игру, которая поочередно задаст пользователю 10 вопросов.
// За каждый правильный ответ начисляйте пользователю 1 балл. После
// ответа на все вопросы выведите сколько баллов заработал пользователь.
function quiz() {
    alert('сыграем в викторину. в ответах пишите "да", либо "нет" в односложных ответах.');
    alert('пишите "1", или "2", если в вопросе выбор одного из двух вариантов');
    alert('помните, что свободы выбора не существует ✋🏽');
    let questions = {
        1: 'Первый президент Украины',
        2: 'Palmo - лучшая IT компания?',
        3: 'Отступы между "()" скобочек нужны?',
        4: 'кофе или чай?',
        5: 'собаки или кошки?',
        6: 'голуби смогут захватить мир?',
        7: 'кто по дороге из магазина всегда отбирает \n' +
            'палочки для чая у работников Palmo?',
        8: 'VS Code или PhPStorm?',
        9: 'Ubuntu или винда?',
        10: 'просто напиши "котики милые"',
    };
    let answers = {
        1: 'Кравчук',
        2: 'да',
        3: 'да',
        4: '1',
        5: '2',
        6: 'да',
        7: 'я',
        8: '1',
        9: '1',
        10: 'котики милые',
    }

    let score = 0;
    for(let i = 1; i <= 10; i++) {
        let myAnswer = prompt(`${questions[i]}`);

        if(myAnswer === 'кншн') {
            myAnswer = 'да';
        }
        if(myAnswer === 'не я') {
            myAnswer = 'я';
        }

        if (myAnswer.toLowerCase() === answers[i].toLowerCase()) {
            score++;
        } else {
            console.log(`вопрос ${i}. Вы выбрали ${myAnswer}, а надо ${answers[i]}`);
        }
        if(!myAnswer) {
            alert('не пропускаем вопросы!');
            i--;
        }
    }
    return alert(`Поздравляем! Вы набрали ${score} баллов!`);
}
quiz();
