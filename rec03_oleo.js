// EXERCÍCIO 03 - Verificação de nível de óleo Nível 2 8 pts
// Objetivo: Aplicar uma estrutura condicional simples.
// O nível de óleo de uma máquina deve permanecer entre 40% e 80%, inclusive. Fora desse intervalo, a
// máquina precisa de inspeção.
// O programa deve:
// ☐ Solicitar o nível de óleo em porcentagem.
// ☐ Usar if/else para verificar se o nível está dentro do intervalo.
// ☐ Exibir "NÍVEL NORMAL" quando estiver entre 40 e 80.
// ☐ Exibir "INSPEÇÃO NECESSÁRIA" nos demais casos.
// ☐ Exibir também o valor informado.
const entrada = require('readline-sync');

const oleo = entrada.questionFloat("Digite o nivel do oleo: ");

console.log(`Nivel informado: ${oleo}% (porcemtagem)`);

if (oleo >=40 && oleo <=80) {
    console.log("NIVEL NORMAL");
} else {
    console.log("INSPECAO NECESSARIA");
}