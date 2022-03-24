var carta1 = {
    nome: "bulbasauro",
    atributos: {
        ataque: 8,
        defesa: 7,
        magia: 5
    }
}

var carta2 = {
    nome: "charizard",
    atributos: {
        ataque: 9,
        defesa: 6,
        magia: 7
    }
}

var carta3 = {
    nome: "squirtle",
    atributos: {
        ataque: 7,
        defesa: 9,
        magia: 7
    }
}

var cartas = [carta1, carta2, carta3]

var cartaMaquina = 0
var cartaJogador = 0

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random()*3)
    cartaMaquina = cartas[numeroCartaMaquina]
    //console.log(cartaMaquina)

    var numeroCartaJogador = parseInt(Math.random()*3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random()*3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    exibirOpcoes()
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
        //console.log(atributo)
    }

    opcoes.innerHTML = opcoesTexto
}

function obterAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo")
    for (var i = 0 ; i < radioAtributos.length ; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obterAtributoSelecionado()
    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if (valorCartaJogador > valorCartaMaquina) {
        //Ganhou
        elementoResultado.innerHTML = "Você venceu !!!"
    } else if (valorCartaJogador < valorCartaMaquina) {
        //Perdeu
        elementoResultado.innerHTML = "Você perdeu !!!"
    } else {
        //Empatou
        elementoResultado.innerHTML = "Empate !!!"
    }

    console.log(cartaMaquina)
    //console.log(atributoSelecionado)
    //console.log(cartaJogador.atributos[atributoSelecionado])    
}
// console.log(cartaMaquina)