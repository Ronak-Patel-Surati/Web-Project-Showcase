let random = math.random()
let a = prompt("enter first number")
let b = prompt("enter second number")
let c = prompt("enter operation")

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
    
}