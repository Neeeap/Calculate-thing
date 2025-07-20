let result=false
let secOper=false
let oneNum=true
let deci=false
function calc(a){
    if (oneNum){
        return a
    }
    if (a.includes("/0")){
        let errMess=document.createElement("p")
        errMess.textContent="Nope, that ain't gonna happen!"
        calcBody.append(errMess)
        setTimeout(() => {
                errMess.style.display = 'none';
            }, 5000);
        return ""
    }
    result=true
    oneNum=true
    if (a.includes("+")){
        a=a.split("+")
        return +a[0]+ +a[1]
    } else if (a.includes("-")){
        a=a.split("-")
        return +a[0]- +a[1]
    } else if (a.includes("*")){
        a=a.split("*")
        return +a[0]* +a[1]
    } else{
        a=a.split("/")
        return +a[0]/ +a[1]
    }
}
let calcBody=document.querySelector("#calculator")
let numbers=document.querySelector("#nums")
let buttons=numbers.querySelectorAll("button")
let ope=document.querySelector("#operators")
let operations=ope.querySelectorAll("button")
let display=document.querySelector("p")
let clear=document.querySelector("#clear")
let backspace=document.querySelector("#backspace")
clear.addEventListener("click", () =>{
    display.textContent=""
    result=false
    secOper=false
    oneNum=true
    deci=false
})
function add(i){
    if (result){
        display.textContent=""
        result=false
    }
    display.append(i)}
for (let i =0; i<9;i++){
    buttons[i].addEventListener("click", () =>{
        add(buttons[i].textContent)
    })
}
for (let i =0; i<4;i++){
    operations[i].addEventListener("click", () =>{
        if (result){
            result=false
            display.append(operations[i].textContent)
            secOper=true
        }
        else if ("+-*/".includes(display.textContent[display.textContent.length-1])){
            display.textContent=display.textContent.slice(0,-1)
            display.append(operations[i].textContent)
        }
        else if (secOper){
            display.textContent=calc(display.textContent)
            result=false
            display.append(operations[i].textContent)
        }
        else{
            display.append(operations[i].textContent)
            secOper=true
        }
        oneNum=false
        deci=false
    })
}
backspace.addEventListener("click", () =>{
    if ("+-*/".includes(display.textContent[display.textContent.length-1])){
        secOper=false
    }
    display.textContent=display.textContent.slice(0,-1)
})
operations[4].addEventListener("click",() =>{
    if (!deci){
        display.append(operations[4].textContent)
        deci=true
    }
})
operations[5].addEventListener("click",() =>{
    display.textContent=calc(display.textContent)
    secOper=false
    oneNum=true
})
buttons[9].addEventListener("click",() =>{
    if (result){
            display.textContent=""
            result=false
        }
    display.append(buttons[9].textContent)
})
document.addEventListener("keydown", (a) =>{
    if ("0123456789".includes(a.key)){

    switch (a.key){
        case (result):
            display.textContent=""
            result=false
        case "1":
            add()
    }
}
})