
//2. Создайте переменную num и присвойте ей значение 10.
// Выведите значение этой переменной с помощью console.log()
let num = 10;
console.log("Задание 2. num = " + num);

//3. Создайте переменные first = 5 и second = 10. Выведите в
// console.log() их сумму, разность, произведение и частность (деление)
let first = 5;
let second = 10;
console.log("Задание 3. '+': " + first + second);
console.log("Задание 3. '-': " + first - second);
console.log("Задание 3. '*': " + first * second);
console.log("Задание 3. '/': " + first / second);

//4. Создайте переменные a = 3 и b = 10, их сумму присвойте в переменную result
let a = 3;
let b = 10;
let result = a + b;

//5. Создайте переменную bar = 20 и qwerty = 5. В переменную res присвойте разность
// bar - qwerty и отнимите 10. В переменную end присвойте разность значения res
// и переменной qwerty
let bar = 20;
let qwerty = 5;
let res = bar - qwerty - 10;
let end = res - qwerty;

//6. Создайте переменную str и присвойте ей значение Hello, Palmo.
// Результат выведите в alert()
let str = "Hello, Palmo";
alert("Задание 6. srt: " + str);

//7. Создайте переменную name с вашим именем и age с возрастом.
// В alert() выведите результат Я (имя), мне (возраст).
// (значения подставить из переменных)
let name = "Владос";
let age = "18";
alert("Я " + name + ", мне " + age);

//8. Напишите скрипт, который считает количество секунд
// в часе, сутках и месяце. В console.log() выведите результат
let secondsInAnHour = 60 * 60;
let secondsInADay = secondsInAnHour * 24;
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function secondsInAMonth(value) {
    let val;
    if(value.substr(5, 6) === "0") {
        val = months[value.substr(6, 7) - 1] * secondsInADay;
    }
    else val = months[value.substr(5, 7) - 1] * secondsInADay;
    console.log(val);
}

//9. Создайте переменную с числом и возведите в квадрат
let numPow = 10;
console.log("Квадрат 10 = "+ Math.pow(numPow, 2));

//10. Создайте переменную d и присвойте ей значение 8. В переменную n
// поместите квадрат значения переменной d, а в переменную x
// - куб значения переменной d
let d = 8;
let n = Math.pow(d, 2);
let x = Math.pow(d, 3);