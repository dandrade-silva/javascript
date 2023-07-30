function contar() {
  const txtInicio = document.getElementById("txtinicio");
  const txtFim = document.querySelector("input#txtfim");
  const txtPasso = document.getElementById("txtpasso");
  const res = document.getElementById("res");

  let inicio = Number(txtInicio.value);
  let fim = Number(txtFim.value);
  let passo = Number(txtPasso.value);

  res.innerHTML += `${inicio}👉`;

  // Validações
  if (passo <= 0) {
    alert(
      `[ERRO] Imposível utilizar Passo 0 ou NEGATIVO. Contando com Passo 1!`
    );
    passo = 1;
  } else if (txtInicio.value == "" || txtFim.value == "") {
    alert("[ERRO] Impossível contar! Informe o INICIO e o FIM da contagem");
  } else if (inicio >= fim) {
    passo = -passo;
  } else {
    for (i = inicio; i <= fim; i += passo) {
      if (i == inicio) {
        res.innerHTML = `${i}👉`;
      } else {
        res.innerHTML += `${i}👉`;
      }
    }
    res.innerHTML += `🏁`;
  }
}
