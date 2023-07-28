function mostrarNumero() {
    var txtnum = document.getElementById('txtnum')
    var num = Number(txtnum.value)
    var res = window.document.querySelector('div#res')

    res.innerHTML = `<p>O número informado foi <strong>${num}</strong></p>`
}