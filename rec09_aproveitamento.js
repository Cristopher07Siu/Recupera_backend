// EXERCÍCIO 09 - Cálculo de aproveitamento de
// matéria-prima Nível 5 14 pts
// Objetivo: Organizar regras do programa em funções com parâmetros e retorno.
// Uma indústria deseja calcular o percentual de aproveitamento de matéria-prima. O aproveitamento é
// calculado por (quantidade útil / quantidade total) × 100.
// O programa deve:
// ☐ Criar a função calcularAproveitamento(util, total) que retorne o percentual.
// ☐ Criar a função classificarAproveitamento(percentual).
// ☐ Classificação: 90% ou mais = "EXCELENTE"; de 75% a 89,99% = "ADEQUADO"; abaixo de 75% =
// "REVISAR PROCESSO".
// ☐ Solicitar quantidade total e quantidade útil pelo terminal.
// ☐ Chamar as duas funções.
// ☐ Exibir total, quantidade útil, percentual e classificação.
const entrada = require("readline-sync");

function calcularEficiencia(real, prevista) {
    return (real / prevista) * 100;
}

function classificarEficiencia(percentual) {
    if (percentual >= 90) {
        return "EXELENTE";
    } else if (percentual >= 70) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }
}

const producaoPrevista = entrada.questionFloat("Producao prevista: ");
const producaoReal = entrada.questionFloat("Producao real: ");

const eficiencia = calcularEficiencia(producaoReal, producaoPrevista);
const classificacao = classificarEficiencia(eficiencia);

console.log("\n=== RELATÓRIO DE EFICIÊNCIA ===");
console.log(`Produção prevista: ${producaoPrevista}`);
console.log(`Produção real: ${producaoReal}`);
console.log(`Eficiência: ${eficiencia.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);