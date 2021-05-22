//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
//assim como a quantidade de dias pelos quais o carro foi alugado. 
//Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let kmCarro = 165
let diasCarro = 10

let preçoKm = kmCarro*0.15
let preçoDias = diasCarro*60.00

let preçoAluguel = preçoKm + preçoDias
console.log("O valor total a pagar pelo aluguel do carro é r$: "+preçoAluguel + " reais.")
