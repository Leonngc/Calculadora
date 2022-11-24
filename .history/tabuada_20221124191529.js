function multiplicar(){
    let num = parseInt(document.getElementById("num").value)
    let multi
    let cont = 0
    let res = document.getElementById("res")


    for(cont = 0 ; cont <=10; cont++) {
        res.innerHTML += `${num} x ${cont} = ${num*cont} <br>`
    }        
}

function resetar(){
    let num = document.getElementById("num")
}