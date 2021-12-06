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

buttonChangeP.onclick = function() {
    pChangeColor.style.color === 'red' ? pChangeColor.style.color = 'black' : pChangeColor.style.color = 'red';
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
document.getElementById('text-area').value = '';
addList.onclick = function() {
    let text = document.getElementById('text-area').value;
    text = text.split(',');
    let i = 1;
    if(text.length) {
        for(let item of text) {
            let createLi = document.createElement('li');
            createLi.innerText = `${i}. ${item}`;
            fromTextArea.append(createLi);
            i++;
        }
    }
}


// форма введения логина, пароля, повтора пароля, емейла и возраста
let submitButton = document.getElementById('submit-button');
let login = document.getElementById('login');
let password = document.getElementById('password');
let passwordAgain = document.getElementById('password-again');
let email = document.getElementById('email');
let myAge = document.getElementById('age');

let checkLogin = '._/|,';
let check = true;

submitButton.onclick = function () {
    let wrongLoginMessage = document.getElementById('wrongLogin');

    if(login.value.length < 4 || login.value.length > 20 || login.value.includes(checkLogin)) {
        login.style.borderColor = 'red';
        wrongLoginMessage.innerText = 'Слишком маленькая, либо слишком большая длинна логина';
    } else {
        wrongLoginMessage.innerText = '';
        login.style.borderColor = 'blue';
    }

    let wrongEmailMessage = document.getElementById('wrongEmail');
    let checkEmail = /\S+@\S+\.\S+/;
    if(!checkEmail.test(email.value)) {
        email.style.borderColor = 'red';
        wrongEmailMessage.innerText = 'Не соблюдены правила написания написания адреса Электронной почты';
    } else {
        wrongEmailMessage.innerText = '';
        email.style.borderColor = 'blue';
    }

    let wrongAgeMessage = document.getElementById('wrongAge');
    if(!isFinite(myAge.value) || isFinite(myAge.value) <= 0 || !myAge.value) {
        myAge.style.borderColor = 'red';
        wrongAgeMessage.innerText = 'Должно быть введено неотрицательное целое число';
    } else {
        wrongAgeMessage.innerText = '';
        myAge.style.borderColor = 'blue';
    }

    let wrongPasswordMessage = document.getElementById('wrongPassword');
    let checkPassword = password.value.match(/\d+/);
    if(password.value.length < 6 || !checkPassword) {
        password.style.borderColor = 'red';
        wrongPasswordMessage.innerText = 'Пароль должен иметь не менее 6 символов';
    } else {
        wrongPasswordMessage.innerText = '';
        password.style.borderColor = 'blue';
    }

    let wrongPasswordAgainMessage = document.getElementById('wrongPasswordAgain');
    if(passwordAgain.value.length < 6 || !checkPassword) {
        passwordAgain.style.borderColor = 'red';
        wrongPasswordAgainMessage.innerText = 'Пароль должен иметь не менее 6 символов';
    } else {
        wrongPasswordAgainMessage.innerText = '';
        passwordAgain.style.borderColor = 'blue';
    }
    if(password.value !== passwordAgain.value && passwordAgain.value && password.value) {
        passwordAgain.style.borderColor = 'red';
        password.style.borderColor = 'red';
        wrongPasswordAgainMessage.innerText = 'Пароли должны совпадать';
    } else {
    }
}

//11. Создайте простейший калькулятор. На странице должны быть
// кнопки от 0 до 9 и знаки + - * / =. При клике на каждую цифру
// или знак, значение должно появляться в строке. При нажатии на
// кнопку "=" - вывести результат математического выражения.
// Не забудьте добавить все проверки.
let buttons = document.getElementById('keyboard').getElementsByTagName('button');
let buttonResult = document.getElementById('result-button');

for(let button of buttons) {
    button.onclick = function() {
        if(button.onclick === buttonResult.onclick) {
            let result = eval(document.getElementById('previous').innerText);
            document.getElementById('result').innerText = result;
            document.getElementById('previous').innerText = '';
        }
        document.getElementById('previous').innerText += button.value;
    }
}



// 12. Корзина товаров
let itemBox = document.querySelectorAll('.item_box');
let cartCont = document.getElementById('cart_content');
function addEvent(elem, type, handler){
    if(elem.addEventListener){
        elem.addEventListener(type, handler, false);
    }
    return false;
}

function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}
function setCartData(o){
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}

function addToCart(e) {
    let cartData = getCartData() || {};
    let parentBox = this.parentNode;
    let itemId = this.getAttribute('data-id');
    let itemTitle = parentBox.querySelector('.item_title').innerHTML;
    let itemPrice = parentBox.querySelector('.item_price').innerHTML;

    if(cartData.hasOwnProperty(itemId)){
        cartData[itemId][2]++;
    } else {
        cartData[itemId] = [itemTitle, itemPrice, 1];
    }

    if(!setCartData(cartData)){
        cartCont.innerHTML = 'Товар добавлен в корзину.';
        setTimeout(function(){
            cartCont.innerHTML = 'Продолжить покупки...';
        }, 500);
    }
    return false;
}

for(let i = 0; i < itemBox.length; i++){
    addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}

function openCart(e){
    let cartData = getCartData();
    let totalItems = '';

    if(cartData !== null) {
        totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
        for(let items in cartData){
            totalItems += '<tr>';
            for(let i = 0; i < cartData[items].length; i++){
                totalItems += '<td>' + cartData[items][i] + '</td>';
            }
            totalItems += '</tr>';
        }
        totalItems += '<table>';
        cartCont.innerHTML = totalItems;
    } else {
        cartCont.innerHTML = 'В корзине пусто!';
    }
    return false;
}

addEvent(document.getElementById('checkout'), 'click', openCart);

addEvent(document.getElementById('clear_cart'), 'click', function(e){
    localStorage.removeItem('cart');
    cartCont.innerHTML = 'Корзина очищена.';
});