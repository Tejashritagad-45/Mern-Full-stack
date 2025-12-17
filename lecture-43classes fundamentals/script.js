// const cars={
//     name:thar,
//     model:model,
// }



// function Car(name,model,speed){
//     this.name=name;
//     this.model=model;
//     this.speed=0;
    
// }

// Car.prototype.isRunning=function(){
//     this.speed>0 ? console.log("Running!"):console.log("not running!");
// };

// Car.prototype.changespeed=function(newSpeed){
//     this.speed=newSpeed;
// };
// const thar=new Car("thar","CR-234");
// thar.isRunning();
// thar.changespeed(30);
// thar.isRunning();
// Car.prototype.printDetails=function(){
//     console.log(this.name,this.model,this.speed);
// }


//classes are use to group all constructor or prototype
//classes is not a hoisted
//therefore we first write a class then call
//using a class 
class Car{
    constructor(name,model){
        this.name=name;
        this.model=model;
        this.speed=0;
    }
    changespeed(newSpeed){
        this.speed=newSpeed;
    }
    isRunning(){
        this.speed>0 ? console.log("running!"):console.log("Not Running!");
    }
}
const creta=new Car("creta","CR-1223");
creta.isRunning();
creta.changespeed(20);
creta.isRunning();
creta.isRunning();
console.log({creta})



//attendance calculateter




class Attendancelogger{
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
        this.present=0;
        this.totalDays=0;
    }
    markPresent(){
        this.present++;
        this.totalDays++;
    }
    markApsent(){
        this.totalDays++;
    }
    printAttendance(){
        const{name,present,totalDays}=this;
        console.log("Attendance percentage of"+name+"is"+((present/totalDays)*100).toFixed(2));

    }
}
const att=new Attendancelogger("Raju",20);
att.markApsent();
att.markPresent();
att.markApsent();
att.markPresent();
att.markPresent();
att.markPresent();
att.printAttendance();


//getters and setters in class

//getter is only read the vlaue not chnage or update the value
//getter is only read therefore getter is go infininate call itsself
//therfore we use a underscore to the property 
//setter is change or update the value set want a parameter to change
//set is not a return anything
class Student{
    constructor({id,name,dob,grade}){
        this.id=id;
        this.name=name;
        this._dob=dob;
        this.grade=grade;
        this.marks=0;
        //this are Accser property
    }
    get dob(){
        return this._dob;
    }
    set marks(newMarks){
        this._marks=newMarks;
    }
    get marks(){
        return this._marks;
    }
    //this are data property


}

const mukesh=new Student({
    id:"ST-1234",
    name:"Mukesh",
    dob:"24-12-2000",
    grade:10

});
console.log(mukesh.dob);
mukesh.marks=30;
console.log(mukesh.marks);


//static method
//static are not object base they are only for class
//static is call first 
class User{
    constructor(username,role){
        this.username=username;
        this.role=role;

    }
    static guest(){
        return new User("guest","guest");
    }
}
const guestuser=User.guest();


//private properties
// class Bnak{
//     constructor(firstpin){

//     }
//     deposit(money){
//         this.balance+=money;
//     }
//     withdraw(){
//         return userpin===this.#pin&&this.balance>=money
//         ?(this.balance-=money)
//         :null;
//     }
//     checkBalance(userPin){
//         return userPin===this.#pin ?this.balance:null;
//     }
// }

// const sbi=new Bnak(4321);
// sbi.deposit(150);
// console.log(sbi.checkBalance(4321));
// sbi.withdraw(431,10);
// console.log(sbi["#pin"]);
// console.log(sbi.pin);
// console.log(sbi.checkBalance(4321));

//methods can also be private

