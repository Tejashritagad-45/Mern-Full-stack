const human={
   name:"teju",
   age: 21,
   Hight:5.1,
   wight:52,


   Walking (){
    console.log("I am walking");
   },
   Running (){
    console.log("i am running")
   }

}
let obj=  human ;
console.log(obj.name)
obj.Walking();
obj.Running();

//=========when we create a object using a class============= 
class human1 {
   name="teja"
   #age= 21//this # means this age is now a private property 
   //it can not be acess the outside of the object block.
   Hight=5.1
   wight=52


   Walking (){
    console.log("I am walking",this.#age);
   }
   Running (){
    console.log("i am running");
   }

}
let obj1 = new human1 ();
console.log(obj1.name)
//console.log(obj1.#age)//give a error of private field
obj1.Walking();
obj1.Running();


//this.===
//this.  is a keyword to use to acces the property of object 
const person ={
   name:"Rutu",
   greet (){
    console.log(this.name);
   }
}
person.greet();


//default parameter
function sayHi (myname){//myname is a parameter
    console.log("hi",myname)
}
sayHi("rutuja");//rutuja is Argument



