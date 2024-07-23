<!DOCTYPE html>
<html lang="pt-br">
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

        <?php
            echo '<p>';

            echo 'Nome: ';
            echo $_POST['nome'];
            echo '<br>';

            echo 'Email: ';
            echo $_POST['email'];
            echo '<br>';

            echo 'CPF: ';
            echo $_POST['cpf'];
            echo '<br>';

            echo 'Data de Nascimento: ';
            echo $_POST['dtNascimento'];
            echo '<br>';

            echo 'Usuário: ';
            echo $_POST['usuario'];
            echo '<br>';

            echo 'Senha: ';
            echo $_POST['senha'];

            echo '</p>';
        ?> 

    </div>  
</body>
</html>

