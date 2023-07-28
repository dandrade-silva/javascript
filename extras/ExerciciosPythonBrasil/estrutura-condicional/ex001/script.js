function verificar() {
    // Armazenando os valores dos inputs
    var n1 = Number(document.querySelector('input#txtn1').value)
    var n2 = Number(document.querySelector('input#txtn2').value)
    var res = window.document.querySelector('div#res')

    // Mostrando na tela
    if (n1 > n2) {
        res.innerHTML = `<p>${n1} é o maior valor!</p>`
    } else if (n1 < n2) {
        res.innerHTML = `<p>${n2} é o maior valor!</p>`
    } else {
        res.innerHTML = `<p>Os valores são iguais!</p>`
    }
}