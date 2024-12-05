//question bank as array of object
const questionBank = [
    {
      question: "Who invented JavaScript?",
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "Charles",
      
        correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
        a: "Node.js",
        b: "TypeScript",
        c: "Json",
        d: "npm",
      
        correctAnswer: "d"
    },
    {
      question: "Which tool can you use to ensure code quality?",
        a: "Angular",
        b: "ESLint",
        c: "RequireJS",
        d: "jQuery",
     
        correctAnswer: "b"
    },
    {
      question: "Which year JavaScript introduced?",
        a: 1995,
        b: 1992,
        c: 1996,
        d: 1993,
     
        correctAnswer: "a"
    },
    {
      question: "What is CSS",
        a: "Cascading Super Sheet",
        b: "Cascading Style Sheet",
        c: "Cascading sheet",
        d: "Stylesheet",
     
        correctAnswer: "b"
    },
    {
      question: "What is a correct syntax to output \"Hello World\" in Java?",
        a: "System.out.println(\"Hello World\")",
        b: "print(\"Hello World\")",
        c: "Cout<< \"Hello World\">>",
        d: "printf(\"Hello World\")",
     
        correctAnswer: "a"
    }
  ];

  let question_count = 0;

  let question = document.getElementById("question_inside_stack");

  let answer_a = document.getElementById("a_answer");
  let answer_b = document.getElementById("b_answer");
  let answer_c = document.getElementById("c_answer");
  let answer_d = document.getElementById("d_answer");

  let btn = document.querySelector("button");

  let all_answers = document.querySelectorAll('input[name="answer"]');

  let score = 0;

  let quiz = document.getElementById("quiz_main");

  Load_Questions();

  function Load_Questions(){
    De_select();

    let question_bank_main = questionBank[question_count];

    question.innerHTML = question_bank_main.question;

    answer_a.innerHTML = question_bank_main.a;
    answer_b.innerHTML = question_bank_main.b;
    answer_c.innerHTML = question_bank_main.c;
    answer_d.innerHTML = question_bank_main.d;
  }


  //answers selected or not
  function Selected_or_Not(){
      let get_click_confirm = undefined;
      all_answers.forEach(element => {
          if(element.checked){
            get_click_confirm = element.id;
          }
      });
      return get_click_confirm;
  }

  //answers deselect
  function De_select(){
    all_answers.forEach(element => {
        element.checked = false;
    });
  }

  btn.addEventListener("click", () => {

    let vals = Selected_or_Not();
   
    if(vals){
        if(vals === questionBank[question_count].correctAnswer){
            score++;
        }
        question_count++;
        if(question_count < questionBank.length){
            Load_Questions();
         }
         else{
            BgColor();
            quiz.innerHTML = `<h2>quiz completed mate, Your score :
            ${score} / ${questionBank.length} </h2> <button type="button" class="submit_button" onclick=location.reload()>Retake</button></button>`;
         }
    }
  });

function BgColor(){
    if(score >=3){
        quiz.style.backgroundColor = "green";
    }
    else{
        quiz.style.backgroundColor = "red";
    }
}