/*
=   recebe
== compara
*/

alert('Boas vindas ao jogo do numero secreto');
let numeroSecreto = 7;
let chute = prompt('escolha um número de 1 a 10');

if (numeroSecreto == chute) {
    alert ('numeroSecreto')
    // alert ('isso ai! você acertou o numero secreto (7)')
} else {
    alert ('Errou, tente novamente!')
}