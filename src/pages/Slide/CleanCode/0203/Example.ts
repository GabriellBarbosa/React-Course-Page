const example1 = 
`function payment(data) {
    // implementation...
    return processedData;
}

const result = payment(data);`;

const example1Resolved = 
`function processPayment(data) {
    // implementation...
    return processedData;
}

const result = processPayment(data);`;

const example2 = 
`class CalculateIncomeTax {
    // implementation...
}`;

const example2Resolved = 
`class IncomeTaxCalculator {
    // implementation...
}`;

const example3 = 
`customer.getData();
order.retrieveData();
payment.fetchData();`;

const example3Resolved = 
`customer.getData();
order.getData();
payment.getData();`;

const example4 = 
`const d = 90; // tempo decorrido em dias`;

const example4Resolved = 
`const elapsedTimeInDays = 90;`;

const example5 = 
`function createCustomerReport(customer: ICustomer) {
    // implementation...
}`;

const example5Resolved = 
`function createCustomerReport(customer: Customer) {
    // implementation...
}`;

const example6 = 
`function calculateTotalCost(basePrice, quantity) {
    return basePrice * quantity * 1.08 * 0.95;
}`;

const example6Resolved = 
`function calculateTotalCost(basePrice, quantity) {
    return basePrice * quantity * TAX_RATE * DISCOUNT_RATE;
}`;

const example7 = 
`let addrState;
let addrCity;
let addrZipCode;`;

const example7Resolved = 
`class Address {
    state;
    city;
    zipCode;
}`;

const example8 = 
`new ExportVisitor();
new CustomerFactory();
new SpellCheckerDelagate();`;

const example9 = 
`new Order();
new Customer();
new Checkout();`;


const exercise = 
`let numeroPlacarJogadorUm = 0;
let numeroPlacarMaquina = 0;

const placarVitoria = 5;

function jogadorClicou(escolhaJogador) {
    jogandoOJogo(escolhaJogador, escolhaMaquina());
}

//captando a escolha da maquina
function escolhaMaquina() {
    const opcao = ['pedra', 'papel', 'tesoura'];
    const numeroAleatorioEntreZeroE_Dois = Math.floor(Math.random() * 3);
    //Math.random sorteia um numero entre 0 e 1(0 - 0.9). multiplicando por 3, fará com que o resultado seja entre 0 e 2,9. O Math.floor, arredonda para baixo, sorteando entre 0 e 2.
    return opcao[numeroAleatorioEntreZeroE_Dois];
} 

function jogandoOJogo(jogador, maquina) {    
    console.log(\`Jogador: \${jogador} | Máquina: \${maquina}\`);

    if (jogador === maquina){
        console.log('Rodada Empatada!');
    } else if (
        jogador === 'pedra' && maquina === 'tesoura' ||
        jogador === 'tesoura' && maquina === 'papel' ||
        jogador === 'papel' && maquina === "pedra"   ){
        numeroPlacarJogadorUm++;
        console.log(\`O jogador ganhou a rodada! Jogador: \${numeroPlacarJogadorUm} | \${numeroPlacarMaquina}\`);

    } else {
        numeroPlacarMaquina++;
        console.log(\`A Máquina ganhou a rodada! Jogador: \${numeroPlacarJogadorUm} | \${numeroPlacarMaquina}\`);
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
}

jogadorClicou('pedra');
jogadorClicou('papel');
jogadorClicou('tesoura');`;

export {
    example1,
    example1Resolved,
    example2,
    example2Resolved,
    example3,
    example3Resolved,
    example4,
    example4Resolved,
    example5,
    example5Resolved,
    example6,
    example6Resolved,
    example7,
    example7Resolved,
    example8,
    example9,
    exercise
}
