function contar() {
  const txtInicio = document.getElementById("txtinicio");
  const txtFim = document.querySelector("input#txtfim");
  const txtPasso = document.getElementById("txtpasso");
  const res = document.getElementById("res");

  let inicio = Number(txtInicio.value);
  let fim = Number(txtFim.value);
  let passo = Number(txtPasso.value);

  res.innerHTML += `${inicio}👉`;

  for (i = inicio; i <= fim; i += passo) {
    if (i == inicio) {
      res.innerHTML = `${i}👉`;
    } else {
      res.innerHTML += `${i}👉`;
    }
  }
  res.innerHTML += `🏁`;
}
