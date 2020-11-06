
    const restartBtn=document.getElementById('restart');
    const prevBtn=document.getElementById('prev');
    const nextBtn=document.getElementById('next');
    const trueBtn=document.getElementById('True');
    const falseBtn=document.getElementById('False');
    const underScore=document.getElementById('under-score');
    const questionText=document.getElementById('question-text');


    let currentQuestion=0;
    var score=0;
    let questions=[
        {
            question:"Is coding ninza is a good platform?",
            answers:[
                {option:"for sure!", answer:true},
                {option:"no, not at all",answer:false}
                
            ]
        },

        {
            question:"What is better for success?",
            answers:[
                {option:"hard work", answer:true},
                {option:"smart work",answer:false}
            ]
        },

       {
           question:"complete the phrase: time and _______wait for none?",
           answer:[
               {option:"Batman" ,answer:false},
               {option:"Tide", answer:true}
           ]
       }

    ]

    restartBtn.addEventListener('click',restart);
    prevBtn.addEventListener('click',prev);
    nextBtn.addEventListener('click',next);
    submitBtn.addEventListener('click',submit);


    function beginQuiz()
    {
        currentQuestion=0;
        questionText.innerHTML=questions[currentQuestion].question;
        trueBtn.innerHTML=questions[currentQuestion].answer[0].option;
        trueBtn.onclick=()=>{
            let ano=0;
            if(questions[currentQuestion].answers[ano].answer){
                if(score<3){
                    score++;
                }
            }
            underScore.innerHTML=score;
            if(currentQuestion<2){
                next();
            }
            
        }
        falseBtn.innerHTML=questions[currentQuestion].answers[1].option;
        falseBtn.onclick=()=>{
            let ano=1;
            if(questions[currentQuestion].answers[ano].answer){
                if(score<3){
                    score++;
                }
        }
        underScore.innerHTML=score;
        if(currentQuestion<2){
            next();
        }
    }
    prevBtn.classList.add('hide');

    }
    beginQuiz();


function restart(){
    currentQuestion=0;
    prevBtn.classList.remove('hide');
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score=0;
    underScore.innerHTML=score;
    beginQuiz();

}



function next()
{
    currentQuestion++;
    if(currentQuestion>=2){
        nextBtn.classList.add('hide');
        prevBtn.classList.remove('hide');

    }
    questionText.innerHTML=questions[currentQuestion].question;
    trueBtn.innerHTML=questions[currentQuestion].question;
    trueBtn.innerHTML=questions[currentQuestion].answers[0].option;
    trueBtn.onclick=()=>{
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;

            }
        }
        userScore.innerHTML=score;
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML=questions[currentQuestion].answers[1].option;
   falseBtn.onclick=()=>{
       let ano=1;
       if(questions[currentQuestion].answers[ano].answer){
           if(score<3){
               score++;
           }
       }
       userScore.innerHTML=score;
       if(currentQuestion<2){
           next();
       }
   } 
prevBtn.classList.remove('hide');

}

function prev()
{
    currentQuestion--;
    if(currentQuestion<=0){
        prevBtn.classList.add('hide');
        nextBtn.classList.remove('hide');

    }
    questionText.innerHTML=questions[currentQuestion].question;

    trueBtn.innerHTML=questions[currentQuestion].answers[0].option;
    trueBtn.onclick=()=>{
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;

            }
        }
        userScore.innerHTML=score;
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML=questions[currentQuestion].answers[1].option;
   falseBtn.onclick=()=>{
       let ano=1;
       if(questions[currentQuestion].answers[ano].answer){
           if(score<3){
               score++;
           }
       }
       userScore.innerHTML=score;
       if(currentQuestion<2){
           next();
       }
   } 
nextBtn.classList.remove('hide');

}


function submit(){
    prevBtn.classList.add('hide');
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    trueBtn.classList.add('hide');
    falseBtn.classList.add('hide');    
    questionText.innerHTML="Congratulations on submitting the quiz!";
}


