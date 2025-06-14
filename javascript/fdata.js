document.addEventListener("DOMContentLoaded",()=>{
    let item1 = document.getElementById("item1");
    let btn1 = document.getElementById("increase")
    let btn2 = document.getElementById("decrease")
    let btn3 = document.getElementById("reset")
    var count =0;
    btn1.addEventListener("click",()=>{
        count+=1;
        item1.textContent = count;
    })
})