function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito)
    } else {
        console.error("Endereço de filme invlido !")
    }
    document.getElementById("filme").value = ""
    // console.log("clicou")
}

function listarFilmesNaTela(filme) {
    console.log(filme)
    var elementoFilmeFavorito = "<img src=" + filme + ">"
    var elementoListaFilmes = document.getElementById("listaFilmes")
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito
}

//Adicionar um botão para remover
//Adiconar o nome junto com a imagem
//Criar uma lista