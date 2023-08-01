let alturaMaculino = 0;
let alturaFeminino = 0;
const sexoFeminino = 1;
const sexoMasculino = 2;

let escolha = parseInt(
	prompt("Para Feminino digite: '1' | Para masculino digite: '2'")
);

if (escolha === sexoMasculino) {
	alturaMaculino = Number(prompt('Digite a altura:'));
	let pesoIdeal = alturaMaculino * 72.7 - 58;
	console.log('O peso ideal para homem é: ', pesoIdeal);
} else if (escolha === sexoFeminino) {
	alturaFeminino = Number(prompt('Digite a altura:'));
	let pesoIdeal = alturaFeminino * 62.1 - 44.7;
	console.log('O peso ideal para mulher é: ', pesoIdeal);
} else {
	console.log('Escolha inválida! ');
}
