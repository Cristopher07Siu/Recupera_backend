// EXERCÍCIO 10 - Sistema modular de orçamento
// técnico Nível 5 14 pts
// Objetivo: Separar regras de negócio em um módulo e utilizá-las no programa principal.
// Uma assistência técnica precisa calcular o orçamento de um serviço utilizando dois arquivos JavaScript.
// O programa deve:
// ☐ Criar uma pasta chamada rec10_orcamento.
// ☐ Criar o arquivo funcoesOrcamento.js.
// ☐ Criar calcularMaoDeObra(horas), considerando R$ 95,00 por hora.
// ☐ Criar calcularTotal(valorMateriais, horas), somando materiais e mão de obra.
// ☐ Criar verificarDesconto(total), retornando "DESCONTO DE 10%" quando total >= R$ 1000,00 e "SEM
// DESCONTO" nos demais casos.
// ☐ Exportar as funções com module.exports.
// ☐ Criar o arquivo app.js.
// ☐ No app.js, importar readline-sync e o módulo com require().
// ☐ Solicitar nome do cliente, valor dos materiais e horas de serviço.
// ☐ Exibir relatório com cliente, materiais, mão de obra, total e situação do desconto.
const entrada = require("readline-sync");

const {
    calcularMaoDeObra,
    calcularTotal,
    verificarGarantia
} = require("./funcoesManutencao");

const maquina = entrada.question("Nome da máquina: ");
const valorPecas = entrada.questionFloat("Valor das peças: R$ ");
const horas = entrada.questionFloat("Horas de serviço: ");
const meses = entrada.questionInt("Meses desde a última manutenção: ");

const maoDeObra = calcularMaoDeObra(horas);
const total = calcularTotal(valorPecas, horas);
const garantia = verificarGarantia(meses);

console.log("\n=== RELATÓRIO DE MANUTENÇÃO ===");
console.log(`Máquina: ${maquina}`);
console.log(`Mão de obra: R$ ${maoDeObra.toFixed(2)}`);
console.log(`Peças: R$ ${valorPecas.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Garantia: ${garantia}`);