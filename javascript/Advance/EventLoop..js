/* console.log("start");
setTimeout(()=>{
    console.log("timeout callback");
},0)

Promise.resolve()
.then(()=>console.log("promise callback"))

console.log("END")
 */
/* async function fun(){

    console.log("function start");  
    await Promise.resolve()
    console.log("end");
}

console.log("START");
fun()
console.log("END");

Promise.all([Promise.resolve(10),Promise.resolve(20),Promise.reject(40)])
.then((result)=> console.log(result))
.catch((result)=> console.log(result))
Promise.race([new Promise(resolve=>setTimeout(()=>resolve(45),7000)),new Promise(resolve=>setTimeout(()=>resolve(50),2000))])
.then(data=>console.log(data))
 */

function countlargeNumbers(){
    for(let i=0;i<1e9;i++){  
        if(i>100){
            break
        }     
        console.log("running");   
    }
    console.log("counting completed");
}
console.log("START");
countlargeNumbers()
console.log("END");

setTimeout(()=>{
    console.log("task 1");
    setTimeout(()=>{
        console.log("task 2");
        setTimeout(()=>{
            console.log("task 3");
            setTimeout(()=>{
                console.log("task 4");
            },1000)
        },1000)
    },1000)    
},1000)
const task = (msg,delay)=> new Promise(resolve=>setTimeout(()=>{
    console.log(msg)
resolve()},delay))
task("tharun",1000)