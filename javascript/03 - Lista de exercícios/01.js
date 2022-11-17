const nota1 = 7;
const nota2 = 7;
const nota3 = 7;


media = (nota1 + nota2 + nota3) / 3;

if(media<5){
    console.log("Reprovado");

} else if (5 <= media && media <= 7){
    console.log("Recuperação");

} else{
    console.log("Passou de semestre");
}