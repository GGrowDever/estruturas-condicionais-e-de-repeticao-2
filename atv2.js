let idade = parseInt(prompt('Digite a idade do motorista:'));
let habilitado = prompt(
	"Informe se possui habilitação? (responda com 'sim' ou 'não')"
);

if (idade >= 18 && habilitado.toLowerCase() === 'sim') {
	console.log('pode dirigir.');
} else {
	console.log('Não pode dirigir.');
}
