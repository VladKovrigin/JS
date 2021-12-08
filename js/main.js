const addElement = document.getElementById('add-element');
const deleteElement = document.getElementById('delete-element');
const tests = [];

//Добавление поля вариант объекта
addElement.onclick = () => {
    let options = document.getElementById('options');
    console.log(options);
    options.innerHTML +=
        '<li>\n' +
        '    <input class="form-check-input" type="checkbox">\n' +
        '    <input class="add-answer" type="text" placeholder="Вариант ответа">\n' +
        '</li>'
}

const addTest = document.getElementById('add-test');
const testName = document.getElementById('test-name');

//Создание объекта нового теста
addTest.onclick = () => {
    let newTest = {
        name:  `${testName.value}`,
        questions: [
            {
                title:'',
                answers: [
                    {
                        text: '',
                        isCorrect: false,
                    }
                ]
            }
        ]
    }
    tests.push(newTest);
    console.log(tests);
}
deleteElement.onclick = function () {
    let options = document.getElementById('options');
    options.lastChild.remove();
}

const addAnswer = document.getElementsByClassName('add-answer');
const addAnswerButton = document.getElementById('add-answer-button');
const questionName = document.getElementById('question-name');
const addCorrect = document.querySelector('.add-question .form-check-input');

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

    //Находим правильный вариант ответа из отмеченных
    let correctAnswer = {};
    [].forEach.call(addCorrect, (item) => {
        console.log('Значение ' + item.value);
    })

    //Добавляем на страницу варианты ответов
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
            isCorrect: Boolean()
        }
        newQuestion.answers.push(textAnswer);
    })
    //console.log(newQuestion);
}

const deleteQuestion = document.getElementById('delete-question');

deleteQuestion.onclick = function () {
    let question = document.getElementById('test');
    question.lastChild.remove();
}