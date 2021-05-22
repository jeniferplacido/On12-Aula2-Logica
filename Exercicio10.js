//10 - Crie uma variavel que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

let anoNascimento = 1990
let anoAtual  = 2021

let idade = anoAtual - anoNascimento

if(idade >=18){
    console.log("Você é maior de idade")
}
else{
    console.log("Você é menor de idade")
}