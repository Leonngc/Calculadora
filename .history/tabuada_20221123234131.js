function multiplicar(){
    let num = parseInt(document.getElementById("num").value)
    let multi
    let cont = 0
    let res = document.getElementById("res")


    while (cont <= 10) {
         = `${num} x ${cont} = ${num*cont}`
    }
}