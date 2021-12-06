//2. Создайте кнопку и инпут с текстом Hello, Palmo. При клике
// на кнопку в инпуте текст должен замениться на Hello, World!
let input = document.getElementById("second-point");
input.value = 'Hello, Palmo';

document.getElementById('to-hello-world').onclick = function() {
    input.value = 'Hello, World';
}


//3. Создайте кнопку и инпут. При клике на кнопку в
// console.log выведите содержимое инпута.
let inputSecond = document.getElementById("value-to-log");

document.getElementById('console-log').onclick = function() {
    console.log(inputSecond.value);
}


//4. Создайте 2 заголовка h1 и кнопку. При клике на кнопку текст
// в заголовках должен замениться друг на друга.
let reverseButton = document.getElementById("reverse-value");
let firstValue = document.getElementById('first-value');
let secondValue = document.getElementById('second-value');

reverseButton.onclick = function() {
    let value = firstValue.innerText;
    firstValue.innerText = secondValue.innerText;
    secondValue.innerText = value;
}


//5. Создайте абзац (<p>) с любым текстом и кнопку.
// При клике на кнопку цвет текста должен поменять на
// красный, кликнув еще раз, текст должен вернуть исходный цвет.
let buttonChangeP = document.getElementById('change-color');
let pChangeColor = document.getElementById('p-color');
let thisColor = false;

buttonChangeP.onclick = function() {
    thisColor = !thisColor;
    if(thisColor) {
        pChangeColor.style.color = 'red';
    }
    else {
        pChangeColor.style.color = 'black';

    }
}


//6. Создайте кнопку и инпут. При клике на кнопку инпут должен стать
// заблокированным (disabled). При повторном клике должен разблокироваться.
let buttonDisabled = document.getElementById('to-disabled');
let disableInput = document.getElementById('disable-input');
let disable = false;

buttonDisabled.onclick = function() {
    disable = !disable;
    disableInput.disabled = disable;
}


//7. Создайте 2 квадрата (зеленый и красный). При клике на зеленый
// - цвет зеленого квадрата должен стать красным, красный - зеленым. И наоборот.
let firstColor = document.getElementById('first');
let secondColor = document.getElementById('second');

firstColor.style.background = 'red';
secondColor.style.background = 'green';

firstColor.onclick = function changeBackground() {
    let color =  firstColor.style.background;
    firstColor.style.background = secondColor.style.background;
    secondColor.style.background = color;
}

secondColor.onclick = function changeBackground() {
    let color =  firstColor.style.background;
    firstColor.style.background = secondColor.style.background;
    secondColor.style.background = color;
}


//8. Создайте кнопку и пустой список ul на странице. При каждом клике
// должен появляться новый элемент списка с порядковым номером.
let addLi = document.getElementById('add-li');
let myUl = document.getElementById('ol');
let item = 0;
addLi.onclick = function() {
    let createLi = document.createElement('li');
    createLi.innerText = item;
    myUl.prepend(createLi);
    item++;
}


//9. Создайте textarea и кнопку на странице. При клике на кнопку
// внизу должен появиться список с каждым значением в textarea,
// перечисленном через запятую. Например: в textarea ввели -
// яблоко, груша, помидор, апельсин, манго. Внизу должен появиться список
//         1. яблоко
//         2. груша
//         3. помидор
//         4. апельсин
//         5. манго
let addList = document.getElementById('add-to-textarea');
let fromTextArea = document.getElementById('from-textarea');

addList.onclick = function() {
    let text = document.getElementById('text-area').value;
    text = text.split(',');
    let i = 1;
    for(let item of text) {
        let createLi = document.createElement('li');
        createLi.innerText = `${i}. ${item}`;
        fromTextArea.append(createLi);
        i++;
    }
}


// форма введения логина, пароля, повтора пароля, емейла и возраста
let submitButton = document.getElementById('submit-button');
let login = document.getElementById('login');
let password = document.getElementById('password');
let passwordAgain = document.getElementById('password-again');
let email = document.getElementById('email');
let myAge = document.getElementById('age');
let checkLogin = '._/\\|,';
submitButton.disabled = false;
let check = 0;
submitButton.onclick = function () {
    if(login.value.length < 4 || login.value.length > 20 || login.value.includes(checkLogin)) {
        check++;
    }

    let checkEmail = /\S+@\S+\.\S+/;
    if(!checkEmail.test(email.value)) {
        check++;
    }
    if(!isFinite(myAge.value) || isFinite(myAge.value) < 0) {
        check++;
    }
    let checkPassword = password.value.match(/\d+/);
    if(password.value.length < 6 || !checkPassword) {
        check++;
    }
    let checkPasswordAgain = passwordAgain.value.match(/\d+/);
    if(passwordAgain.value.length < 6 || !checkPasswordAgain) {
        check++;
    }
    if(password.value === passwordAgain.value) {
        check++;
    }

    if(check > 0) {
        console.log(check);
        alert('ПРОВЕРЬТЕ ПРАВИЛЬНОСТЬ ЗАПОЛНЕНИЯ');
    }
}

//11. Создайте простейший калькулятор. На странице должны быть
// кнопки от 0 до 9 и знаки + - * / =. При клике на каждую цифру
// или знак, значение должно появляться в строке. При нажатии на
// кнопку "=" - вывести результат математического выражения.
// Не забудьте добавить все проверки.
let button = document.getElementById('keyboard').getElementsByTagName('button');
let previous = document.getElementById('previous').getElementsByTagName('p');
let result = document.getElementById('result').getElementsByTagName('p');

button.onclick = function() {
    previous.prepend(button.value);
}
