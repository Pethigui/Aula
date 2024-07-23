<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="Cadastro.css">
    <link rel="shortcut icon" href="imagens/Logo.jpg" type="image/x-icon">
    <title>Cadastro if bet</title>
</head>

<body>
    <video autoplay muted loop id="myVideo">
        <source src="imagens/VídeoCadastro.mp4">
    </video>
    
        <div class="formulario">
            <h2 style="color: rgb(32, 138, 67); margin-top: 10px;">Criar Conta</h2>

            <script src="cadastro.js"></script>
            
            <form method="post" action="dadosPost.php">
                <div class="dados">
                    <label for="nome" id="nome"> Nome Completo</label>
                    <input type="text" name="nome" id="nome" placeholder="Digite o seu nome completo" onfocus="mudarElemento('nome');" onblur="voltarElemento('nome');" >
                </div>

                <div class="dados">
                    <label for="email" id="email">E-mail</label>
                    <input type="text" name="email" id="emailInput" placeholder="Digite o seu email" onfocus="mudarElemento('email');" onblur="voltarElemento('email');">
                    <p id="resultado"></p>

                <div class="dados">
                    <label for ="cpf" id="cpf"> CPF</label>
                    <input type="number" name="cpf" id="cpfInput" placeholder="Digite seu numero de CPF"  onfocus="mudarElemento('cpf');" onblur="voltarElemento('cpf');">
                    <p id="resultadocpf"></p>
                </div>
                

                <div class="dados">
                    <label for ="data de nascimento" id="data"> Data de nascimento</label>
                    <input type="date" name="dtNascimento" id="data" placeholder="Digite seu nome completo" onfocus="mudarElemento('data');" onblur="voltarElemento('data');">
                </div>

                <div class="dados">
                    <label for ="usuario" id="usuario"> Usuario</label>
                    <input type="text" name="usuario" id="usuario" placeholder="Crie um nome de usuario" onfocus="mudarElemento('usuario');" onblur="voltarElemento('usuario');">
                </div>

                <div class="senha">
                    <label for="senha" id="senha">Senha</label>
                    <input type="password" name="senha" id="senha" placeholder="Digite sua senha" onfocus="mudarElemento('senha');" onblur="voltarElemento('senha');">
                </div>

                <div class="senha">
                    <label for="Confirmar senha" id="Confirmar senha">Confirmar Senha</label>
                    <input type="password" id="Confirmar senha" placeholder="Confirme sua senha" onfocus="mudarElemento('Confirmar senha');" onblur="voltarElemento('Confirmar senha');">
                </div>

                <div class="dados">
                    <input type="submit" id="btnCadastro" value="Cadastra-se" onmouseover="mudarBtn();" onmouseout="voltarBtn();"><a id="nomebtn" href="dados.php"></a></button>
                </div>

            </form>
        </div>
  
</body>
</html>
