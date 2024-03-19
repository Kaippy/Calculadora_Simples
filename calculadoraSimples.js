//Calculadora Simples

import entradaDados from 'readline-sync';


// Saudações e entrada de dados
console.log(`Bem vindo!
Vamos iniciar sua calculadora!

O que deseja calcular?
1 - Adição
2 - Subtração
3 - Multiplicação
4 - Divisão\n`);

const dadoOpcao = Number(entradaDados.question(`Digite o número correspondente: `));


//Verificações caso seja um número inteiro e retorna ao usuário
if (Number.isInteger(dadoOpcao) == true && dadoOpcao <= 4 && dadoOpcao > 0){
    const entradaDado1 = entradaDados.question(`Digite o primeiro número para a calculadora: `);
    const entradaDado2 = entradaDados.question(`Digite o segundo número para a calculadora: `);

    switch (dadoOpcao){
        case 1:
            var resposta = Number(entradaDado1) + Number(entradaDado2);
            break
        case 2:
            var resposta = Number(entradaDado1) - Number(entradaDado2);
            break
        case 3:
            var resposta = Number(entradaDado1) * Number(entradaDado2);
            break
        case 4:
            var resposta = Number(entradaDado1) / Number(entradaDado2);
            break
    }
    console.log(`A resposta é ${resposta}\n`);
}
else if (isNaN(dadoOpcao)){
    console.log(`Não é um número!\n`)
}
else if (!Number.isInteger(dadoOpcao)){
    console.log(`Precisa ser um número inteiro!\n`)
}
else{
    console.log(`Número inválido!\n`);
}