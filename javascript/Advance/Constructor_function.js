/* /* function normal(){
    console.log("tharun");
    
}
normal()

function Person(name,age){
    this.name = name
    this.age = age
    this.walk=function (){
        console.log("i can walk");
        
    }
}

let person1 = new Person("tharun",15)
console.log(person1.name);
person1.walk()

console.log(person1.__proto__); */

// prototype in heritance
// prototype is a mechanism by which objects can inherit propertires from other objects 
/*
let animal = {
    color : "black",
    legs : 4,
    name : "dog"
}
let human ={
    __proto__:animal,
    age :18
}
console.log(human.__proto__);
 */

/* let car ={
    brand : "toyoto",
    drive : function (){
        console.log('drive me');
        
    }
}
let suv = Object.create(car)
suv.type="suv"
console.log(suv.brand);
console.log(Object.getPrototypeOf(suv)===car);
console.log(suv.drive());
 */

/* function Person(name,age){
    this.name = name
    this.age = age
}

Person.prototype.greet = function (){
    console.log("good morning");
    console.log(this.name);   
}
let person1 = new Person("tharun",20)
person1.greet()

function Developer (name,age,language){
    Person.call(this,name,age)
    this.language = language
}

let dev1 = new Developer("tharun",19,"java")
console.log(dev1);

 */



