function carregar() {
    // Obtendo o horário atual
    var agora = new Date()
    var hora = agora.getHours()

    // Variáveis com os elementos que vão sofrer alteração de estilo
    var img = window.document.querySelector('img#imagem')
    var msg = document.getElementById('msg')
    var msg2 = document.querySelector('div#msg2')
    var corpo = document.body

    // Mostrando a primeira mensagem na tela.
    msg.innerHTML = `Agora são ${hora} horas`

    // Condicional do background, imagem e mensagem.
    if (hora < 12) {
        img.src = 'imagens/manha.png'
        corpo.style.background = '#D7B494'
        msg2.innerHTML = "Bom Dia!"

    } else if (hora < 18) {
        img.src = 'imagens/tarde.png'
        corpo.style.background = '#DF826A'
        msg2.innerHTML = "Boa Tarde!"

    } else {
        img.src = 'imagens/noite.png'
        corpo.style.background = '#40606F'
        msg2.innerHTML = 'Boa Noite!'
    }

}
