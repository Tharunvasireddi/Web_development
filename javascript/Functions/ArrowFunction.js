//let sqr=(num)=>num*num
//console.log(sqr(5))
/* function testscope(){
    console.log(a);
    let a=10
    {
        const a=20
        console.log(a);
        
    }
    console.log(a);  
}
testscope()
 */
/* const person={
    name:"tharun",
    greet:()=>{console.log(this.name) // this wont give the error instead of error it give undifined
    }
}
person.greet()
 */
/* // one liner using map
const nums=[1,2,3,4,5]
const sqrs=nums.map(num=>num*num)
console.log(sqrs);
// filter () method
const nums1=[3,6,8,2]
const filternums=nums1.filter(num=>num>5)
console.log(filternums);
 */

/* const sum = (...a)=>{
   let sum1=0
   for(i of a){
    sum1 += i
   }
    return sum1
}
console.log(sum(1,2,3,4,5));
 */
/* console.log("hello world");

const person=
    name:"Ananth",
    greet: function(){
        setTimeout(()=>{
            console.log(`hello ${this.name}`);
            
        },1000)
    }
}
person.greet()
console.log("hello ganesh");
 */

/* const sum=function (){
    console.log(arguments); // give the information about the arguments when the function is arrow function
    
}
sum(1,3,34) */

// Destructing is powerfull feature in javascript ,it allow you to unpack values from  array or properties from objects to disticn variables (variables must not to be eqaual)

/* const nums=[1,2,3,4,5]
const[a,b,c,d,e]=nums
console.log(a,b,c,d,e);

const person = { // in objects key and variables have to be same
    name : "siva",
    age : 20,
    village:"kothmallempeta"
}
const{age,village,name}=person
console.log(name,age,village)

let numbers=[10] // defualt destructuring
const[x,y=12]=numbers
console.log(x,y);
 */

 // String templates

/* let a ="tharun"
let b="vasireddi"
console.log(`fullname : ${a} ${b}`);

// multiline String template
console.log(`<span>tharun is good boy</span>`)
// tag templates
const name="tharun"
function Upercase(str,...values){
    return str.map((s,i)=>`${s}${values[i]?values[i].toUpperCase():""}`)
}
const str1=Upercase`hello,${name}`;
console.log(str1);
 */

// rest operator vs spread operator

 // spread operator --> it is used to expand an itewrarble like an array into indivdual elements if the iterable is object then properties 
  
/* const numbers = [1,2,3,4,5]
const moreNumbers=[5,6,78,0,...numbers] // [(out put)
  //  5, 6, 78, 0, 1,
 //   2, 3,  4, 5
 // ]
console.log(moreNumbers);

let person={
    name:"tharun",
    age:19,
    height:175
}
let contact={
    email:"tharunvasireddy@gmail.com",
    ...person
}
let  fullDetails={...person,...contact}
console.log(fullDetails);
console.log(contact);

// rest operator is used in function arguments destructring to gather multiple values into single array or object
let{name,...obj}=person
console.log(obj);// it collects remaing properties into one object or new objects
 let nums=[1,3,4,5,6,7]
 let[a,...nums2]=nums
 console.log(nums2); // putput -->[ 3, 4, 5, 6, 7 ]
 */
 // reduce()function
function sum(...nums){
   return nums.reduce((total,num)=>{
    total.push((total.length>0?total[total.length-1]:0)+num)
        return total
  },[])
}

console.log("sum of arguments :",sum(1,3,4,5,6));







