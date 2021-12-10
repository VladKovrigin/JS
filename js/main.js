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
const testName = document.getElementById('test-name');

//Создание объекта нового теста
const addTest = document.getElementById('add-test');
addTest.onclick = function addNewTest() {
    clearAllQuestions();
    myMark.style.visibility = 'hidden';

    addQuestion.style.visibility = 'visible';
    saveTest.style.visibility = 'visible';
    testName.style.visibility = 'visible';
    for(let thisTest of listItem) {
        thisTest.style.pointerEvents = 'auto';
    }

    return false;
}

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
    let arrayCorrects = [];
    let checkedAnswer = false;
    //Находим правильный вариант ответа из отмеченных
    [].forEach.call(addCorrect, (item) => {
        arrayCorrects.push(item.checked);
        if(item.checked) {
            checkedAnswer = true;
        }
    });
    if(!checkedAnswer) {
        [].forEach.call(addCorrect, (item) => {
            item.style.border = '2px solid rgba(255,69,50,0.8)';
        });
    } else {
        [].forEach.call(addCorrect, (item) => {
            item.style.border = '1px solid rgba(128, 128, 128, 0.7)';
        });
    }
    let checkedText = true;
    [].forEach.call(addAnswer, (item) => {
        if(!item.value) {
            checkedText = false;
            item.style.backgroundColor = 'rgba(255,69,50,0.3)';
            item.style.borderRadius=  '10px';
        } else {
            item.style.backgroundColor = 'white';
            item.style.borderRadius=  '0';
        }
    })
    if(!questionName.value) {
        questionName.style.backgroundColor = 'rgba(255,69,50,0.3)';
        questionName.style.borderRadius=  '10px';
    } else {
        questionName.style.backgroundColor = 'white';
        questionName.style.borderRadius=  '0';
    }
    if( questionName.value && checkedAnswer && checkedText ) {
        //Добавляем на страницу сам вопрос
        questionList.innerHTML +=
            '<div class="form-check">\n' +
            '    <p id="question-title">' +
            `        ${questionName.value}` +
            '    </p>' +
            '</div>';

        //Добавляем на страницу варианты ответов
        let i = 0;
        newQuestion.title = questionName.value;
        [].forEach.call(addAnswer, (item) => {
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
        [].forEach.call(addCorrect, (item) => {
            item.checked = false;
        });
    }
}


//Удаление вопроса
const deleteQuestion = document.getElementById('delete-question');
deleteQuestion.onclick = () => {
    let question = document.getElementById('test');
    question.lastChild.remove();
    test.questions.pop();
}


//Сохранение теста
const saveTest = document.getElementById('save-test');

saveTest.onclick = () => {
    let testsInLS = JSON.parse(localStorage.getItem('tests'));

    if(!testName.value) {
        testName.style.boxShadow = '#ff211e 0px 2px 8px 2px';
    } else {
        testName.style.boxShadow = '1px 3px 6px 2px rgba(128, 128, 128, 0.7)';
    }
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
        testName.value = '';
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
    testName.value = '';
    testName.style.visibility = 'hidden';
    if(document.getElementById('my-mark')) {
        document.getElementById('my-mark').remove();
    }
    document.getElementById('check-corrects').style.display = 'block';
    document.getElementById('check-corrects').style.visibility = 'visible';
}

const myMark = document.getElementById('mark');

function corrects() {
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
                div[i].style.backgroundColor = 'rgba(255,69,50,0.4)';
                maxMark++;
            }
            inputs[i].style.display = 'none';
            i++;
        }
    }
    if(!document.getElementById('my-mark')) {
        myMark.innerHTML += `<p id="my-mark">Баллов: ${mark}/${maxMark}</p>\n`;
    }
    document.getElementById('check-corrects').style.display = 'none';
}
document.getElementById('check-corrects').style.display = 'none';

document.getElementById('delete-test').onclick = () => {
    let testsInLS = JSON.parse(localStorage.getItem('tests'));
    testsInLS.pop();
    localStorage.setItem('tests', JSON.stringify(testsInLS));
    testList.lastChild.remove();
}