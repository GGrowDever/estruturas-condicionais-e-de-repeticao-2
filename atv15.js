let ladoA = parseInt(prompt('Digite o valor do lado A:'));
let ladoB = parseInt(prompt('Digite o valor do lado B:'));
let ladoC = parseInt(prompt('Digite o valor do lado C:'));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
	if (ladoA === ladoB && ladoB === ladoC) {
		console.log('Triângulo equilátero: possui todos os lados iguais.');
	} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
		console.log('Triângulo isósceles: possui dois lados iguais.');
	} else {
		console.log('Triângulo escaleno: possui todos os lados diferentes.');
	}
} else {
	console.log('Os valores fornecidos não formam um triângulo.');
}
