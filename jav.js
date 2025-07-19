function calc(a){
    if (a[1]==="+"){
        return parseInt(a[0])+parseInt(a[2])
    } else if (a[1]==="-"){
        return parseInt(a[0])-parseInt(a[2])
    } else if (a[1]==="*"){
        return parseInt(a[0])*parseInt(a[2])
    } else{
        return parseInt(a[0])/parseInt(a[2])
    }
}