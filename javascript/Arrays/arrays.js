// Arrays --> arrays in java script is used to store the variables at one place
 let a=4
 let b=5
 let c=10
  // instead of the that 
const arr=[a,b,c]
console.log(arr);
 
// methods in javascript

// map function --> map function iterate over the array and call the call back function for what the operation we want to do with the array elements
// without change the previous elements 

const list =[1,2,3,4,5,6]
// for example we want to square the elements and store in the another array

const squares =list.map(item =>item*item)
console.log(squares);

// in map function we call the map function with refrence of the array which we want to do operations and write the singlelined function as argument the argument function must be the contains elements of the array as arguments 
// for another example we create the elements multiply by 2
const double = list.map(item => item*2) 
console.log(double);
// for conclusion of map function is we create new array with out change the previous array

// filter method --> filter method used to create the new array with our conditions.
// for example if we want to create the array with only  even numbers .then we can go for the filer method
const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] 
 const evens = numbers.filter(num=>num%2==0) 
 console.log(evens)
 // this is the filter method 

 // for each( ) loop --> in javascript ,for eachloop is operates as simila to the map function and filter here it does not return the new array 

 let add = function (x) {
  return function (y) {
    console.log(x + y)
  }
}

let addByTwo = add(7)
addByTwo(7)

for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, i * 1000)
}
const promise = new Promise((resolve, reject) => {
  let value = true
  if (value) {
    resolve('hey value is true')
  } else {
    reject('there was an error, value is false')
  }
})



  async function asyncCall() {
    const result = await promise
    console.log(result)
  }
  
  asyncCall()
  
