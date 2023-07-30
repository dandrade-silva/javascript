const nomeInput = document.querySelector('input#txtnome')
const idadeInput = document.querySelector('input#txtidade')
const listaLinguagensInput = window.document.getElementById('lista-linguagem')
const outraLinguagemInput = document.querySelector("input#txtoutra")
const outraLinguagemP = document.getElementById("outra-linguagem")
const res = document.querySelector('div#res')

function verificar() {
    let nome = nomeInput.value
    let idade = idadeInput.value
    let linguagem = listaLinguagensInput.value
    let outraLinguagem = outraLinguagemInput.value

    if (nome == "" || idade == "") {
        alert('Informe seu nome/idade')
    } else if (listaLinguagensInput.selectedIndex == 10 && outraLinguagem.trim() == "") {
        alert('Informe o nome da linguagem que você está estudando')
    } else if (listaLinguagensInput.selectedIndex == 10) {
        // alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${outraLinguagem}!`)
        res.innerHTML = `Olá <strong>${nome}</strong>, você tem <strong>${idade}</strong> anos e já está aprendendo <strong>${outraLinguagem}</strong>!`
    } else {
        // alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)
        res.innerHTML = `Olá <strong>${nome}</strong>, você tem <strong>${idade}</strong> anos e já está aprendendo <strong>${linguagem}</strong>!`

    }
}

listaLinguagensInput.addEventListener('change', () => {
    if (listaLinguagensInput.selectedIndex == 10) {
        outraLinguagemP.style.display = 'block'
    } else {
        outraLinguagemP.style.display = 'none'
    }
})
