const example1 = 
`reservarQuarto(cliente, true);
function reservarQuarto(cliente, isPremium) {...}`;

const example1Resolved = 
`reservarQuartoPremium(cliente);
reservarQuartoNormal(cliente);`;

const example2 = 
`function sorteiaEscolha() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const numeroEntreZeroEDois = Math.floor(Math.random() * 3);
    return opcoes[numeroEntreZeroEDois];
} `;

const example3 = 
`function jogar(escolhaJogador) {
    const escolhaMaquina = sorteiaEscolha();
    incrementaPontosDoGanhador(escolhaJogador, escolhaMaquina);
    exibeMensagemDaRodada(escolhaJogador, escolhaMaquina);
    if (isGameOver()) {
        exibeMensagemGameOver();
        resetaJogo();
    }
} `;

const example4 =
`function incrementaPontosGanhador(escolhaJogador, escolhaMaquina) {
    if (escolhaJogador === escolhaMaquina) {
        return;
    } else if (jogadorGanhouRodada(escolhaJogador, escolhaMaquina)) {
        pontosJogador++;
    } else {
        pontosMaquina++;
    }
}`;

const example5 =
`setPosition(x, y, z);`;

const example6 =
`registrarEndereco(estado, cidade, cep, numero);`;

const example6Resolved =
`const endereco = new Endereco(estado, cidade, cep, numero);
registrarEndereco(endereco);`;

const example7 =
`console.log("José", "Silva", 45, 180, true);`;

const example8 =
`function enrichOrder(argOrder) {
    const aOrder = _.cloneDeep(argOrder);
    aOrder.baseCharge = calculateBaseCharge(aOrder);
    aOrder.taxableCharge = calculateTaxableCharge(aOrder);
    return aOrder;
}`;

const example9 =
`function enrichOrder(order) {
    order.baseCharge = calculateBaseCharge(order);
    order.taxableCharge = calculateTaxableCharge(order);
}`;

const example10 =
`function getTotalOfRealties(client) {
    let result = 0;
    client.enterprises.map((enterprise) => {
        result = result + parseInt(enterprise.realties);
    });
    return result;
}`;

const example10Resolved =
`function getTotalOfRealties(enterprises) {
    let result = 0;
    enterprises.map((enterprise) => {
        result = result + parseInt(enterprise.realties);
    });
    return result;
}`;

export {
    example1,
    example1Resolved,
    example2,
    example3,
    example4,
    example5,
    example6,
    example6Resolved,
    example7,
    example8,
    example9,
    example10,
    example10Resolved
}
