var clicado = false
function multiplicar(){
    let num = document.getElementById("num")
    let multi
    let cont = 0
    let res = document.getElementById("res")
    let n = Number(num.value)
    if(!clicado){ 
        for(cont = 0 ; cont <=10; cont++) {
        res.innerHTML += `${n} x ${cont} = ${n*cont} <br>`
    }
    cli
}
    
           }

    function resetar(){
        let res = document.getElementById("res")

        res.innerHTML = ` `
    }

