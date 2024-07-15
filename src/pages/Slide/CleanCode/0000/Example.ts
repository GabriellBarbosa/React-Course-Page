const example = `function jogar(jogador, maquina) {    
    console.log(
        \`Jogador: \${jogador} | Máquina: \${maquina}\`
    );

    if (jogador === maquina){
        console.log('Rodada Empatada!');
    } else if (
        jogador === 'pedra' && maquina === 'tesoura' ||
        jogador === 'tesoura' && maquina === 'papel' ||
        jogador === 'papel' && maquina === "pedra"){
        numeroPlacarJogadorUm++;
        console.log(\`O jogador ganhou a rodada!\`);

    } else {
        numeroPlacarMaquina++;
        console.log(\`A Máquina ganhou a rodada!\`);
    }

    if (numeroPlacarJogadorUm >= placarVitoria) {
        console.log("Parabéns! Você venceu o jogo!");
        numeroPlacarJogadorUm = 0;
        numeroPlacarMaquina = 0;
    } else if (numeroPlacarMaquina >= placarVitoria) {
        console.log("Que Pena! A máquina te derrotou!");
        numeroPlacarMaquina = 0;
        numeroPlacarJogadorUm = 0;
    }
}`;

const exampleResolved = `function jogar(escolhaJogador) {
    const escolhaMaquina = sorteiaEscolha();
    incrementaPontosGanhador(escolhaJogador, escolhaMaquina);
    exibeMensagemDaRodada(escolhaJogador, escolhaMaquina);
    if (isGameOver()) {
        exibeGameOverMensagem();
        resetaJogo();
    }
}`;

export {
    example,
    exampleResolved
}