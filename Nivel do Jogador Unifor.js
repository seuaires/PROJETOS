
//Nivel do Jogador

let pontuacao = 10000;

if(pontuacao < 1000){
    console.log("Jogador Iniciante");
}else if(pontuacao >= 1000&& pontuacao <= 3000){
    console.log("Jogador Intermediario");
} else{
    console.log("Jogador Veterano");
}