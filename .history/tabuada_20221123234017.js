function multiplicar(){
    let num = parseInt(document.getElementById("num"))
    let multi
    let cont = 0
    let res = document.getElementById("res")

    num = Number(num.value)

    while (cont <= 10) {
        res.innerHTML = `${num} x ${cont} = ${num*cont}`
    }
}