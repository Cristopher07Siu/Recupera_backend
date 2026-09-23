// EXERCÍCIO 04 - Classificação de vibração Nível 2 8 pts
// Objetivo: Utilizar if, else if e else em uma regra de negócio.
// Um sensor mede o nível de vibração de um equipamento em mm/s.
// O programa deve:
// ☐ Até 3 mm/s: situação ESTÁVEL.
// ☐ Acima de 3 até 6 mm/s: situação ATENÇÃO.
// ☐ Acima de 6 mm/s: situação CRÍTICA.
// ☐ Solicitar o valor da vibração pelo terminal.
// ☐ Exibir o valor informado e a classificação.
const entrada = require('readline-sync');

const vibracao = entrada.questionFloat("Digite a vibracao por mm/s: ");

let situacao;

if (vibracao<=3) {
    situacao = "ESTAVEL";
}else if (vibracao<=6) {
    situacao = "ATENCAO";
} else {
    situacao = "CRITICA";
};

console.log(`Vibracao: ${vibracao}mm/s`);
console.log(`Situacao: ${situacao}`);