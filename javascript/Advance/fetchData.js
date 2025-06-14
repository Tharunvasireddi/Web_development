
function fetchUserData(userId){
    return new Promise((resolve,reject)=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res=>{      
            console.log("doubt",res);
                  
            if(!res.ok){
                reject(`error:${res.status} : ${res.statusText}`)
            }
            return res.json()
        }).then(data=>resolve(data))
        .catch(e=>reject(e))
    })
}
fetchUserData(19)
.then(user=>{console.log(user)})
.catch(e=>console.log(e))

async function fetchData(userId){
    try{
     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        if(!res.ok){
            throw new Error(`error:${res.status} : ${res.statusText}`) 
        }
        const data = await res.json()
        return data
    }
    catch(e){
        throw e
    }
}
fetchData(1)