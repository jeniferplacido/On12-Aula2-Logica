//3 - Crie um algoritmo que leia o valor de um jantar, 
//calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorJantar = 180.00
let comissao = valorJantar *(10/100)
let totalParaPagar = valorJantar + comissao

console.log("O valor total á pagar com a comissão do garçom é  R$: "+totalParaPagar + " reais")
