// manutenção Nível 1 8 pts
// Objetivo: Trabalhar com entrada de dados e cálculos numéricos.
// Uma equipe de manutenção precisa calcular o custo de um lote de peças de reposição.
// O programa deve:
// ☐ Importar a biblioteca readline-sync.
// ☐ Solicitar o nome da peça.
// ☐ Solicitar a quantidade comprada.
// ☐ Solicitar o preço unitário.
// ☐ Calcular o valor total da compra.
// ☐ Exibir um resumo contendo nome, quantidade, preço unitário e total.
const entrada = require('readline-sync');

const material = entrada.question("Nome do material: ");
const quantidade = entrada.questionInt("Quantidade comprada: ");
const precoUnitartio = entrada.questionFloat("Preco Unitario: R$");

const total = quantidade * precoUnitartio;

console.log("\n Resumo da Compra ");
console.log(`Material: ${material}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Preco Unitario R$ ${precoUnitartio.toFixed(2)}`);
console.log(`Valor Toral: R$ ${total.toFixed(2)}`);
