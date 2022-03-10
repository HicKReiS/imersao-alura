function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolar = parseFloat(valor);

    var ValorEmReal = valorEmDolar * 5;
    console.log(valor);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + ValorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}