function orcamento(horas) {
    return horas * 80;
}

function calcularTotal(valorPecas, horas) {
    const maoDeObra = orcamento(horas);
    return valorPecas + maoDeObra;
}

function verificarGarantia(meses) {
    if (meses <= 6) {
        return "DESCONTO";
    } else {
        return "SEM DESCONTO";
    }
}

module.exports = {
    calcularMaoDeObra,
    calcularTotal,
    verificarGarantia
};
