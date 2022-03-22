//                       chave  : valor
var joao = {nome:"Joao", vitorias:1 , empates:2, derrotas:3, pontos:2}
var fernando = {nome:"Fernando", vitorias:8 , empates:7, derrotas:6, pontos:5}

// console.log(joao)
// console.log(fernando.derrotas)

function calcularPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

joao.pontos = calcularPontos(joao)
fernando.pontos = calcularPontos(fernando)

// console.log(joao)
// console.log(fernando)

var jogadores = [joao, fernando]

function exibirJogadoresNaTela(jogadores) {
    var elemento = ""
    for (var i = 0; i < jogadores.length; i++){
        elemento += "<tr>"
        elemento += "<td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento
}

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calcularPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calcularPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calcularPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

exibirJogadoresNaTela(jogadores)