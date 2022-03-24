<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 08</title>
    <link rel="stylesheet" href="aula08/style.css">
</head>
<body>
    <div class="container">
        <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-super-trunfo.png" class="page-logo"
            alt="">
        <h1 class="page-title">Super Trunfo</h1>
        <button onclick="sortearCarta()" id="btnSortear">Sortear carta</button>
        <form id="form">
            <h2>Escolha o seu atributo</h2>
            <div class="wrapper">
                <div>
                    <div id="carta-jogador">
                        <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
                            style=" width: inherit; height: inherit; position: absolute;">
                        <h3></h3>
                    </div>
                </div>
                <div>
                    <div id="carta-maquina" class="carta"><img
                            src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"
                            style=" width: inherit; height: inherit; position: absolute;"></div>
                </div>
            </div>
            <button class="button-jogar" type="button" id="btnJogar" onclick="jogar()" disabled="false">Jogar</button>
            <div id="resultado"></div>
        </form>
    </div>
    <script src="aula08/index2.js"></script>
</body>
</html>