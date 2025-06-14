document.addEventListener("DOMContentLoaded",()=>{
    let input = document.getElementById("input")
    let copy  = document.getElementById("copy")
    let generate = document.getElementById("generate")
    let slider = document.getElementById("slider")
    let numberCheck = document.getElementById("numberCheckbox")
    let characterCheck = document.getElementById("characterCheckbox")
    let show = document.getElementById("show")
    let containNumbers = false;
    let containCharacters = false;
    let isPasswordVisible = false;

    slider.addEventListener("change",(e)=>{
        length.innertext = e.target.value
        passwordGenerater()
    })
    show.addEventListener("click",()=>{
       isPasswordVisible=!isPasswordVisible
        if(isPasswordVisible){
            input.type="text"
            show.textContent ="Hide"
        }
        else{
            input.type = "password"
            show.textContent = "show"
        }
    })
    characterCheck.addEventListener("change",passwordGenerater)
    numberCheck.addEventListener("change",passwordGenerater)
    function passwordGenerater(){
        passwordLength =parseInt(slider.value)
        containCharacters = characterCheck.checked
        containNumbers = numberCheck.checked
        let Alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let numbers = "0123456789"
        let characters = "!@#$$%^&*()_"
        if(containCharacters) Alphabets += characters
        if(containNumbers) Alphabets += numbers
        let Password =""
        for(let i=0;i<passwordLength;i++){
            let randomindex = Math.floor(Math.random()*Alphabets.length)
            Password += Alphabets[randomindex]
        }
        input.value = Password
    }
    generate.addEventListener("click",()=>{
        passwordGenerater()
    })
    copy.addEventListener("click",()=>{
        input.select()
        window.navigator.clipboard.writeText(input.value)
    })


})