function multiplicar(){
    let num = document.getElementById("num")
    let multi
    let cont = 0
    let res = document.getElementById("res")

    num = Number(num.value)

    while (cont <= 10) {
        multi = cont * num
        res.innerHTML = `${num}`
    }
}