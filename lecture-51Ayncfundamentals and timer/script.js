class Question{
    constructor() {
        this.operators = ["+", "-", "*", "%", "^", "/"]
        this.operand1 = this.random(100);
        this.operand2 = this.random(100);
        this.operator = this.operators[this.random(6) - 1];
        this.score = this.random(50);
        this.correctAnswer = this.calculateCorrectScore();
    }
    random(high) {
        return 1 + Math.floor(Math.random() * high);
    }
    calculateCorrectScore() {
        switch (this.operator) {
            case "+":
                return this.operand1 + this.operand2

            case "-":
                return this.operand1 - this.operand2

            case "/":
                return Math.floor(this.operand1 / this.operand2);

            case "*":
                return this.operand1 * this.operand2

            case "%":
                return this.operand1 % this.operand2

            case "^":
                return this.operand1 ** this.operand2
            default:
                alert("Invaid input" + this.operator);
        }
    }

    disply() {
        
       return `${this.operand1}${this.operator}${this.operand2}`;

    }

    validateAnswer(answer) {
        return this.correctAnswer == Number(answer) ? this.score : 0;
    }
}
const question=new Question;
console.log(question);


class Quiz {
    constructor() {
        this.timer = this.random(60)
        this.userResponce = {};
        this.question = new Question();
        this.questionCount = 1;
        this.score = 0;
    }
    random(high) {
        return 1 + Math.floor(Math.random() * high);
    }
    displyCurrentQuestion() {
        return this.question.disply();
    }
    nextQuestion(currectQuestionAnswer) {
        this.score += this.question.validateAnswer(currectQuestionAnswer);
        this.question = new Question();
        this.displyCurrentQuestion();
    }
    getScore() {
        return this.score;
    }
}
let quiz = new Quiz;

const questionEle = document.querySelector("#questionText");
const answerEle = document.querySelector("#answerInput");
const scoreEle = document.querySelector("#score");

questionEle.textContent = quiz.displyCurrentQuestion();

answerEle.addEventListener("keydown", (e) => {
    let answer = Number(answerEle.value);
    if (e.key == "Enter") {
        quiz.nextQuestion(answer);
        questionEle.textContent = quiz.displyCurrentQuestion();
        answerEle.value="";
        scoreEle.innerHTML= quiz.getScore();    
    }    
});



