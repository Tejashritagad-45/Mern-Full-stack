function Car(name,model){
    this.name=name;
    this.model=model;
    this.speed=0;

}
Car.prototype.isRunning=function(){
   if( this.speed>0) {
    console.log("running");
   }else{
    console.log("not running")
   };
   //this.speed>0?console.log("running!"):console.log("not running!")
   //ternary operator
    
}
Car.prototype.Changespeed=function(newspeed){
    this.speed=newspeed;

}
const car=new Car("Thar","MH-14");
car.isRunning();
car.Changespeed(30);
car.isRunning();
car.isRunning();



//
//class is a blueprint used to create  a object
//we use function as method in a class
//class are a hoisted we can not declare object  starting of class.
class Cars{
    constructor(model,name){
        this.name=name
        this.model=model;
        
    }
    Changespeed(newspeed){
        this.speed=newspeed
    }
    isRunning(){
        this.speed>0?console.log("running!"):console.log("not running!");

    }
}
const creta =new Cars("creta","mh-123");
creta.isRunning();
creta.Changespeed(12);
creta.isRunning();



//getter setter

/*-getter is a read only he not change or updatethe value
-getter is return the value of property
-get set dont have a parenthesis
get use for encapsulation or potect data
get call recusively itself for we use a _underscore
*/

/*
setter
*setter want a parameter only one
*setter is method that sets or updtae property value
*set cannot return anything
*/

class Student{
    constructor({id,name,dob,grade}){
        this.id=id;
        this.name=name;
        this._dob=dob;
        this.grade=grade;
    }
    get dob (){
        return this._dob;
        //we call a dob the vo kudko call karta hai or recursion or infinity mai chala jata therforewe use there _ underscore taki vo kudko call na kre
    }
    set;

}
const mukesh=new Student({
    id:"ST-1234",
    name:"MUkesh",
    dob:"24-12-2000",
    grade:10,
});
 console.log(mukesh.dob);


 //static method
/*static are not object base they are only for class
we acces static method using class
static method is use for when the method does not need object data 
*/

//private property
/*private is a variable that acces inside a class cannot acess otside of class
we define private property using "#"
we use private property for 
*protect data
*to stop user changing values
*/
class User {
  #password;   

  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }

  showPassword() {
    return this.#password;
  }
}

const u = new User("Teju", "12345");
console.log(u.name);        
console.log(u.showPassword);   

//A public method is a function inside a class that can be accessed from anywhere:




