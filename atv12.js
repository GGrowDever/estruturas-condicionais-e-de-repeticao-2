const num = prompt('Digite a idade do doador: ');
let idade = num;

if (idade >= 18 && idade <= 67) {
	console.log('Pode doar sangue!');
} else {
	console.log('Não pode doar sangue!!!');
}
