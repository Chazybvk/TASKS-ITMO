const playGround = document.querySelector('div[name="field"]')
let start = document.querySelector('.start')
let button1 = document.querySelector('button[name="go"]')
let button2 = document.querySelector('button[name="go-next"]')
let button3 = document.querySelector('button[name="go-next2"]')
let buttonCheck = document.querySelector('button[name="check"]')
let search = document.querySelector('.search-for-letter')
let quest = document.querySelector('.quest')
let counterErrors = document.querySelector('.counter-errors-main')
let blockForWin = document.querySelector('.block-for-win')
let blockForLoose = document.querySelector('.block-for-loose')

const WORDS = [
 {word: "Жупа",descr: "Как у западных и южных славян назывались селение, деревня, курень?"}
,{word: "Правда",descr: "Польский ученый-математик Гуго Дионисий Штейнгауз, прославившийся также своими афоризмами, говорил: «Комплимент женщине должен быть правдивее, чем...»"}
,{word: "Канализация",descr: "Первый подобный музей появился в Париже до 1975 года. Экскурсии по нему проводились на лодке. Сейчас туристы осматривают его экспонаты со специальных решеток и пандусов. О каком музее идет речь?"}
,{word: "Уверенность",descr: "Английский писатель Киплинг говорил: «Женская интуиция намного точнее, чем мужская...»"}
,{word: "Чемодан",descr: "Соседи по улице знали Дмитрия Ивановича Менделеева как замечательного мастера по изготовлению чего?"}
,{word: "Сарафан",descr: "В XIV–XVI веках его носили мужчины. С XVII века его стали носить женщины. Названий было много: шторник, пестряк, клинник, наколоточник и др. До нас дошло лишь одно название. Какое?"}
,{word: "Энциклопедия",descr: "Однажды в знаменитую французскую тюрьму Бастилию заключили не человека, а некое издание. Какое?"}
,{word: "Тюрьма",descr: "В ЮАР есть одна редкая достопримечательность — бар внутри огромного баобаба, куда могут одновременно поместиться 15 человек. А в качестве чего использовали баобабы в XIX веке в Австралии?"}
,{word: "Мышеловка",descr: "В конце XIX века в Германии был изобретён угольный утюг с большим количеством функций. Им можно было не только гладить бельё, но и колоть орехи или давить чеснок. А в качестве чего его ещё использовали?"}
,{word: "Плевальщик",descr: "У репы очень мелкие семена. В килограмме их больше миллиона, поэтому сажать это растение вручную проблематично. В старину существовали специальные сеятели репы, которые пользовались большим уважением. Как называлась их профессия?"}
,{word: "Вышивание",descr: "Цветок дельфиниума синий. В Средние века бытовало мнение, будто этот цвет благотворно влияет на уставшие глаза человека. Поэтому цветки дельфиниума развешивали в помещениях, где обычно занимались… Чем?"}
,{word: "Циферблат",descr: "Шведский учёный Карл Линней однажды заметил интересное свойство цветов. Благодаря этой их особенности в 1720 году в городе Уппсала он создал первый в мире цветочный… Что?"}
,{word: "Лубок",descr: "На Руси цензура распространялась не только на книги, но и на изобразительное искусство. Так, московский патриарх Иоаким запретил распространять гравированные на досках из липы рисунки с религиозными сюжетами. О каком виде искусства идёт речь?"}
,{word: "Брови",descr: "Древние египтяне считали кошку священным животным. Когда питомец умирал, для людей это было большим горем. В знак траура они избавлялись от… Чего? Ответ дайте во множественном числе"}
]

let num
let errorCount = 0
let succsesCount=[]

function checkHowManyLetters(){
succsessCount = document.querySelectorAll('.for-counting')
console.log(succsessCount)
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function createField(index){
    let field = document.createElement('div')
    field.setAttribute('data-id', index)
    field.classList.add('field')
    playGround.appendChild(field)
}

function checkLetter(letter){
let mIndex=[]
let massLetters = WORDS[num].word.split("") 
massLetters.forEach((element,index)=>{
    if(letter == element.toUpperCase()){
        mIndex.push(index)
    }
})
    if (mIndex.length !=0){
        mIndex.forEach((index)=> {
            let node = document.querySelector('div[data-id="'+index+'"]')
            node.innerHTML = '<p class="for-counting">'+letter+'</p>'
            node.classList.add('successDisp')
            function removeGreen() {
                node.classList.remove('successDisp')
              }
              setTimeout(removeGreen, 1000);
              checkHowManyLetters()
              if(succsessCount.length==WORDS[num].word.length){
                  setTimeout(endGameWithWin, 1000);
              }
        })
        console.log(WORDS[num].word.length)
    }
    else{
        errorCount+=1
        endGameWithLoose()
    }
}

function newGame(){
    num = getRandom(0,WORDS.length-1)
    let elem = WORDS[num]
    let question = document.createElement('p')
    question.innerHTML = WORDS[num].descr
    quest.appendChild(question)
    massLetters=elem.word.split("")
    massLetters.forEach((element, index) => {
        createField(index)
    });
    displayingNewGame()
    errors()
}

function displayingNewGame(){
    start.classList.add('not-active')
    button1.classList.add('not-active')
    search.classList.remove('not-active')
    counterErrors.classList.remove('not-active')
}

function errors(){
    let numberOfErrors = document.createElement('p')
    numberOfErrors.classList.add('err')
    numberOfErrors.innerHTML = (errorCount+' из 5')
    counterErrors.appendChild(numberOfErrors)
}

function endGameWithLoose(){
    let numberOfErrors = document.querySelector('.err')
    numberOfErrors.innerHTML = (errorCount+' из 5')
    numberOfErrors.classList.add('errorDisp')
    function removeRed() {
        numberOfErrors.classList.remove('errorDisp')
      }
      setTimeout(removeRed, 1000);
      if(errorCount==5){
      blockForLoose.classList.remove('not-active')
      start.classList.add('not-active')
      button1.classList.add('not-active')
      buttonCheck.classList.add('not-active')
      search.classList.add('not-active')
      quest.classList.add('not-active')
      counterErrors.classList.add('not-active')
      playGround.classList.add('not-active')
      }
}
function endGameWithWin() {
    blockForWin.classList.remove('not-active')
    start.classList.add('not-active')
    button1.classList.add('not-active')
    buttonCheck.classList.add('not-active')
    search.classList.add('not-active')
    quest.classList.add('not-active')
    counterErrors.classList.add('not-active')
    playGround.classList.add('not-active')
  }

buttonCheck.addEventListener("click", (event)=>{
    let sibling = event.target.previousElementSibling
    if(sibling.value.replace(/\s+/g, '').toUpperCase()==WORDS[num].word.toUpperCase()){
        endGameWithWin()
    }
    checkLetter(sibling.value.replace(/\s+/g, '').toUpperCase())
    sibling.value=""
})

button1.addEventListener("click", (event)=>{
    newGame()
})

button2.addEventListener("click", (event)=>{
    location.reload()
})
button3.addEventListener("click", (event)=>{
    location.reload()
})
