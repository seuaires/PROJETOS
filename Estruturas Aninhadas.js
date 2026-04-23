// Estruturas condicionais aninhada

let presenca = 80;
let media = 4.3;

if(presenca >= 75){
    if(media >= 7){
        console.log("Discente Aprovado");
    } else{
        console.log("Discente Reprovado por nota");
    }
} else{
    console.log("Discente Reprovado por presença");
}