function somar() {
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = window.document.querySelector('input#txtn2')
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var res = window.document.querySelector('div#res')

    res.innerHTML = `<p>A soma dos números é igual a <strong>${n1 + n2}</strong></p>`
}