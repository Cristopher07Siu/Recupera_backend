// EXERCÍCIO 01 - Produção diária de embalagens	Nível 1	6 pts
// Objetivo: Revisar variáveis, operações matemáticas e saída de dados.
// Uma máquina de embalagem produz uma quantidade fixa de caixas por hora. Crie um programa que calcule quantas caixas serão produzidas durante um dia de trabalho.
// O programa deve:
// ☐ Criar uma variável para a quantidade de caixas produzidas por hora.
// ☐ Criar uma variável para a quantidade de horas trabalhadas no dia.
// ☐ Calcular a produção total.
// ☐ Exibir uma frase informando caixas por hora, horas trabalhadas e total produzido.

const entrada = require('readline-sync');

const caixa = entrada.question("Digite a quantidade de caixas: ");
const horasProduzidas = entrada.questionInt("Digite a quantidade de caixas produzidas na hora: ");

const total = horasProduzidas * caixa;

console.log(`\n Relatorio de Producao `);
console.log(`Produto: ${caixa}`);
console.log(`Producao por hora: ${horasProduzidas}`);
console.log(`Total de caixas produzidas foram de: ${total}`);