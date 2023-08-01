let quantidadeImpares = 0;
let resultado = '';

for (let i = 1; i < 30; i += 2) {
	quantidadeImpares++;
	resultado += i + ' - ';
}

document.write(resultado);
