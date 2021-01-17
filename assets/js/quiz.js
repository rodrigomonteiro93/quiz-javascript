let elementContentInitial = document.querySelector('.content-quiz-1')
let elementContent = document.querySelector('.content-quiz-2')
let elementContentAside = document.querySelector('.content-quiz-2 aside')
let elementContentFinish = document.querySelector('.content-quiz-3')
let elementContentFinishAside = document.querySelector('.content-quiz-3 aside')
let quizCurrent = ''
let quizQuestionCurrent = 0
let quizValid = true

document.body.onload = preLoaderImages
function startQuiz(){
    elementContentInitial.classList.add('display-none')
    elementContent.classList.remove('display-none')


    elementContentAside.innerHTML = ''
    for (let i = 0; i < quiz.length; i++){
        elementContentAside.innerHTML = elementContentAside.innerHTML+`
        <a class="set-category" onclick="setCategory('${quiz[i].identify}')" href="javascript:void(0);" style="background: ${quiz[i].background};" title="${quiz[i].name}">
            <img src="${quiz[i].icon}" title="${quiz[i].name}" alt="${quiz[i].name}" />
            <span>
                ${quiz[i].name}
            </span>
        </a>
    `
    }
}

function preLoaderImages(){
    var elementPreLoader = document.createElement("div")
    elementPreLoader.setAttribute('id', 'preloader')
    elementPreLoader.setAttribute('class', 'display-none')
    var divAtual2 = document.getElementById("div")
    document.body.insertBefore(elementPreLoader, divAtual2)
    elementPreLoader.innerHTML = ''
    for (let i = 0; i < quiz.length; i++){
        console.log(quiz[i].icon)
        elementPreLoader.innerHTML = `${ elementPreLoader.innerHTML}
        <img src="${quiz[i].icon}" />
        <img src="${quiz[i].response[0].valid[0].icon}" />
        <img src="${quiz[i].response[0].invalid[0].icon}" />`
    }
    elementPreLoader.remove()
}

function setCategory(identify){
    quiz.filter((item) =>{
        if(item.identify === identify){
            quizCurrent = item
            return true
        }else{
            return false
        }
    })

    initQuestions()
}

function initQuestions(){
    let question = quizCurrent.question[quizQuestionCurrent]
    elementContent.style.backgroundColor = quizCurrent.background

    elementContent.innerHTML = `
        <figure>
            <img src="${quizCurrent.icon}" title="${quizCurrent.name}" alt="${quizCurrent.name}" />
        </figure>
        <strong class="p-top-30">
            ${question.name}
        </strong>
        <aside>
            <a class="btn" onclick="checkResponse(${(question.correct === 'y')})" href="javascript:void(0);" title="SIM">
                SIM
            </a>
            <a class="btn m-left-30-px" onclick="checkResponse(${(question.correct === 'n')})" href="javascript:void(0);" title="NÃO">
                NÃO
            </a>
        </aside>
    `
}
function checkResponse(response){
    if(!response){
        quizValid = false
    }
    quizQuestionCurrent++
    let question = quizCurrent.question[quizQuestionCurrent]
    if(question){
        initQuestions()
    }else{
        finishQuestions()
    }
}
function finishQuestions(){
    let response = ''
    elementContent.classList.add('display-none')
    elementContentFinish.classList.remove('display-none')
    if(quizValid){
        response = quizCurrent.response[0].valid[0]
    }else{
        response = quizCurrent.response[0].invalid[0]
    }
    elementContentFinishAside.innerHTML = `
            <figure>
                <img src="${response.icon}" title="${response.message}" alt="${response.message}" />
            </figure>
            <strong>
                ${response.message}
            </strong>
        `
}