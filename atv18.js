let precoTabela = parseFloat(prompt('Digite o preço de tabela da mercadoria:'));
let numParcelas = parseInt(prompt('Digite o número de vezes em que o pagamento será feito:'));

let valorParcela = 0;

if (numParcelas === 1) {
	valorParcela = precoTabela * 0.975; 
} else if (numParcelas >= 2 && numParcelas <= 5) {
	valorParcela = precoTabela;
} else if (numParcelas >= 6 && numParcelas <= 10) {
	valorParcela = precoTabela * 1.06; 
} else if (numParcelas >= 11 && numParcelas <= 15) {
	valorParcela = precoTabela * 1.13; 
} else {
	console.log('Número de parcelas inválido. Escolha entre 1 e 15 parcelas.');
}

let precoTotal = valorParcela * numParcelas;

console.log('Valor de cada parcela: R$' + valorParcela.toFixed(2));
console.log('Preço total da compra: R$' + precoTotal.toFixed(2));
