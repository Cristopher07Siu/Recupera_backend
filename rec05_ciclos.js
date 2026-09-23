// EXERCÍCIO 05 - Projeção de produção por ciclo Nível 3 10 pts
// Objetivo: Utilizar laço de repetição para gerar uma sequência de resultados.
// Uma esteira produz uma quantidade fixa de produtos por ciclo. O supervisor quer visualizar a produção
// acumulada dos ciclos 1 até 12.
// O programa deve:
// ☐ Solicitar quantos produtos são produzidos por ciclo.
// ☐ Usar um laço for de 1 até 12.
// ☐ Exibir, em cada ciclo, o número do ciclo e a produção acumulada.
// ☐ Não escrever manualmente as doze linhas.
const entrada = require('readline-sync');

const tempoCiclo = entrada.questionInt("Digite o tempo de ciclos: ");

let acumulado = 0;

for (let ciclo = 1;ciclo <=12; ciclo++) {
    acumulado += tempoCiclo;
    console.log(`Ciclo ${ciclo} - Tempo acumulada: ${acumulado}`);
};