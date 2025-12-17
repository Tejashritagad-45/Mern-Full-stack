const user1={
    name:"tejashri",
    age:"23",
    city:"puna",
   printdetails: function(){
    console.log(`${this.name} his age is,${this.age} living in ${this.city}` );

  },


};

const user2={
    name:"tejashri",
    age:"23",
    city:"puna",
   printdetails: function(){
    console.log(`${this.name} his age is,${this.age} living in ${this.city}` );

  },


};

const user3={
    name:"tejashri",
    age:"23",
    city:"puna",
   printdetails: function(){
    console.log(`${this.name} his age is,${this.age} living in ${this.city}` );

  },


};


//constuctor
//we use a constuctor for not write a mich code 
//we use  like a blue print

//construcor is start wirh capital letter its just a industry standard

function User(name,age,city){
    this.name=name;
    this.age=age;
    this.city=city;
    this.printdetails=function(){
        console.log(`${this.name} is living in ${this.city}`);
    }
}

//we use a new keyword in conntructor
// when we use new it creates the new object

//*initially this points to window obj(global object) but when we use new then

//* this keyword get binds to the empty object that we created using new

//* i.e this->{}

//* and this.name="Devanshu" means addind name prop in object with value devanshu

//* same as object {name:Devanshu}



// this "new" keywords creates an empty object
//bind this 
//return



const user4=new User("neha",20,"Nashik");
const user5=new User("rani",22,"mumbai");



//convential tRADITONAL WAY OF using objects
console.log(user1.printdetails());
console.log(user1.name);

//using objects created from constructor -> it is same as user 1
console.log(user4.name);
console.log(user4.printdetails());


console.log(user1.name._proto_);
function normalFunction(){
    console.log(this);//by default functions has global object stored in `this`

}
console.log(normalFunction);



//creating an array of objects using constructor
const names=["Raj","Shivam","Pratik","Priya"];
const age=[12,34,23,17];
const city=["mumbai","Delhi","pune","Banglore"];

const objArray=[];

function newUsers(name,age,city){
    this.name=name;
    this.age=age;
    this.city=city;

}

for(let i=0;i<names.length;i++){
    objArray.push(newUsers(names[i], age[i], city[i]));

}
console.log(objArray);




function Product(name,price,qty){
    this.name=name;
    this.price=price;
    this.qty=qty;
}

const product1=new Product("watch",23,15);
const product2=new Product("bottle", 50,5);

console.log(product1,product2)


//prototype
 const Boolean=true;
 const string="true";
 const number=34454;
 const arr=[4,45,6464,42];
 console.log(Boolean._proto_);
 console.log(Boolean._proto_);
 console.log(number._proto_);
 console.log(arr._proto_);

 function Student(name,age,grade){
    this.name=name;
    this.age=age;
    this.grade=grade;
 }

 Student.prototype.greetMe=function (name){
    student1.greetMe(student1.name);
 }


 








