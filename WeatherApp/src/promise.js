function fetchData(city){
    return new Promise((resolve,reject)=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(res=>{
            if(!res.ok){
                reject(`error ${res.status} : ${res.statusText}`)
            }
            return res.json()
        }).then(data=>resolve(data))
        .catch(e=>console.log("e"))
    })
}
fetchData("hyderabad")
.then(data=>console.log(data))
.catch(e=>console.log(e))

function fetchWeather(city){
   return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(data=>data.json())
    .then(da=>console.log(da)).catch(e=>console.log(e))
}
fetchWeather("narsipatnam")