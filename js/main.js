const addElement = document.getElementById('add-element');
const deleteElement = document.getElementById('delete-element');
const tests = [];
let testNumber = 0;
let questionCounter = 0;
const testList = document.getElementById('test-list');

const getTest = localStorage.getItem('tests');
const parseTest = JSON.parse(getTest);

for(let item in parseTest) {
    testList.innerHTML +=
        `<li id="${testNumber++}" class="list-item" onclick="test(this)">${item.name}</li>`;
    console.log(parseTest[item]);
}


//Добавление поля варианта при создание вопроса
addElement.onclick = () => {
    let options = document.getElementById('options');
    console.log(options);
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
localStorage.clear()
// Функция для очистки страницы
function clearAllQuestions() {
    let question = document.getElementById('test');
    while(questionCounter > 0) {
        question.lastChild.remove();
        --questionCounter;
    }
    return question;
}

//Создание объекта нового теста
const addTest = document.getElementById('add-test');
addTest.onclick = clearAllQuestions();

const addAnswer = document.getElementsByClassName('add-answer');
const addAnswerButton = document.getElementById('add-answer-button');
const testName = document.getElementById('test-name');
const questionName = document.getElementById('question-name');
const addCorrect = document.getElementsByClassName('check-correct-answer');

//Создание вопроса
addAnswerButton.onclick = () => {
    //Создаем новый объект вопроса
    const questionList = document.getElementById('test');
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
        console.log('checked ' + item.checked);
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
    tests.push(newQuestion);
    questionName.value = '';

    questionCounter++;
}


//Удаление вопроса
const deleteQuestion = document.getElementById('delete-question');
deleteQuestion.onclick = function () {
    let question = document.getElementById('test');
    question.lastChild.remove();

    questionCounter--;
}


//Сохранение теста
const saveQuestion = document.getElementById('save-test');
saveQuestion.onclick = () => {
    tests.name = `${testName.value}`;
    console.log(tests);

    localStorage.setItem('tests', JSON.stringify(tests));
    console.log(JSON.stringify(tests));
    testList.innerHTML += `<li id="${testNumber++}" class="list-item" onclick="test(this)">${testName.value}</li>`;
    clearAllQuestions();
}


function test(elem) {
    const getTest = localStorage.getItem(elem.textContent);
    let thisTest = JSON.parse(getTest);
    console.log(thisTest);
}
