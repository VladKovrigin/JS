
//1. С помощью функции prompt спросите у пользователя
// его страну проживания. Если пользователь ничего
// не ввел (пустая строка),
function checkPromptStr(str) {
    try {
        let myPrompt = prompt(str);
        if (Number(myPrompt)) {
            return checkPromptStr('Вы ввели число. Попробуйте еще раз');
        } else if(!myPrompt) {
            return checkPromptStr('Вы не ввели значение');
        } else if(!myPrompt.trim()) {
            return checkPromptStr('Вы ввели только пробелы :)')
        }
        else {
            return myPrompt;
        }
    } catch (e) {
        console.log(e);
    }
}
checkPromptStr('Введите страну где проживаете');


//2. С помощью prompt попросите пользователя ввести два числа.
// После чего выведите результат является ли второе число
// кратным первому числу;
function checkPromptNumber(str) {
    try {
        let myPrompt = prompt(str);
        if(!myPrompt) {
            return checkPromptNumber('Вы не ввели значение');
        } else if (!Number(myPrompt)) {
            return checkPromptNumber('Вы ввели НЕ число. Попробуйте еще раз');
        } else if(!myPrompt.trim()) {
            return checkPromptNumber('Вы ввели только пробелы :)')
        } else {
            return +myPrompt;
        }
    } catch (e) {
        console.log(e);
    }
}
let a = checkPromptNumber('Введите первое число');
let b = checkPromptNumber('Введите второе число');

if( (a % b) === 0 ) {
    alert(`Число ${a} делится нацело на ${b}`);
} else if ( (a / b) !== 0 ) {
    alert(`Число ${a} НЕ делится нацело на ${b}`);
}


//3. С помощью prompt попросите пользователя ввести число.
// Сделать проверку на пустую строку и если значение является
// НЕ числом.В результате вывести пользователю каким является
// число (четное или нечетное);
let num = checkPromptNumber('Введите число для проверки');

if( num % 2 === 0 ){
    alert(`Число ${num} четное`) ;
} else {
    alert(`Число ${num} НЕ четное`);
}


//4. Создайте скрипт, который просит ввести пользователя число от 1 до 100.
// Добавить проверку на то, что значение является числом,на пустую строку,
// и на заданный диапазон (не меньше 1 и не больше 100). Выведите пользователю
// ответ в какой четверти лежит число.1-25 (первая четверть), 26-50
// (вторая четверть), 51-75 (третья четверть), 76-100 (четвертая четверть);
let hundred = checkPromptNumber('Введите число от 1 до 100');

if( hundred < 0 || hundred > 100 ) {
    checkPromptNumber('число от 1 до 100!!!');
}
if ( hundred <=25 ) {
    alert('Первая четверть');
} else if ( hundred > 25 && +hundred <= 50 ) {
    alert('Вторая четверть');
} else if ( hundred > 50 && +hundred <= 75 ) {
    alert('Третья четверть');
} else {
    alert('Четвертая четверть');
}

//5. Создайте скрипт, который в цикле будет выводить простые числа от 1 до 500;
let string = '';
Start:
for ( let i = 1; i <=500; i++ ) {
    for ( let j = 2; j < i; j++ ) {
        if ( i % j === 0 ) {
            continue Start;
        }
    }
    string += `${i}, `;
} console.log(`5 Задание: ${string}`);


//6. Создайте скрипт, который выведет числа от 1000 до 300 в обратном порядке;
string = '';
for ( let i = 1000; i >=300; i-- ) {
    string+= `${i}, `;
} console.log(`6 Задание: ${String}`);


//7. Попросите пользователя ввести число. Выведите результат сложения,
// вычитания, деления и умножения введенного числа на все числа от 1 до 100.
let Num = checkPromptNumber('Введите число для 7 Задания');

for(let i = 1; i <= 100; i++) {
    let plus = Number(Num) + Number(i);
    let minus = Number(Num) - Number(i);
    let multiple = Number(Num) * Number(i);
    let division = Number(Num) / Number(i);
    console.log(`${plus}, ${minus}, ${multiple}, ${division.toFixed(3)}\n`);
}


//8. Создайте простой калькулятор. Попросите пользователя первый операнд,
// знак и второй операнд. Отобразите пользователю результат выполнения
// математического действия. Например: ввели 10, ввели "+", ввели 20
// (3 вызова prompt), результат - 30 (вывести в alert).Знаки могут быть
// "+", "-", "*", "/". Так же добавьте проверки на ввод двух операндов и
// знака. При делении добавьте обработку деления на ноль. Если происходит
// деление на ноль - вывести сообщение "На 0 делить нельзя".
let calc = [null, '', null];
calc[0] = checkPromptNumber('Начнем 8 задание. Первое число');
calc[1] = checkPromptStr('операция');
calc[2] = checkPromptNumber('Второе число');

if( calc[1] === '+' ) {
    alert( `Сумма равна: ${+calc[0] + +calc[2]}` );
}
if( calc[1] === '-' ) {
    alert( `Разница равна: ${+calc[0] - +calc[2]}` );
}
if( calc[1] === '*' ) {
    alert( `Произведение равно: ${+calc[0] * +calc[2]}` );
}
if( calc[1] === '/' ) {
    alert( `Частное равно: ${+calc[0] / +calc[2]}` );
}


// 9. Создайте игру "Угадай число".
let sum = checkPromptNumber('Ваша ставка');
let start = checkPromptNumber('Диапазон игры ОТ:');
let end = checkPromptNumber('ДО:');

let yourNum = checkPromptNumber( 'Ваше число:' );

let rand = Number(Math.floor(Math.random() * (+end - +start))) + +start;
sum += (+end - +start) * 0.1;

if ( rand === +yourNum ) {
    alert(`Поздравляем! вы выиграли ${sum}`);
} else {
    alert(`Число: ${rand}`);
}


//10. Камень - ножницы - бумага
let user = checkPromptStr('Поиграем в КНБ. Ваш знак:');
let rps = ['Камень', 'Ножницы', 'Бумага'];

for( let i = 0; i <= 2; i++ ) {
    if( user === rps[i] ) {
        let win = false;

        let PC = +Math.floor(Math.random() * 2);
        alert(rps[PC]);

        if( user === rps[0] && rps[PC] ===  rps[1] ) {
            win = true;
        }
        if( user ===  rps[1] && rps[PC] ===  rps[2] ) {
            win = true;
        }
        if( user ===  rps[2] && rps[PC] ===  rps[0] ) {
            win = true
        }

        if( PC === i ) {
            alert('Ничья');
        } else if( win ) {
            alert('Победа!');
        } else {
            alert('В следующий раз повезет :)');
        }
    }
}
