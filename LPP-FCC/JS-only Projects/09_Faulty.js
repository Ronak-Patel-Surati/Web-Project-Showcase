let random = math.random()
let a = prompt("enter first number")
let c = prompt("enter operation")
let b = prompt("enter second number")

let obj = {
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"**"
}

c  = obj[c]
if (random > 0.1) {
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
}else{
    c =  obj[c]
    alert(`The Result is ${eval(`${a} ${c} ${b}`)}`)
}
prompt  
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

prompt('');