let num = parseInt(prompt('Digite um número: '));

if (isNaN(num)) {
	console.log('Valor inválido. Por favor digite um número válido.');
} else {
	console.log('Números ímpares entre 1 e ' + num + ':');
}

for (let i = 1; i <= num; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
}
