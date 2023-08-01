let numeroDiaSemana = parseInt(
	prompt('Digite um número de 1 a 7 para obter o dia da semana:')
);

if (numeroDiaSemana === 1) {
	console.log('Domingo');
} else if (numeroDiaSemana === 2) {
	console.log('Segunda-feira');
} else if (numeroDiaSemana === 3) {
	console.log('Terça-feira');
} else if (numeroDiaSemana === 4) {
	console.log('Quarta-feira');
} else if (numeroDiaSemana === 5) {
	console.log('Quinta-feira');
} else if (numeroDiaSemana === 6) {
	console.log('Sexta-feira');
} else if (numeroDiaSemana === 7) {
	console.log('Sábado');
} else {
	console.log('Dia não reconhecido');
}
