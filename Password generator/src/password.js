document.addEventListener("DOMContentLoaded",()=>{
    let input = document.getElementById("input")
    let copy = document.getElementById("copy")
    let slider = document.getElementById("slider")
    let length = document.getElementById("length")
    let numberCheckbox = document.getElementById("numberCheckbox")
    let number = document.getElementById("number")
    let characterCheckbox = document.getElementById("characterCheckbox")
    let special = document.getElementById("special")
    let generate = document.getElementById("generate")
    let passwordLength;
    let containNumbers=false;
    let containsSpecialcharacters=false;
    let isPasswordVisible = false;
    console.log(characterCheckbox.checked);
    let show = document.getElementById("show")
    
    show.addEventListener('click', () => { 
        isPasswordVisible = !isPasswordVisible; 
        if (isPasswordVisible) {
             input.type = 'text';
             show.textContent = "Hide"; } 
             else {
                 input.type = 'password'; 
                 show.textContent = "Show"; } });
    })
    slider.addEventListener('change', (e)=>{
        length.innerText = e.target.value;
        passwordGenerate()
    })
    numberCheckbox.addEventListener('change',passwordGenerate)
    characterCheckbox.addEventListener('change',passwordGenerate)
    length.innerText=slider.value
    function passwordGenerate(){
       passwordLength=parseInt(slider.value)
       containNumbers =  numberCheckbox.checked  
       containsSpecialcharacters = characterCheckbox.checked
       let Password='';
       let Alphabets='ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz'
       let Numbers ='0123456789'
       let Specialcharacters ='!@#$%^&*()_'
       if(containNumbers) Alphabets+=Numbers
       if(containsSpecialcharacters) Alphabets+=Specialcharacters
       for(let i=0;i<passwordLength;i++){
        let randomIndex=Math.floor(Math.random()*Alphabets.length)
        Password+=Alphabets[randomIndex]
        console.log(Password); 
       }
       input.value=Password
    }
    generate.addEventListener("click",()=>{
     passwordGenerate()
    })
    copy.addEventListener('click',()=>{
        input.select()
        window.navigator.clipboard.writeText(input.value)
    })
