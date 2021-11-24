//1. С помощью функции prompt спросите у пользователя
// его страну проживания. Если пользователь ничего
// не ввел (пустая строка),
let country =  prompt('Введите страну где проживаете');
if(!country) {
    alert('Введите данные');
}
if (Number.isInteger(country / 1)) {
    alert('Название не может быть числом');
}

//2. С помощью prompt попросите пользователя ввести два числа.
// После чего выведите результат является ли второе число
// кратным первому числу;
let a = prompt('Введите первое число');
let b = prompt('Введите второе число');
if((a % b) === 0) {
    alert('2 число делится нацело на 1');
} else if ((a / b) !== 0) {
    alert('2 число НЕ делится нацело на 1');
}

//3. С помощью prompt попросите пользователя ввести число.
// Сделать проверку на пустую строку и если значение является
// НЕ числом.В результате вывести пользователю каким является
// число (четное или нечетное);
let num = prompt('Введите число для проверки');

if(!num || !Number.isInteger(num / 1)) {
    alert('Что-то пошло не так)');
} else {
    if(num % 2 === 0){
        alert('Число четное');
    } else {
        alert('Число НЕ четное');
    }
}

//4. Создайте скрипт, который просит ввести пользователя число от 1 до 100.
// Добавить проверку на то, что значение является числом,на пустую строку,
// и на заданный диапазон (не меньше 1 и не больше 100). Выведите пользователю
// ответ в какой четверти лежит число.1-25 (первая четверть), 26-50
// (вторая четверть), 51-75 (третья четверть), 76-100 (четвертая четверть);
let Hundred = prompt('Введите число от 1 до 100');

if(!Hundred || !Number.isInteger(Hundred / 1)) {
    alert('Вводите только число)');
} else if(Hundred < 0 && Hundred > 100) {
    alert('число от 1 до 100!!!');
} else {
    if (Hundred <=25) {
        alert('Первая четверть');
    }
    if (Hundred > 25 && Hundred <= 50) {
        alert('Вторая четверть');
    }
    if (Hundred > 50 && Hundred <= 75) {
        alert('Третья четверть');
    }
    if (Hundred > 75) {
        alert('Четвертая четверть');
    }
}

//5. Создайте скрипт, который в цикле будет выводить простые числа от 1 до 500;
let check = false;
let string = '';
Start:
for (let i = 1; i <=500; i++) {
    for (let j = 2; j < i; j++) {
        if(i % j === 0) {
            continue Start;
        }
    }
    string += `${i}, `;
} console.log('5 Задание:' + string);

//6. Создайте скрипт, который выведет числа от 1000 до 300 в обратном порядке;
let String = '';
for (let i = 1000; i >=300; i--) {
    String+= `${i}, `;
}
console.log('6 Задание:' + String);

//7. Попросите пользователя ввести число. Выведите результат сложения,
// вычитания, деления и умножения введенного числа на все числа от 1 до 100.
let Num = prompt('Введите число для 7 Задания');

for(let i = 1; i <= 100; i++) {
    let plus = Number(Num) + Number(i);
    let minus = Number(Num) - Number(i);
    let multiple = Number(Num) * Number(i);
    let division = Number(Num) / Number(i);
    console.log(`${plus}, ${minus}, ${multiple}, ${division}\n`);
}

//8. Создайте простой калькулятор. Попросите пользователя первый операнд,
// знак и второй операнд. Отобразите пользователю результат выполнения
// математического действия. Например: ввели 10, ввели "+", ввели 20
// (3 вызова prompt), результат - 30 (вывести в alert).Знаки могут быть
// "+", "-", "*", "/". Так же добавьте проверки на ввод двух операндов и
// знака. При делении добавьте обработку деления на ноль. Если происходит
// деление на ноль - вывести сообщение "На 0 делить нельзя".
let calc = [null, '', null];
calc[0] = prompt('Начнем 8 задание. Первое число');
calc[1] = prompt('операция');
calc[2] = prompt('Второе число');

if(calc[1] === '+') {
    alert(`Сумма равна: ${calc[0] + calc[2]}`);
}
if(calc[1] === '-') {
    alert(`Разница равна: ${calc[0] - calc[2]}`);
}
if(calc[1] === '*') {
    alert(`Произведение равно: ${calc[0] * calc[2]}`);
}
if(calc[1] === '/') {
    alert(`Частное равно: ${calc[0] / calc[2]}`);
}

// 9. Создайте игру "Угадай число".
let sum = prompt('Ваша ставка');
let aAndB = prompt('Диапазон игры');
let start = aAndB.split(' ')[0];
let end = aAndB.split(' ')[1];
let yourNum = Number(prompt('Ваше число:'));
let rand = Number(Math.floor(Math.random() * end)) + Number(start);
sum = Number(sum) + Number((end - start) * 0.1);
if (rand === yourNum) {
    alert(`Поздравляем! вы выиграли ${sum}`);
} else alert(`Число: ${rand}`);
