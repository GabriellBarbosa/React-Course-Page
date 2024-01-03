const example1 = 
`function calcularValorLiquido(valor, meioDePagamento) {
    const taxa = calcularTaxa(valor, meioDePagamento);
    return valor - taxa;
}

function calcularTaxa(valor, meioDePagamento) {
    switch (meioDePagamento) {
        case 'CRÉDITO': {
            const taxaPorcentagem = 3.49;
            const taxaEmReais = (valor * taxaPorcentagem) / 100;
            return taxaEmReais;
        } case 'BOLETO': {
            const taxaFixaEmReais = 1.40;
            const taxaIntermediacaoPorcentagem = 4.99;
            const taxaIntermediacaoEmReais = (valor * taxaIntermediacaoPorcentagem) / 100;
            const taxaEmReais = taxaIntermediacaoEmReais + taxaFixaEmReais;
            return taxaEmReais;
        }  case 'PIX':
            return 0;
        default:
            throw new Error('meio de pagamento inválido');
    }
}`;

const example2 =
`function calcularValorLiquido(valor, meioDePagamento) {
    const pagamento = criarMeioDePagemento(meioDePagamento);
    const taxa = pagamento.calcularTaxa(valor);
    return valor - taxa;
}

function criarMeioDePagemento(meioDePagamento) {
    switch (meioDePagamento) {
        case 'CRÉDITO':
            return new Credito();
        case 'BOLETO':
            return new Boleto();
        case 'PIX':
            return new Pix();
        default:
            throw new Error('meio de pagamento inválido');
    }
}`;

export { example1, example2 };