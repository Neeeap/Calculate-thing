let result=false
function calc(a){
    result=true
    if (a.includes("+")){
        a=a.split("+")
        return parseInt(a[0])+parseInt(a[1])
    } else if (a.includes("-")){
        a=a.split("-")
        return parseInt(a[0])-parseInt(a[1])
    } else if (a.includes("*")){
        a=a.split("*")
        return parseInt(a[0])*parseInt(a[1])
    } else{
        a=a.split("/")
        return parseInt(a[0])/parseInt(a[1])
    }
}
let numbers=document.querySelector("#nums")
let buttons=numbers.querySelectorAll("button")
let ope=document.querySelector("#operators")
let operations=ope.querySelectorAll("button")
let display=document.querySelector("p")
for (let i =0; i<9;i++){
    buttons[i].addEventListener("click", () =>{
        if (result){
            display.textContent=""
            result=false
    }
        display.append(buttons[i].textContent)
    })
}
for (let i =0; i<4;i++){
    operations[i].addEventListener("click", () =>{
        if (result){
            display.textContent=""
            result=false
    }
        display.append(operations[i].textContent)
    })
}
operations[4].addEventListener("click",() =>{
    display.textContent=calc(display.textContent)
})
buttons[9].addEventListener("click",() =>{
    display.append(buttons[9].textContent)
})