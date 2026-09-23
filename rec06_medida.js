// EXERCÍCIO 06 - Média de tempos de atendimento Nível 3 10 pts
// Objetivo: Combinar repetição, entrada de dados e acumulador.
// Uma equipe registrou o tempo, em minutos, de seis atendimentos técnicos e deseja calcular a média.
// O programa deve:
// ☐ Criar um acumulador iniciado em zero.
// ☐ Usar um laço para solicitar exatamente 6 tempos.
// ☐ Somar cada valor ao acumulador.
// ☐ Calcular a média ao final.
// ☐ Exibir a soma dos tempos e a média.
const entrada = require('readline-sync');

let soma = 0;

for (let i = 1; i <= 6; i++) {
    const medicao = entrada.questionFloat(`Digite a medicao: ${i}`);
    soma += medicao;
}

const media = soma / 6;

console.log("\n Resultado das medicoes");
console.log(`Soma das medicoes: ${soma}`);
console.log(`Media Final ${media}`);