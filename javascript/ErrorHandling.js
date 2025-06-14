// try --> it is used to wrap the block of code that may throw may error
// catch --> it defines the block of code to run if an error accors in the run block
// finally --> executes the code after the try and catch bloack regardles of wether an error occurs or not 

let num1="a"
let num2=1
try{
    throw new Error("tharun")
}
catch(e){
    console.log(e);
    
}
finally{
    console.log("my name is tharun");
    
}