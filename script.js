
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

let quizQuestions = [
    {
        question: "Why are do noses wet?",
        answers: {
            a: 'To be cute',
            b: 'to help absorb scent chemicals',
            c: 'to moisten their kin'
        },
        correctAnswer: 'b'
    },
    {
        question: "Which dogs are the best lifeguards?",
        answers: {
            a: 'Cockerspaniels',
            b: 'Golden Retrievers',
            c: 'Newfoundlands'
        },
        correctAnswer: 'c'
    }, {
        question: "Why are do noses wet?",
        answers: {
            a: 'To be cute',
            b: 'to help absorb scent chemicals',
            c: 'to moisten their kin'
        },
        correctAnswer: 'b'
    }
]

function createQuiz(){
let output = [] 
quizQuestions.map(function (item, i) {
    // we're going into array of objects
    // i - index of each object
    // item - each object
    // console.log("i", i)
    // console.log("obj",item)
    let arr = [];
    // we loop the answers object
    for(let key in item.answers){
        let label = document.createElement('label')
        quizContainer.appendChild(label);
        console.log(label)
        let input = document.createElement('input')
        label.appendChild(input);
        input.setAttribute("type","radio")
        input.setAttribute("value", `${key}`);
        input.setAttribute("name",`question${i}`)
        console.log(input)
        arr.push(label.innerHTML, input.innerHTML = ` ${key}:
        ${item.answers[key]}`)
    }
output.push(
   `<div>
        <div class="question">${quizQuestions[i].question}</div>
        <div class="answers">${arr.join(' ')}</div>
     </div>`
)
})
quizContainer.innerHTML = output.join(' ')
}
createQuiz()

submitButton.addEventListener('click', checkResults);

function checkResults(){
    const answers = quizContainer.querySelectorAll('.answers');
    let num= 0;
    quizQuestions.map( function(obj, i){
        console.log("obj" , obj)

      const answerContainer = answers[i];
      const userAnswer = (answerContainer.querySelector(`input[name=question${i}]:checked`) || {}).value;
// check the correct answer
      if(userAnswer === obj.correctAnswer){
        num++;
        answers[i].style.color = 'green';
      }
      else{
        answers[i].style.color = 'red';
      }
    });

let messages = ["Great job!", "That's just okay", "Try again..."];
let pictures = ["https://media0.giphy.com/media/kigLtfDrV3K9N0wYCO/source.gif",
"https://i.pinimg.com/originals/15/fc/b6/15fcb6bafc9dd871b011e88dc32b07ea.gif",
"https://media0.giphy.com/media/W1f2ZkNPv3m8P60xvd/source.gif"]

let score;
if(num < 1){
    score =2;
}
if(num >= 1 && num< quizQuestions.length){
    score =1;
}
if(num > 2){
    score = 0;
}

document.getElementById("message").innerHTML = messages[score];
resultsContainer.innerHTML = `You got ${num} correct`
let picture = document.getElementById("picture");
picture.setAttribute("src", pictures[score])
picture.setAttribute("style", "width:300px; height:300px")
    
}

   

