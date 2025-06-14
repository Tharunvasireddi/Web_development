console.log(null+1);
console.log(null+"1");
console.log(1+"1");
console.log(undefined+1);
console.log(typeof undefined+1);
function somthing(a=20,b=10){
    console.log(a+b);
    
}
somthing(10,undefined)
somthing(null,20)
const obj={
    a:1,
    b:2,
    c:3,
    d:4
}
const keys = Object.keys(obj)
console.log(keys);
const arr =[1,2,3,4,5,6,7,8]

async function name(country) {
        const data = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${country}.json`)
        const response = await data.json()
        return data;
}
console.log(name("inr"));
console.log(obj.a);
