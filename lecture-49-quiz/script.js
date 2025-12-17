// class Question{
//     constructor({text,options,id,correctOption,type}){
//         this.id=id,
//         this.text=text;
//         this.correctOption=correctOption,
//         this.type=type;
//         this.options=options;
//     }
// }

//  const questions = [
//   new Question({
//     id: 1,
//     text: "Which HTML tag is used to create a hyperlink?",
//     options: ["djhfdjf", "ewewe", "ewewewew", "fjvbjdnvueu"],
//     correctOption: 0,
//     type: "single",
//   }),
//   new Question({
//     id: 2,
//     text: "Which CSS property is used to change the text color?",
//     options: ["font-style", "color", "text-color", "font-color"],
//     correctOption: 0,
//     type: "single",
//   }),
//   new Question({
//     id: 3,
//     text: "Select all JavaScript primitive types",
//     options: ["String", "Boolean", "Float", "Undefined", "Object"],
//     correctOption: 0,
//     type: "multiple",
//   }),
//   new Question({
//     id: 4,
//     text: "What does DOM stand for?",
//     options: [
//       "Document Object Model",
//       "Data Object Model",
//       "Document Oriented Model",
//       "Discrete Object Model",
//     ],
//     correctOption: 0,
//     type: "single",
//   }),
//   new Question({
//     id: 5,
//     text: "Is JavaScript the same as Java?",
//     options: ["True", "False"],
//     correctOption: 0,
//     type: "true-false",
//   }),

//   new Question({
//     id: 6,
//     text: "Which array method adds one or more elements to the end of an array?",
//     options: ["push()", "pop()", "shift()", "unshift()"],
//     correctOption: 0,
//     type: "single",
//   }),
// ];

       


// class Quiz{
//     constructor({questions,duration}){
//         this.questions=questions;
//         this.duration=duration;//in minutes
//         this.userResponse={};
//         this.score=0;
//         this.currentQuesIndex=0;
//         this.timer=null;


//     }
//     start(){
//         this.startTimer();
//         this. currentQustion()
//     }
//     displayOptions(qIdx){
//         const optionsUl=document.querySelector("ul");
//         const options=this.questions[qIdx].options;
//         optionsUl.innerHTML=options
//         .map((option,index)=>{
//             return `<li data-option-idx=${index}>${option}</li>`
//         })
//         .join("");
//     }

//     currentQustion(){
//         const idx=this.currentQuesIndex;
//         const questionTextElement=document.querySelector("p");

//         questionTextElement.textContent=this.questions[idx].text;
//         this.displayOptions(idx);
//     }
//     prevQuestion(){
//         if(this.currentQuesIndex==0){
//             return;
//         }
//          if(this.currentQuesIndex==this.questions.length-1){
//             const nextbutton=document.querySelector(".buttons").lastElementChild;
//             nextbutton.textContent="Next";
//          }
//         this.currentQuesIndex--;
//         this.currentQustion();
//     }
//     nextQuetion(){
//          if(this.currentQuesIndex==this.questions.length-1){
//             this.submit();
//             return;
//         }

//         if(this.currentQuesIndex==this.questions.length-2){
//             const nextbutton=document.querySelector(".buttons").lastElementChild;
//              nextbutton.textContent="Submit"
//          }
//         this.currentQuesIndex++;
//         this.currentQustion();
//     }
//     calculateScore(){
//         const qIdx=this.currentQuesIndex;
//         for(let questionIdx in this.userResponse){
//             const optionIdx=this.userResponse[questionIdx];//option selsected
//             //by user
//             const correctOption=this.questions[qIdx].correctOption;
//             // correct option from question array
//             if (correctOption===optionIdx)this.score++
//         }
//      }

//     captureUserResponse(userSelectedOptionIdx){
       
//             const qIdx=this.currentQuesIndex;
//             this.userResponse[qIdx]=userSelectedOptionIdx;
         
//         }
    

//     startTimer(){
//         const timerEle=document.querySelector(".timer");
//         let remainingTime=this.duration*60;

//         this.timer=setInterval(()=>{
//             remainingTime--;
//             const hr=String(Math.floor(remainingTime/3600)).padStart(2,"0");
//             const min=String(Math.floor((remainingTime/60)%60)).padStart(2,"0");
//             const sec=String(Math.floor(remainingTime%60)).padStart(2,"0");

//             timerEle.textContent=`${hr}:${min}:${sec}`
//             if(remainingTime<=0){
//                 clearInterval(this.timer);
//                 alert("Quiz Submitted");
//             }
//         },1000)
//     }

//     submit(){
//         this.calculateScore();
//         alert(`Score: ${this.score} / ${this.questions.length}`);
        
//     }


// }

// const quiz=new Quiz({questions,duration:1});
// quiz.start();

// const option=document.querySelector(".options");
// const prevbtn=document.querySelector(".buttons").children[0];
// const nextbtn=document.querySelector(".buttons").children[1];

// option.addEventListener("click",(e)=>{
//     if(e.target.matches("li")){
//       const optionIdx=Number(e.target.dataset.optionIdx);
//       quiz. captureUserResponse(optionIdx);

//     }
    

// });
// prevbtn.addEventListener("click",()=>{
//     quiz.prevQuestion();

// });

// nextbtn.addEventListener("click",()=>{
//    quiz.nextQuetion();

// });

