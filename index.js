const questions = [
    {
        'que': "What are the different data types present in javascript?",
        'a': "Primitive types",
        'b': "Non-primitive types",
        'c': "Hoisting",
        'd': "Both Options a & b",
        'correct': 'd',
    },
    {
        'que':"What is NaN property in JavaScript?",
        'a': "Not-a-Number",
        'b': "Not-a-Not",
        'c': "Number-Not",
        'd': "Not-Number",
        'correct': "a",
    },
    {
        'que': "What are the different types of scopes?",
        'a': "Global Scope Local",
        'b': "Function Scope",
        'c': "Block Scope",
        'd': "All the above",
        'correct': "d",
    },
    {
        'que': "which technology is best in the current market?",
        'a': "MERN Fullstack",
        'b': "Java Fullstack",
        'c': "Python Fullstack",
        'd': "MEAN Fullstack",
        'correct': "a",
    }
];

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
    if(index === total){
       return endQuiz();
    }

    reset();
    const data = questions[index];
    console.log(data);
    queBox.innerText = `${index+1}. ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz= () =>{
    const data = questions[index];
    const ans = getAnswer();
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = ()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML = `
    <div style = "text-align: center">
    <h3>Your response has Submitted</h3>
    <h2>Result: ${right}/${total} are correct</h2>
    </div>
    `
}

loadQuestion();