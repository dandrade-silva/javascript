const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput(question) {
    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer);
        });
    });
}

(async () => {
    const nome = await getInput('Qual o seu nome? ');
    const idade = await getInput('Quantos anos você tem? ');
    const linguagem = await getInput('Qual linguagem de programação você está estudando? ');

    console.log(`\nOlá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}! \n`);

    const gostaEstudar = await getInput(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM e 2 para NÃO: `);

    if (gostaEstudar == 1) {
        console.log('\nMuito bom! Continue estudando e você terá muito sucesso.\n')
    } else {
        console.log('\nAhh que pena... Já tentou aprender outras linguagens?\n')
    }

    console.log('===== FIM DO PROGRAMA =====')
    rl.close();
})();
