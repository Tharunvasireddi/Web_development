const fs = require('fs')
fs.readFile("name.txt","utf-8",(err,data)=>{
    if(err){
        console.error(`${err.message} is found`);  
        return
    }
    console.log(data)   
}) 
try {
    const data=fs.readFileSync("name.txt","utf-8")
} catch (error) {
    console.log(`${error.message} is found`);
}