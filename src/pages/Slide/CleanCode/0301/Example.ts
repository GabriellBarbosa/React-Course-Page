const example1 = 
`    // ...
    } else if (
        jogador === 'pedra' && maquina === 'tesoura' ||
        jogador === 'tesoura' && maquina === 'papel' ||
        jogador === 'papel' && maquina === "pedra") {
        numeroPlacarJogadorUm++;
        console.log(\`O jogador ganhou a rodada! Jogador: \${numeroPlacarJogadorUm} | \${numeroPlacarMaquina}\`);
    } 
    // ...
}`;

const example1Resolved = 
`    // ...
    } else if (jogadorGanhouRodada(jogador, maquina)) {
        numeroPlacarJogadorUm++;
        console.log(\`O jogador ganhou a rodada! Jogador: \${numeroPlacarJogadorUm} | \${numeroPlacarMaquina}\`);
    } 
    // ...
}

function jogadorGanhouRodada(jogador, maquina) {
    return (
        jogador === 'pedra' && maquina === 'tesoura' ||
        jogador === 'tesoura' && maquina === 'papel' ||
        jogador === 'papel' && maquina === "pedra"
    );
}`;

const example2 =
`function jogar(escolhaJogador) {
    const escolhaMaquina = sorteiaEscolha();
    incrementaPontosDoGanhador(escolhaJogador, escolhaMaquina);
    exibeMensagemDaRodada(escolhaJogador, escolhaMaquina);
    if (isGameOver()) {
        exibeMensagemGameOver();
        resetaJogo();
    }
}`;

const example3 = 
`function sorteiaEscolha() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const numeroEntreZeroEDois = Math.floor(Math.random() * 3);
    return opcoes[numeroEntreZeroEDois];
} `;

const example4 = 
`function jogar(escolhaJogador) {
    const escolhaMaquina = sorteiaEscolha();
    incrementaPontosDoGanhador(escolhaJogador, escolhaMaquina);
    exibeMensagemDaRodada(escolhaJogador, escolhaMaquina);
    if (isGameOver()) {
        exibeMensagemGameOver();
        resetaJogo();
    }
}

function sorteiaEscolha() {...}

function incrementaPontosDoGanhador(escolhaJogador, escolhaMaquina) {...}

function exibeMensagemDaRodada(escolhaJogador, escolhaMaquina) {...}

function isGameOver() {...}

function exibeMensagemGameOver() {...}

function resetaJogo() {...}`;

export {
    example1,
    example1Resolved,
    example2,
    example3,
    example4
}