const addElement = document.getElementById('add-element');
const deleteElement = document.getElementById('delete-element');
const test = {};
test.questions = [];
let tests = [];
let testNumber = 0;
const testList = document.getElementById('test-list');
let thisTest = 0;
const listItem = document.getElementsByClassName('list-item');

//Добавление поля варианта при создание вопроса
addElement.onclick = () => {
    let options = document.getElementById('options');
    options.innerHTML +=
        '<li>\n' +
        '    <input class="form-check-input check-correct-answer" type="checkbox">\n' +
        '    <input class="add-answer" type="text" placeholder="Вариант ответа">\n' +
        '</li>'
}

// Удаляем поле варианта при создании теста
deleteElement.onclick = function () {
    let options = document.getElementById('options');
    options.lastChild.remove();
}

// Функция для очистки страницы

function clearAllQuestions ()  {
    while(questionList.lastChild) {
        questionList.lastChild.remove();
    }
    deleteQuestion.style.visibility = 'hidden';
}

const addQuestion = document.getElementById('add-question');

const checkCorrects = document.getElementById('check-corrects');
const testName = document.getElementById('test-name');

//Создание объекта нового теста
const addTest = document.getElementById('add-test');
addTest.onclick = function addNewTest() {
    clearAllQuestions();
    myMark.style.visibility = 'hidden';

    addQuestion.style.visibility = 'visible';
    saveTest.style.visibility = 'visible';
    checkCorrects.style.visibility = 'hidden';
    testName.style.visibility = 'visible';
    for(let thisTest of listItem) {
        thisTest.style.pointerEvents = 'auto';
    }

    return false;
}
checkCorrects.style.visibility = 'hidden';

const addAnswer = document.getElementsByClassName('add-answer');
const addAnswerButton = document.getElementById('add-answer-button');
const questionName = document.getElementById('question-name');
const addCorrect = document.getElementsByClassName('check-correct-answer');
const questionList = document.getElementById('test');

//Создание вопроса
addAnswerButton.onclick = () => {
    //Создаем новый объект вопроса
    let newQuestion = {
        title:'',
        answers: []
    }

    //Добавляем на страницу сам вопрос
    questionList.innerHTML +=
        '<div class="form-check">\n' +
        '    <p id="question-title">' +
        `        ${questionName.value}` +
        '    </p>' +
        '</div>';
    let arrayCorrects = [];

    //Находим правильный вариант ответа из отмеченных
    [].forEach.call(addCorrect, (item) => {
        arrayCorrects.push(item.checked);
    })

    //Добавляем на страницу варианты ответов
    let i = 0;
    newQuestion.title = questionName.value;
    [].forEach.call(addAnswer, function (item){
        questionList.lastChild.innerHTML +=
            '     <div>\n' +
            '        <label class="form-check-label">\n' +
            '            <input class="form-check-input" type="checkbox" name="exampleRadios">\n' +
            `                 ${item.value}\n` +
            '        </label>\n' +
            '    </div>\n';

        let textAnswer = {
            text: `${item.value}`,
            isCorrect: arrayCorrects[i]
        }
        i++;

        newQuestion.answers.push(textAnswer);
        item.value = '';
    })

    //Добавляем вопрос на страницу
    test.questions.push(newQuestion);
    questionName.value = '';
    deleteQuestion.style.visibility = 'visible';
}


//Удаление вопроса
const deleteQuestion = document.getElementById('delete-question');
deleteQuestion.onclick = () => {
    let question = document.getElementById('test');
    question.lastChild.remove();
}


//Сохранение теста
const saveTest = document.getElementById('save-test');

saveTest.onclick = () => {
    let testsInLS = JSON.parse(localStorage.getItem('tests'));

    if(testName.value && +test.questions.length > 0) {
        test.name = `${testName.value}`;
        if(testsInLS === null) testsInLS = [];
        testsInLS.push(test);
        localStorage.setItem('tests', JSON.stringify(testsInLS));

        testList.innerHTML +=
            `<li id="${testNumber++}" class="list-item" onclick="getTest(this, testNumber)">${testName.value}</li>`;

        addQuestion.style.visibility = 'hidden';
        saveTest.style.visibility = 'hidden';
        clearAllQuestions();
    }
}
let testsInLS = JSON.parse(localStorage.getItem('tests'));

if(JSON.parse(localStorage.getItem('tests'))) {
    testsInLS.forEach((test) => {
        testList.innerHTML +=
            `<li id="${testNumber++}" class="list-item" onclick="getTest(this)">${test.name}</li>`;
    })
}


function getTest(elem) {
    // Корректируем страницу
    clearAllQuestions();
    addQuestion.style.visibility = 'hidden';
    deleteQuestion.style.visibility = 'hidden';
    saveTest.style.visibility = 'hidden';
    let tests = JSON.parse(localStorage.getItem('tests'));
    thisTest = tests[elem.id];

    //Добавляем на страницу название теста
    questionList.innerHTML +=
        '<div class="form-check">\n' +
        '    <p id="question-title">' +
        `        ${thisTest.name}` +
        '    </p>' +
        '</div>';

    // Выводим вопрос
    for(let item = 0; item < thisTest.questions.length; item++) {
        //Сам вопрос
        questionList.innerHTML +=
            '<div class="form-check">\n' +
            '    <p id="question-title">' +
            `        ${thisTest.questions[item].title}` +
            '    </p>' +
            '</div>';

        //Варианты ответов
        thisTest.questions[item].answers.forEach((answer) => {
            questionList.lastChild.innerHTML +=
                '     <div class="right-answer">\n' +
                '        <label class="form-check-label">\n' +
                '            <input class="form-check-input" type="checkbox" name="exampleRadios">\n' +
                `                 ${answer.text}\n` +
                '        </label>\n' +
                '    </div>\n';
        })
    }

    // можем кликать на все тесты кроме выбранного
    for(let thisTest of listItem) {
        thisTest.style.pointerEvents = 'auto';
    }
    elem.style.pointerEvents = 'none';

    // Корректируем страницу
    checkCorrects.style.visibility = 'visible';
    testName.value = '';
    testName.style.visibility = 'hidden';
}

const myMark = document.getElementById('mark');

checkCorrects.onclick = () => {

    let inputs = document.getElementsByClassName('form-check-input');
    let div = document.getElementsByClassName('right-answer');
    let i = 0;
    let mark = 0;
    let maxMark = 0;

    //Проверка на правильность
    for(let item of thisTest.questions) {
        for(let ans of item.answers) {
            if(ans.isCorrect && inputs[i].checked) {
                div[i].style.backgroundColor = 'rgba(83, 185, 66, 0.4)';
                mark++;
                maxMark++;
            }
            if(!ans.isCorrect && inputs[i].checked) {
                div[i].style.backgroundColor = 'rgba(255,69,50,0.4)';
            }
            if(ans.isCorrect && !inputs[i].checked) {
                div[i].style.backgroundColor = 'rgba(255,153,50,0.4)';
                maxMark++;
            }
            inputs[i].style.display = 'none';
            i++;
        }
    }
    myMark.innerHTML += `<p id="my-mark">Баллов: ${mark}/${maxMark}</p>\n`;
}