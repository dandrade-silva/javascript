/*
Opcões ListaComparações
    0 Tipo
    1 Valor
    2 Tipo e Valor

Opcões ListaDados
    0 String(Texto)
    1 Number(Número)
*/

function comparar() {
    var opcaoListaComparacao = document.querySelector('select#listaComparacoes').selectedIndex
    var opcaoTipoDados1 = document.querySelector('select#tipoDados1').selectedIndex
    var opcaoTipoDados2 = document.querySelector('select#tipoDados2').selectedIndex

    var txtn1 = document.querySelector('input#txtn1').value
    var txtn2 = document.querySelector('input#txtn2').value

    var res = window.document.getElementById('res')

    switch (opcaoListaComparacao) {
        case 0:
            // Compara apenas o tipo, ignorando os valores
            if (opcaoTipoDados1 == opcaoTipoDados2) {
                res.innerHTML = `As variáveis 1 e 2 possuem o mesmo tipo!`
            } else {
                res.innerHTML = `As variáveis 1 e 2 possuem tipos diferentes!`
            }
            break
        case 1:
            // Compara apenas o valor, ignorando o tipo
            if (txtn1 == txtn2) {
                res.innerHTML = `As variáveis 1 e 2 possuem o mesmo valor!`
            } else {
                res.innerHTML = `As variáveis 1 e 2 possuem valores diferentes!`
            }
            break
        case 2:
            // Tipo e Valor - Eu poderia fazer com (===) igualdade restrita, mas queria treinar meu HTML
            if (txtn1 == txtn2 && opcaoTipoDados1 == opcaoTipoDados2) {
                res.innerHTML = `As variáveis 1 e 2 possuem o mesmo tipo e valor!`
            } else if (txtn1 == txtn2) {
                res.innerHTML = `As variáveis 1 e 2 possuem o mesmo valor, mas são de tipos diferentes!`
            } else if (opcaoTipoDados1 == opcaoTipoDados2) {
                res.innerHTML = `As variáveis 1 e 2 possuem o mesmo tipo, mas os valores são diferentes!`
            } else {
                res.innerHTML = `As variáveis 1 e 2 possuem tipos e valores diferentes!`
            }
            break
    }
}