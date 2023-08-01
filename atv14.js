let num = parseInt(prompt('Digite um número: '));

if (isNaN(num)) {
  console.log('Entrada inválida!');
} else {
  let soma = 0;

  while (soma + num < 500 && num < 500) {
    soma += num;
    num *= 3;
  }

  console.log('O último valor obtido é: ' + num);
}
