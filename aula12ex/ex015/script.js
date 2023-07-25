function verificar() {
    // Obtendo ano atual
    var anoAtual = new Date().getFullYear()

    // Obtendo os valores dos inputs
    // Ano de Nascimento
    var txtAno = document.querySelector('input#txtano')
    var ano = Number(txtAno.value)
    // Sexo (utilizando operador ternário)
    var sexo = document.getElementById('masculino').checked ? "Homem" : "Mulher"
    // Div para mostrar o resultado na tela
    var res = window.document.querySelector('div#res')

    // Criando Imagem dinamicamente
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    // Validações
    if (ano <= 0 || ((anoAtual - ano) > 150)) {
        alert(`[ERRO] O ano de nascimento precisa ser no mínimo ${anoAtual - 150}`)
    } else if (ano > anoAtual) {
        alert(`[ERRO] A data de nascimento não pode ser superior a ${anoAtual}`)
    } else {
        // Cálculos
        var idade = anoAtual - ano

        // Resultado na tela
        res.innerHTML = `<p>Detectamos ${sexo} com ${idade} ano(s).</p>`

        if (idade <= 5) {
            img.setAttribute('src', `imagens/${sexo}-5.png`)
        } else if (idade <= 10) {
            img.setAttribute('src', `imagens/${sexo}-10.png`)
        } else if (idade <= 16) {
            img.setAttribute('src', `imagens/${sexo}-16.png`)
        } else if (idade <= 25) {
            img.setAttribute('src', `imagens/${sexo}-25.png`)
        } else if (idade <= 50) {
            img.setAttribute('src', `imagens/${sexo}-50.png`)
        } else {
            img.setAttribute('src', `imagens/${sexo}-80.png`)
        }
        res.appendChild(img)
    }
}