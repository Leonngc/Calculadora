function multiplicar(){

    let num = document.getElementById("num").value
    let multi
    let cont = 0
    let res = document.getElementById("res")
    let n = Number(num.value)

    for(cont = 0 ; cont <=10; cont++) {
        res.innerHTML += `${n} x ${cont} = ${num*cont} <br>`
    }        
}
    function resetar(){
        let res = document.getElementById("res")

        res.innerHTML = ` `
    }