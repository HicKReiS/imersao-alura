var numeroSecreto = parseInt(Math.random() * 11)
var tentativas = 3

function Recomecar() {
    tentativas = 3
    numeroSecreto = parseInt(Math.random() * 11)
    resultado.innerHTML = ""
}

function Chutar() {
    // for ([inicialização]; [condição]; [expressão final])
    // while (condição) {}
    while (tentativas > 0) {
        tentativas--
        var chute = parseInt(document.getElementById("valor").value)
        var resultado = document.getElementById("resultado")
        if (chute == numeroSecreto) {
            resultado.innerHTML = "Você acertou !!!"
            break
        } else if (chute > 10 || chute < 0) {
            tentativas = tentativas + 1
            resultado.innerHTML = "Você deve chutar um numero entre 0 a 10. Você ainda possui " + tentativas + " tentativas"
            break
        } else {
            if (chute > numeroSecreto) {
                resultado.innerHTML = "Errou , o numero é menor. Você ainda possui " + tentativas + " tentativas"
                break
            } else {
                resultado.innerHTML = "Errou , o numero é maior. Você ainda possui " + tentativas + " tentativas"
                break
            }
        }
    }
    if (tentativas == 0) {
        resultado.innerHTML = "Você perdeu o numero era " + numeroSecreto + " !!!"
    }
}