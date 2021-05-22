/*  8 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

- Se a media for igual ou maior que 7 - Aprovado
- Se a media for maior e igual a cinco e menor que 7 - Recuperação
- Se a media for menor que 5 - Reprovado
*/

let nota1 = 10
let nota2 = 10
let nota3 = 10

let media = (nota1+nota3+nota3) / 3;

if(media >=7){
    console.log("Aluno Aprovado")
}
else if(media === 5){
    console.log("Aluno de Recuperação")
}
else(media < 5)
    console.log("Aluno Reprovado")
