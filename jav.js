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
let display=document.querySelector("#calcDisplay")
let clear=document.querySelector("#clear")
let backspace=document.querySelector("#backspace")
clear.addEventListener("click", () =>{
    display.textContent=""
    result=false
    secOper=false
    oneNum=true
    deci=false
})
function addNum(i){
    if (result){
        display.textContent=""
        result=false
    }
    display.append(i)
}
function addOp(i){
    if (result){
            result=false
            display.append(i)
            secOper=true
        }
        else if ("+-*/".includes(display.textContent[display.textContent.length-1])){
            display.textContent=display.textContent.slice(0,-1)
            display.append(i)
        }
        else if (secOper){
            display.textContent=calc(display.textContent)
            result=false
            display.append(i)
        }
        else{
            display.append(i)
            secOper=true
        }
        oneNum=false
        deci=false
}
for (let i =0; i<=9;i++){
    buttons[i].addEventListener("click", () =>{
        addNum(buttons[i].textContent)
    })
}
for (let i =0; i<4;i++){
    operations[i].addEventListener("click", () =>{
        addOp(operations[i].textContent)
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
document.addEventListener("keydown", (a) =>{
    if ("0123456789".includes(a.key)){
    switch (a.key){
        case (result):
            display.textContent=""
            result=false
        case "0":
            addNum("0")
            break
        case "1":
            addNum("1")
            break
        case "2":
            addNum("2")
            break
        case "3":
            addNum("3")
            break
        case "4":
            addNum("4")
            break
        case "5":
            addNum("5")
            break
        case "6":
            addNum("6")
            break
        case "7":
            addNum("7")
            break
        case "8":
            addNum("8")
            break
        case "9":
            addNum("9")
            break
    }
    } else if ("+-/*=.Backspace".includes(a.key)){
        switch (a.key){
            case "+":
                addOp("+")
                break
            case "-":
                addOp("-")
                break
            case "*":
                addOp("*")
                break
            case "/":
                addOp("/")
                break
            case "=":
                display.textContent=calc(display.textContent)
                secOper=false
                oneNum=true
                break
            case ".":
                if (!deci){
                display.append(operations[4].textContent)
                deci=true
                }
                break
            case "Backspace":
                if ("+-*/".includes(display.textContent[display.textContent.length-1])){
                    secOper=false
                }
                display.textContent=display.textContent.slice(0,-1)
                break
        }
    }
})