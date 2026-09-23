// EXERCÍCIO 08 - Controle de ferramentas Nível 4 12 pts
// Objetivo: Integrar objetos, arrays, repetição e condição.
// Um almoxarifado precisa cadastrar quatro ferramentas. Cada ferramenta possui nome, quantidade
// disponível e quantidade mínima.
// O programa deve:
// ☐ Criar um array vazio para armazenar as ferramentas.
// ☐ Cadastrar 4 ferramentas usando um laço.
// ☐ Criar um objeto para cada ferramenta com nome, quantidade e minimo.
// ☐ Adicionar cada objeto ao array com push().
// ☐ Percorrer o array após o cadastro.
// ☐ Quando quantidade < minimo, exibir "REPOR".
// ☐ Caso contrário, exibir "ESTOQUE SUFICIENTE".
// ☐ Apresentar nome, quantidade, mínimo e situação de cada ferramenta.

const entrada = require("readline-sync");

const componentes = [];

for (let i = 0; i < 3; i++) {
    console.log(`\nCadastro do componente ${i + 1}`);

    const nome = entrada.question("Nome: ");
    const quantidade = entrada.questionInt("Quantidade em estoque: ");
    const estoqueMinimo = entrada.questionInt("Estoque minimo: ");

    const componente = {
        nome,
        quantidade,
        estoqueMinimo
    };

    componentes.push(componente);
}

console.log("\n=== RELATÓRIO DE ESTOQUE ===");

for (let i = 0; i < componentes.length; i++) {
    const item = componentes[i];

    console.log(`\nComponente: ${item.nome}`);
    console.log(`Quantidade: ${item.quantidade}`);
    console.log(`Estoque minimo: ${item.estoqueMinimo}`);

    if (item.quantidade < item.estoqueMinimo) {
        console.log("Situação: REPOR");
    } else {
        console.log("Situação: ESTOQUE SUFICIENTE");
    }
}