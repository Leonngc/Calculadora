function multiplicar(){
    let num = document.getElementById("num")
    let multi
    let cont = 0
    let res = document.getElementById("res")

    num = Number(num.value)

    for(cont = 0; cont <= 10; cont++){
        multi = cont * num
    }

    for(cont = 10; cont <= 1; cont++){
        res.innerHTML = `${num} x ${cont} = ${res}`
    }
}