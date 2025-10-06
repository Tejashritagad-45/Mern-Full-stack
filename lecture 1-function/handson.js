//function 
//reuse some line of code -for loop 
/*kuch vakue pass karke kuch operation kar sakte hai customise any function throw
if we want to use some code repeatadly -for loop 
whenever we need we can have a function of that call it 
block of code that performs specific task -true 
function is set of code that allows reusability to performs same task 



when we want use some specific lines of code (code snipper )
to be excuted and we dont when and where to use this code snippet


=follow DRY PRINCIPLE - Do Not Repeat Yourself 


//for loop */
function greetUser (){
    console.log("hello world again ");
    console.log("welcome to function lecture ")
}
greetUser();
console.log("Bye World")
greetUser();
greetUser();
greetUser();
console.log("Bye World")
greetUser();
greetUser();
greetUser();


function greetUser1 (){
console.log("Hello World")
console.log("Hello Teju")
}
greetUser1();
greetUser1();
greetUser1();
greetUser1();
console.log("Bye Teju");
greetUser1();
greetUser1();
greetUser1();
console.log("Bye Teju")

//function properties 
/*
-Naming rules are same as variable naming rules 
-calling /invokoin a function 
-function creation or dfination 
-parameter
*/
function greetUser(userName){
    console.log("Hello "+userName +" how are you")
}
greetUser("Vaibhav");
greetUser("Rani");


function greetUser1(firstName,LastName){
    console.log("Hiii.."+ firstName,LastName)

    }
    greetUser1("Teju","Tagad")
    greetUser1("Rani","Aaglave")

//Task 
//OUTPUT
//Hello Rahul ,welcome to our Website
function Profile(firstName1,ProfileName){
    console.log("Hello" + firstName1,ProfileName + " how you feel")
}
Profile(" Rahul","Welcome to our Website");
Profile(" Teju","Welcome to our App");
Profile(" Rutuja")//hello  rutuja is print but second give a undefined 
//because we not pass the function 

//sum 
function sum(a=0,b=0){
    console.log(a+b)
}
sum(3,4);
sum(9,6)

//nested function 
function personDetails(Name,birthYear){
    console.log("Name:"+ Name);
    console.log("Age:", calculateAge(birthYear));
}
function calculateAge(birthYear){
    return 2025-birthYear;
}
console.log(personDetails("Jayesh",2004));


function square(a){
    console.log(a*a);
}
square(3);
square(20);
square(21);
square(16);
square(26);


function squre1(num){
    return num*num;
}
console.log(squre1(27));
console.log(squre1(19));
console.log(squre1 (18));


console.log("Hello",2+2);//we will treat everything after coma as a single argument
console.log("Hello"+2+2);//we will treat all as argument

//==============Array===============

const  student=["Anjali","khushi","Aditi","Nayara"]
//print all student name 
for(let i=0;i<4;i++){
    console.log(student[i])
}


//for in loop
for(let i in student){
    console.log(Number(i)+1 ,student[i])
}

//print all even number
for(let i in student){
   if(i%2==0){
    console.log(i);
   }
}