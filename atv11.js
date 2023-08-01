let periodo = prompt("Digite em que periodo você estuda: 'M' para Matutino, 'V' para Vespertino ou 'N' para Noturno.")

periodo = periodo.toUpperCase();

switch (periodo) {
  case "M":
    alert("Bom dia!");
    break;
  case "V":
    alert("Boa tarde!");
    break;
  case "N":
    alert("Boa noite!");
    break;
  default:
    alert("Valor inválido. Digite 'M' para matutino, 'V' para vespertino ou 'N' para noturno.");
    break;
}
