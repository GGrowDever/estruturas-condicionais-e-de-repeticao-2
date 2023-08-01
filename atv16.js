let anoAtual = 2023;
let anoNasc = parseInt(prompt('Digite o ano em que nasceu:'));

if (anoAtual - anoNasc >= 18) {
	console.log('Poderá votar!');
} else {
	console.log('Não poderá votar!!!');
}
