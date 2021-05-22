

let distancia = 10
let velocidade = 120

//sabe-se que velocidade = distancia / tempo  ---> tempo = distancia / velocidade

 let tempo = distancia / velocidade

if(tempo >= 1){
    console.log("O tempo para realizar a viagem é: " +tempo + " minutos");
}else{
    console.log("O tempo para realizar a viagem é:" +tempo*60 +" minutos");
}