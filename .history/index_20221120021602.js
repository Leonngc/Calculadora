function calcular() {
  let numberFirst = document.getElementById("n1");
  let numberSecond = document.getElementById("n2");
  let operation = document.getElementsByName("operator");
  const res = document.getElementById("res");

  if (operation[0].checked) {
    let n1 = (numberFirst.value).num;
    let n2 = numberSecond.value;
    let soma = n1 + n2;
    res.innerHTML = `A soma de ${numberFirst} e ${numberSecond} é ${soma}`;
  }
}
