var nome = "hickreis"

var notaDoPrimeiroBimestre = 9.92
var notaDoSegundoBimestre = 4.45
var notaDoTerceiroBimestre = 8.72
var notaDoQuartoBimestre = 2.35

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(2) //Para exibir apenas 2 casas decimais colocar o nome da variavel seguido de .toFixed abre parenteses e coloca o numero de casas

console.log("Bem vindo " + nome)
console.log(notaFixada)