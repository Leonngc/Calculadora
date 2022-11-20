function calcular() {
  let numberFirst = document.getElementById("n1");
  let numberSecond = document.getElementById("n2");
  let operation = document.getElementsByName("operator");
  const res = document.getElementById("res");

  if (operation[0].checked) {
    let n1 = Number(numberFirst.value);
    let n2 = Number(numberSecond.value);
    let soma = n1 + n2;
    res.innerHTML = `A soma de ${n1} e ${n2} é ${soma}`;
  } 
  
  else if (operation[1].checked) {
    let n1 = Number(numberFirst.value);
    let n2 = Number(numberSecond.value);
    let subtracao = n1 - n2;
    res.innerHTML = `A subtração de ${n1} e ${n2} é ${subtracao}`;
  } 
  
  else if (operation[2].checked) {
    let n1 = Number(numberFirst.value);
    let n2 = Number(numberSecond.value);
    let multiplicacao = n1 * n2;
    res.innerHTML = `A multiplicaçao de ${n1} com ${n2} é ${multiplicacao}`;
  } 
  
  else if (operation[3].checked) {
    let n1 = Number(numberFirst.value);
    let n2 = Number(numberSecond.value);
    let divisao = n1 / n2;
    res.innerHTML = `A divisão de ${n1} com ${n2} é ${divisao}`;
  }

  else if(operation[4].checked){
    let n1 = Number(numberFirst.value);
    let n2 = Number(numberSecond.value);
    let potenciacao = n1 ** n2
    res.innerHTML = `${n1} elevado a ${n2} é igual a ${potenciacao}`
  }
}
