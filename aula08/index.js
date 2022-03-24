var carta1 = {
    nome: "bulbasauro",
    imagem: "https://e7.pngegg.com/pngimages/984/841/png-clipart-bulbasaur-bulbasaur-pokemon-thumbnail.png",
    atributos: {
        ataque: 8,
        defesa: 7,
        magia: 5
    }
}

var carta2 = {
    nome: "charmander",
    imagem: "https://e7.pngegg.com/pngimages/129/305/png-clipart-charmander-pikachu-pokemon-go-pikachu-orange-cartoon-thumbnail.png",
    atributos: {
        ataque: 9,
        defesa: 6,
        magia: 7
    }
}

var carta3 = {
    nome: "squirtle",
    imagem: "http://4.bp.blogspot.com/-YKUjNoiUvWY/VkiRGEnBG4I/AAAAAAAAUxo/V4pOzIa-ADs/s1600/Squirtle.png",
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

    //exibirOpcoes()
    exibirCartaJogador()
}

// function exibirOpcoes() {
//     var opcoes = document.getElementById("opcoes")
//     var opcoesTexto = ""
// 
//     for (var atributo in cartaJogador.atributos) {
//         opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
//         //console.log(atributo)
//     }
// 
//     opcoes.innerHTML = opcoesTexto
// }

function obterAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo")
    for (var i = 0 ; i < radioAtributos.length ; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    // divCartaJogador.style.backgroundImage= "url(" + cartaJogador.imagem +")"
    divCartaJogador.style.backgroundImage= `url(${cartaJogador.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
        //console.log(atributo)
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    // divCartaJogador.style.backgroundImage= "url(" + cartaJogador.imagem +")"
    divCartaMaquina.style.backgroundImage= `url(${cartaMaquina.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    
    var opcoesTexto = ""
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
        //console.log(atributo)
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function jogar() {
    var atributoSelecionado = obterAtributoSelecionado()
    var elementoResultado = document.getElementById("resultado")
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if (valorCartaJogador > valorCartaMaquina) {
        //Ganhou
        //elementoResultado.innerHTML = "Você venceu !!!"
        elementoResultado.innerHTML = "<p class='resultado-final'>Você venceu !!!</p>"
    } else if (valorCartaJogador < valorCartaMaquina) {
        //Perdeu
        //elementoResultado.innerHTML = "Você perdeu !!!"
        elementoResultado.innerHTML = "<p class='resultado-final'>Você venceu !!!</p>"
    } else {
        //Empatou
        //elementoResultado.innerHTML = "Empate !!!"
        elementoResultado.innerHTML = "<p class='resultado-final'>Você venceu !!!</p>"
    }

    document.getElementById("btnJogar").disabled = true
    exibirCartaMaquina()
    //console.log(cartaMaquina)
    //console.log(atributoSelecionado)
    //console.log(cartaJogador.atributos[atributoSelecionado])    
}
// console.log(cartaMaquina)