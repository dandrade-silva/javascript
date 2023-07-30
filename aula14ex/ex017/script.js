function tabuada() {
  const tabuada = document.getElementById("tabuada");
  const txtNum = document.querySelector("input#txtnum");
  let num = Number(txtNum.value);

  // Validação
  if (txtNum.value == "") {
    alert("[ERRO] Digite um número");
  } else {
    // Tabuada
    for (i = 0; i <= 9; i++) {
      tabuada.options[i].text = `${num} x ${i + 1} = ${num * (i + 1)}`;
    }
  }
}
