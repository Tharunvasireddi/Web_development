function outer(count){
    count+=1
    function inner(){
        console.log(count);   
    }
    return inner();
}
const newFunction = outer();
