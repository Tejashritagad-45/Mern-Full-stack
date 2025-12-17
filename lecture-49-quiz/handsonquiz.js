class Question{
  constructor({id,text,options,correctOption,type}){
    this.id=id;
    this.text=text;
    this.options=options;
    this.correctOption=correctOption;
    this.type=type;
  }
}

const questions = [
  new Question({
    id: 1,
    text: "Which HTML tag is used to create a hyperlink?",
    options: ["djhfdjf", "ewewe", "ewewewew", "fjvbjdnvueu"],
    correctOption: 0,
    type: "single",
  }),
  new Question({
    id: 2,
    text: "Which CSS property is used to change the text color?",
    options: ["font-style", "color", "text-color", "font-color"],
    correctOption: 0,
    type: "single",
  }),
  new Question({
    id: 3,
    text: "Select all JavaScript primitive types",
    options: ["String", "Boolean", "Float", "Undefined", "Object"],
    correctOption: 0,
    type: "multiple",
  }),
  new Question({
    id: 4,
    text: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Oriented Model",
      "Discrete Object Model",
    ],
    correctOption: 0,
    type: "single",
  }),
  new Question({
    id: 5,
    text: "Is JavaScript the same as Java?",
    options: ["True", "False"],
    correctOption: 0,
    type: "true-false",
  }),
  new Question({
    id: 6,
    text: "Which array method adds one or more elements to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctOption: 0,
    type: "single",
  }),
]

class Quiz{
  constructor({questions,duration}){
     this.questions=questions;
     this.duration=duration;
     this.userResponse={};
     this.score=0;
     this.currentQuesIndex=0
  }
    
    start(){
      this.startTimer();
      this.currentQuestion();
    }
    displayOption(qIdx){
      const optionUl=document.querySelector("ul");
      const options=this.questions[qIdx].options;
      optionUl.innerHTML=options.map((Option,Index)=>{
        return `<li data-option-idx="${Index}">${Option}</li>`
      }).join("");

     }

    currentQuestion(){
      const idx=this.currentQuesIndex;
      const questionEle=document.querySelector("p");
      questionEle.textContent=this.questions[idx].text
      this.displayOption(idx);
    }
    prevQuestion(){
      
      if(this.currentQuesIndex==0){
        return;
      }

       if(this.currentQuesIndex==this.questions.length-1){
        const nextbutton=document.querySelector(".buttons").lastElementChild;
        nextbutton.textContent="next"
      }
      this.currentQuesIndex--;
      this.currentQuestion();
   
    }
    nextQuestion(){
      if(this.currentQuesIndex==this.questions.length-1){
        this.submit();
        return;
      }
 
       if(this.currentQuesIndex==this.questions.length-2){
          const nextbutton=document.querySelector(".buttons").lastElementChild;
             nextbutton.textContent="submit";
      }
      this.currentQuesIndex++;
      this.currentQuestion();
      
    }
    calculateScore(){
       this.score = 0;
      // const qIdx=this.currentQuesIndex;
      for(let questionIdx in this.userResponse){
        
      const optionIdx=this.userResponse[questionIdx];//option selected by user
      const correctOption=this.questions[questionIdx].correctOption;
      if(correctOption===optionIdx)
        this.score++;
      }

    }
     captureUserResponse(userSelectedOption){
      const qIdx=this.currentQuesIndex;
      this.userResponse[qIdx]=userSelectedOption
      
    }
    startTimer(){
      const timerEle=document.querySelector(".timer");
      let remainingTime=this.duration*60;

      this.timer=setInterval(()=>{
        remainingTime--;
        const hr=String(Math.floor(remainingTime/3600)).padStart(2,"0");
        const min=String(Math.floor((remainingTime/60)%60)).padStart(2,"0");
        const sec=String(Math.floor(remainingTime%60)).padStart(2,"0");
        timerEle.textContent=`${hr}:${min}:${sec}`;
        if(remainingTime<=0){
           clearInterval(this.timer);
           this.submit();
          alert("Quiz submitted")
        }
      },1000)
    
  }

    submit(){
      this.calculateScore();
      console.log("score" , this.score);
      
    }

}

const quiz=new Quiz({questions,duration:1});
quiz.start();

const options=document.querySelector(".options");
const prevbtn=document.querySelector(".buttons").children[0];
const nextbtn=document.querySelector(".buttons").children[1];

options.addEventListener("click",(e)=>{
  if(e.target.matches("li")){
    const optionLi=document.querySelectorAll(".options li")
    optionLi.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
   
   const optionIdx=Number(e.target.dataset.optionIdx);
    // console.log(optionIdx);
    quiz.captureUserResponse(optionIdx);

  }

});

prevbtn.addEventListener("click",(e)=>{
  quiz.prevQuestion();
 

});

nextbtn.addEventListener("click",(e)=>{
  quiz.nextQuestion();

});

