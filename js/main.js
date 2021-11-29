
//1.Напишите функцию upFirst(str), которая возвращает строку str с заглавным первым символом,
//    остальные символы должны быть в нижнем регистре (пример: upFirst("иванов"),
//    должно вернуть "Иванов", up_first("ИВАНОВ"), должно вернуть "Иванов")
function upFirst(str) {
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

