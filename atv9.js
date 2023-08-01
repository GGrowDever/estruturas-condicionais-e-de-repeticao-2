let numero = 17;

if (numero <= 1) {
	console.log(numero + ' não é um número primo.');
} else if (numero <= 3) {
	console.log(numero + ' é um número primo.');
} else if (numero % 2 === 0 || numero % 3 === 0) {
	console.log(numero + ' não é um número primo.');
} else {
	let i = 5;
	while (i * i <= numero) {
		if (numero % i === 0 || numero % (i + 2) === 0) {
			console.log(numero + ' não é um número primo.');
			break;
		}
		i += 6;
	}
	if (i * i > numero) {
		console.log(numero + ' é um número primo.');
	}
}
