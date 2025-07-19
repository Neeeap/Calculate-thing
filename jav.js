function calc(a){
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
let display=document.querySelector("p")
for (let i =0; i<9;i++){
    buttons[i].addEventListener("click", () =>{
        display.append(buttons[i].textContent)
    })
}
buttons[9].addEventListener("click",() =>{
    display.append(buttons[9].textContent)
})