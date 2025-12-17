const questions=[

{
title:
" 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut unde reiciendis culpa? Ex nulla",
 Options:[
    " Lorem ipsum dolor sit amet.",
    " Lorem ipsum dolor sit amet.",
    " Lorem ipsum dolor sit amet.",
    " Lorem ipsum dolor sit amet.",
     

 ],
 correctOption:2,
},
{
title:
" 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut unde reiciendis culpa? Ex nulla",
 Options:[
    " Lorem ipsum dolor sit amet.",
    " Lorem ipsum dolor sit amet.",
    " Lorem ipsum dolor sit amet.",
    " Lorem ipsum dolor sit amet.",
     

 ],
 correctOption:2,
},
{
title:
" 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut unde reiciendis culpa? Ex nulla",
 Options:[
    " Lorem ipsum dolor sit amet.",
    " Lorem ipsum dolor sit amet.",
    " Lorem ipsum dolor sit amet.",
    " Lorem ipsum dolor sit amet.",
     

 ],
 correctOption:2,
},

{
title:
" 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut unde reiciendis culpa? Ex nulla",
 Options:[
    " Lorem ipsum dolor sit amet.",
    " Lorem ipsum dolor sit amet.",
    " Lorem ipsum dolor sit amet.",
    " Lorem ipsum dolor sit amet.",
     

 ],
 correctOption:2,
},

{
title:
" 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut unde reiciendis culpa? Ex nulla",
 Options:[
    " Lorem ipsum dolor sit amet.",
    " Lorem ipsum dolor sit amet.",
    " Lorem ipsum dolor sit amet.",
    " Lorem ipsum dolor sit amet.",
     

 ],
 correctOption:2,
},
];


let currQuesIdx=0;
let score=0;
const correctAnswerScore=4;
const wrongAnswerScore=-1;
const questionSecction=document.querySelector(".questions");

const questionTitle=document.querySelector(".question-title");
const option1=document.querySelector(".option-1");
const option2=document.querySelector(".option-2");
const option3=document.querySelector(".option-3");
const option4=document.querySelector(".option-4");

const nextBtn=document.querySelector(".next");
const scoreSection=document.querySelector(".score");

function changeScore(optionNumber){
   if(questions[currQuesIdx].correctOptin === optionNumber)
   score+=correctAnswerScore;
   else score+=wrongAnswerScore;

}
 function changeQuestion(){
   if(currQuesIdx===questions.length-1){
      questionSecction.Style.display="none";
      scoreSection.style.display="block";
      scoreSection.textContent = "Yourscore" + score;

   }

   currQuesIdx++;

   const questionobj=questions[currQuesIdx];

   questionTitle.textContent=questionobj.title;
   option1.textContent=questionobj.Options[0];
   option2.textContent=questionobj.Options[1];
   option3.textContent=questionobj.Options[2];
   option4.textContent=questionobj.Options[3];
 }
 
 nextBtn.addEventListener("click",changeQuestion);
 
 option1.addEventListener("click",()=>{
   changeScore(1);
   changeQuestion();

 });

 option2.addEventListener("click",()=>{
   changeScore(2);
   changeQuestion();

 });



 option3.addEventListener("click",()=>{
   changeScore(3);
   changeQuestion();

 });

 option4.addEventListener("click",()=>{
   changeScore(4);
   changeQuestion();

 });
 