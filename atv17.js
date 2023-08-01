let totalEleitores = parseInt(prompt('Digite o número total de eleitores:'));
let votosBrancos = parseInt(prompt('Digite o número de votos brancos:'));
let votosNulos = parseInt(prompt('Digite o número de votos nulos:'));
let votosValidos = parseInt(prompt('Digite o número de votos válidos:'));

let somaVotos = votosBrancos + votosNulos + votosValidos;
if (somaVotos > totalEleitores) {
	console.log(
		'Erro: A soma dos votos brancos, nulos e válidos não pode ser maior que o número total de eleitores.'
	);
} else {
	let percentualBrancos = (votosBrancos / totalEleitores) * 100;
	let percentualNulos = (votosNulos / totalEleitores) * 100;
	let percentualValidos = (votosValidos / totalEleitores) * 100;

	console.log(
		'Percentual de votos brancos: ' + percentualBrancos.toFixed(2) + '%'
	);
	console.log(
		'Percentual de votos nulos: ' + percentualNulos.toFixed(2) + '%'
	);
	console.log(
		'Percentual de votos válidos: ' + percentualValidos.toFixed(2) + '%'
	);
}
