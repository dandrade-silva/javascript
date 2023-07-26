function verificar() {
    // Armazenando os valores dos inputs
    var n1 = Number(document.querySelector('input#txtn1').value)
    var res = window.document.querySelector('div#res')

    // Mostrando na tela
    if (n1 < 0) {
        res.innerHTML = `<p>${n1} é um número negativo.</p>`
    } else if (n1 == 0) {
        res.innerHTML = `<p>${n1} é um número neutro.</p>`
    } else {
        res.innerHTML = `<p>${n1} é um número positivo.</p>`
    }
}