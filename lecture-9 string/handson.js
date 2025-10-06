console.log("hello world");

const  obj ={
    property1:"property one ",
    property2:"property2 two",
    1:"one",
}
 console.log(obj.property3);
 //undefined
 console.log(obj["property3"])
//undefined
console.log(obj.property1);


//*String//*

// what is a string
//a string is a sequence of one or more character, number, letters ,or symbol; 
console.log("=====string of string======");
let str="v"
console.log(typeof str);

let str1="abc"
console.log(typeof str1);

let str2="12"
console.log(typeof str2);

let str3="[3434]";
console.log(typeof str3);

let str4=[12354546];
console.log(typeof str4);

console.log("=====symbol==========")
let str5="@ $ ^ *";
console.log(typeof str5);

let str6=['a','b','c','d'];
console.log(typeof str6);
console.log(typeof str6[0]);

console.log(typeof str6[4]);


//string using a backticks
console.log("*using a backticks*");
str=`ABC`,
console.log(typeof str);

str= `hi you must do a "java" classes`
console.log(str);

str=`my name is a teju and I am CEO of TATA company`;
console.log(str);

console.log(`hi teju`);

//case when we must using a single a code
str="my name is ... and I am a ....";
console.log(str);

//case when we must using a double codes

str="Hi I am a vaibhav"
console.log(str);

//some more function in backticks 
let personName="pratik";
str=`hi name is a ${personName} I am a coder`;
console.log(str);
// personName="vaibhav";
// console.log(str);



//some methods in string
console.log("=================using string method===============")
str = "  I am a Aliya and and my feild is Acting we  "
//using a include
//string madhye ahe ka nahi check karata hai or return boolean value karta hai
//pura world bhi deta hai;
console.log(str.includes("a"));
console.log(str.includes("E"));
console.log(str.includes("h"))
console.log(str.includes("Aliya"))

console.log("example");
str1="1,3,2,5,6,2,8";
console.log(str1.includes(3))
console.log(str1.includes(0))

//replace function
//chnage a first occurance only
//je first alay te change hot 
console.log(str.replace("my","our"));
//console.log(str.replace("am",))
console.log(str.replace("I","we"));
//replace is not change a original string;

//*replace all*
console.log(str.replaceAll("we","I"));
console.log(str1.replaceAll("2","9"));
console.log("originsl string is:",str1);

//using a trim();
console.log("=============using a trim==========")
console.log(str);
console.log(str.trim());
console.log(str);

//using a substring  //dont change the original string.
console.log(str.substring(3,9)); //give a string start from the index=3 and end from the till index=8. 9-1
//include with a space. 3 pasun pudache yetat.
console.log(str.substring(3));//give a string start from index=3 and end till end.
console.log(str.substring(8,14));
console.log(str.substring("3"));
console.log(str.substring(-3,-5));//-3 number is always give a 0.
console.log(str.substring(-3,10000));
console.log(str.substring("-3"));


//using slice
str2="hello Rutu how are you";
console.log("using a slice");
console.log(str2.slice(3)); //same as substring only changs in (-)numbers 
console.log(str2.slice(-3));//give a last 3 digit
console.log(str2.slice("-3"));//no change using a string
console.log(str2.slice());//print all astring
console.log(str2.slice(-100)); //gives all elements in case of number is greater than length of  the string
console.log(str2.slice(-9,-3));//start at end of -9and end at -3;
console.log(str2.slice(-3,0));//gives a empty string
console.log(str2.slice(2,5));//gives start from 2 and end from 5
console.log(str2.slice(0,-5));//last  ke -5 element chod ke agge ke print kar deta hai
console.log(str2.slice(-4,-4));//give a empty string
console.log(str2.slice(3,7));

//split
//split
console.log("using a split")
console.log(str2.split(" "))
console.log(str2.split(" , "));
console.log(str2.split("-"));
console.log(str2.split("hello"));
console.log(str2.split(","));

//to uppercase
console.log("to uppercase")
console.log("hello".toUpperCase());
console.log("how".toUpperCase());
console.log("are".toUpperCase());
console.log("RUTU".toLowerCase());

//Wrapper object
const string="vaibhav";
const InT=123;
const boolean= true;
const object={
    Name:"vaibhav"
};
console.log(string.__proto__);
console.log(Number.__proto__);
console.log(boolean.__proto__);
console.log(object.__proto__)

console.log(Number("123"));


//spread and rest operator
function addStudent (student ,studentName){
    student.push(studentName)
    console.log({student});
}
const student =["teju","rutu","siya",]
console.log(student);
addStudent(student,"riya");
addStudent(student,"piya");

//this we print a normal
//but using a rest operator
//rest operator is combine all the argument  and transform into a Arrays
function addStudent (Students,...studentName){
    console.log(studentName);
    for(let students of studentName)
        Students.push(studentName);
       console.log({Students}); 
    
}
const  student1=["Waman","Mahajan","shekde",];
addStudent(student1,"Garje","Dighe","javane");


const [hii,...bye] =["hii","hiii","byyy","byyyyy"]
console.log({hii,bye});


const [girls,...boys] =["Tejashri","Rutuja","waman","Mahajan"];
console.log({girls,boys});

//spread 
console.log("using a spread ");
const arr1=[3,2,4,43,43,];
console.log(34,...arr1,94,34,65,);
//spread kar deta hai element start or end dono side mai add karata hai

const flowers =["rose,","mogara,","merigold,"];
console.log(...flowers,"jai,","jui,");

console.log("substring");
let str0=" hi am hello";
console.log(str0.substring(3,9));
console.log(str0.substring( 6));
console.log(str0.substring(-3));
//xubstring is also count a space
console.log(str0.trim());//remove only a star and end space
console.log({str0});

console.log(str0.slice(-3));
console.log(str0.slice(3));
console.log(str0.slice(-3,-3));//give a empty string
console.log(str0.slice(-100));
console.log(str0.slice(-3,0));
console.log(str0.split(" "));
console.log(str0.split("-"))
console.log(str0.split(","))
console.log(str0.toUpperCase());
console.log(str0);

//......Contest Question.......
 let str00 ="abcdefg";
 for(let i=0;i<str00.length;i++){
     str00[i]=str00[i].toUpperCase();
 }
 console.log(str00);

 let str000="abdfjffjv";
   result="";
 for(let i=0;i<str000.length;i++){
   result+=str000[i].toUpperCase();
 }
 console.log(result);



console.log(str000.toUpperCase());

//rest operator 
function addstudent1(students0,studentName){
    students0.push(studentName);
      console.log(students0);
}
const students0=["rutu","teju"];
addstudent1(students0,"riya");
addstudent1(students0,"piya");
addstudent1(students0,"siya");
console.log(students0);


//using a rest operator 
function addsweeets(sweets,...sweetsName){
   console.log(sweetsName);
   for(let sweet of sweetsName)
    sweets.push(sweet)

}
const sweets =["jalebi","gulabjamun","pedha"];
addsweeets(sweets,"kajukatli","barfi");
//console.log(sweets);
console.log({sweets});


function addflower(flower,...flowerName){
    console.log(flowerName);
    for(let i of flowerName)
    flower.push(i);
    console.log(flower);  

}
const flower =["jai","jui","rose",];
addflower(flower,"rose","mogra");

//destructuring
const [hi,...byee]=["hii","bye","bye","byyy" ];
console.log({hii,byee})

//spread operator
const arr8=[1,2,3,4]
console.log(8,...arr8,9,4,6,7)


let str0000= 'hi i am a ';
console.log(str0000.split());