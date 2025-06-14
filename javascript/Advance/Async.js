// Promises --> promises is a javascript object that represents eventual complition or failure of asynchronous operation 
// promises have three states .promies are in either in one state
// 1) pending--> in this state its still being executed(neither reject nor resolved)
// 2) fullfilled --> the async operation has completed success completed successfully(resolved)
// 3) rejected --> async is failed and promies rejected with an error(not completed and rejected)


// Creation of promise --> it is created by using promise constructor , in constructor ,it takes function as a argument and this function has a two arguments 
// 1) resolve 2) reject (these ara also functions)

const myPromise=new Promise((resolve,reject)=>{
    let success=true
    if(success){
        resolve("succesfully completed")
    }
    else{
        reject("not successfull")
    }
});

//consuming the promise
myPromise.then(Msg=>console.log(Msg)
).catch(er=>console.log(er))
