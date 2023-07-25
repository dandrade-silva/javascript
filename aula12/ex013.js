// Condição Múltipla
var agora = new Date()
var diaSem = agora.getDay()

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

switch (diaSem) { // Só funciona com números inteiros e strings
    case 1:
        console.log('Segunda-feira')
        break // obrigatório
    case 2:
        console.log('Terça-feira')
        break // obrigatório
    case 3:
        console.log('Quarta-feira')
        break // obrigatório
    case 4:
        console.log('Quinta-feira')
        break // obrigatório
    case 5:
        console.log('Sexta-feira')
        break // obrigatório
    case 6:
        console.log('Sábado')
        break // obrigatório
    case 0:
        console.log('Domingo')
        break // obrigatório
    default:
        console.log('[ERRO] Dia da semana Inválido')
        break // opcional no default
}