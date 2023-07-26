function media() {
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = window.document.querySelector('input#txtn2')
    var txtn3 = window.document.querySelector('input#txtn3')
    var txtn4 = window.document.querySelector('input#txtn4')
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var n3 = Number(txtn3.value)
    var n4 = Number(txtn4.value)
    var media = (n1 + n2 + n3 + n4) / 4
    var res = window.document.querySelector('div#res')

    res.innerHTML = `<p>Sua média foi <strong>${media}</strong></p>`
}