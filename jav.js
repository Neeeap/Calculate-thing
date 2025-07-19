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
alert(calc("30/3"))