var listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"]
//elemento             1              2             3
//Primeiro elemento com indice 0

// var filme1 = "Yesterday"
// var filme2 = "A chegada"
// var filme3 = "Escola de Rock"

listaFilmes.push("Harry Potter")

// document.write("<p>" + filme1 + "</p>")
// document.write("<p>" + filme2 + "</p>")
// document.write("<p>" + filme3 + "</p>")

// document.write("<p>" + listaFilmes[0] + "</p>")
// document.write("<p>" + listaFilmes[1] + "</p>")
// document.write("<p>" + listaFilmes[2] + "</p>")
// document.write("<p>" + listaFilmes[3] + "</p>")

// for ([inicialização]; [condição]; [expressão final])
for ( var indice = 0; indice<listaFilmes.length; indice++) {
    document.write("<p>" + listaFilmes[indice] + "</p>")
}