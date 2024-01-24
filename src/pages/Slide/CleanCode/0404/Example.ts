const example1 = 
`it('calculo imc', function() {
    const peso = 60;
    const altura = 1.7;
    const imc = new Imc(peso, altura);

    expect(imc.resultado).toBe('20.8');
});`

const example1Resolved = 
`it('calculo imc', function() {
    const peso = 60;
    const altura = 1.7;
    const imc = new Imc(peso, altura);

    const resultadoImc = peso / (altura ** 2);

    expect(imc.resultado).toBe(resultadoImc.toFixed(1));
});`;

const example2 = 
`_classificaImc(valorImc) {
    if (valorImc < 18.5) {
        return 'imc-abaixo';
    }
    else if (valorImc >= 18.5 && valorImc < 25.0) {
        return 'imc-saudavel';
    }
    else if (valorImc > 24.9 && valorImc < 29.9) {
        return 'imc-sobrepeso';
    }
    else if (valorImc > 30.0 && valorImc < 34.9) {
        return 'imc-obesidade-1';
    }
    else if (valorImc > 35.0 && valorImc < 39.9) {
        return 'imc-obesidade-2';
    }
    else if (valorImc > 40.0) {
        return 'imc-obesidade-3';
    }
}`;

const example3 = 
`it('alterna jogadas ate player1 ganhar', function() {
    const jogoDaVelha = new JogoDaVelha('player1');
    jogarAlternadoAtePlayer1Ganhar(jogoDaVelha);
    expect(jogoDaVelha.placar.player1).toBe(1);
});`;

const example4 = 
`it('jogar alternando ate ganhar', function() {
    const jogoDaVelha = new JogoDaVelha('player1');

    jogarAlternadoAtePlayer1Ganhar(jogoDaVelha);
    expect(jogoDaVelha.placar.player1).toBe(1);
    expect(jogoDaVelha.placar.player2).toBe(0);

    jogarAlternadoAtePlayer2Ganhar(jogoDaVelha);
    expect(jogoDaVelha.placar.player1).toBe(1);
    expect(jogoDaVelha.placar.player2).toBe(1);
});`;

const example4Resolved = 
`it('jogar alternando ate player1 ganhar', function() {
    const jogoDaVelha = new JogoDaVelha('player1');
    jogarAlternadoAtePlayer1Ganhar(jogoDaVelha);
    expect(jogoDaVelha.placar.player1).toBe(1);
    expect(jogoDaVelha.placar.player2).toBe(0);
});

it('jogar alternando ate player2 ganhar', function() {
    const jogoDaVelha = new JogoDaVelha('player2');
    jogarAlternadoAtePlayer2Ganhar(jogoDaVelha);
    expect(jogoDaVelha.placar.player1).toBe(0);
    expect(jogoDaVelha.placar.player2).toBe(1);
});`

export { 
    example1, 
    example1Resolved,
    example2,
    example3,
    example4,
    example4Resolved
};