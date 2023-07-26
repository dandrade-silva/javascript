function verificar() {
    // Armazenando os valores dos inputs
    var sexo = document.querySelector('input#txtsexo').value
    var res = window.document.querySelector('div#res')

    // Mostrando na tela
    if (sexo.toLowerCase() == "m") {
        res.innerHTML = `<p>M - Masculino</p>`
    } else if (sexo.toLowerCase() == 'f') {
        res.innerHTML = `<p>F - Feminino</p>`
    } else {
        res.innerHTML = `<p>Sexo inválido!</p>`
    }
}