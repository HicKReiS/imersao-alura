var numeroSecreto = parseInt(Math.random() * 11)
function Chutar() {
    var chute = parseInt(document.getElementById("valor").value)
    var resultado = document.getElementById("resultado")
    if (chute == numeroSecreto) {
        resultado.innerHTML = "Você acertou !!!"
    } else if (chute > 10 || chute < 0) {
        resultado.innerHTML = "Você deve chutar um numero entre 0 a 10"
    } else {
        if (chute > numeroSecreto) {
            resultado.innerHTML = "Errou , o numero é menor."
        } else {
            resultado.innerHTML = "Errou , o numero é maior."
        }
    }
}