function mudarElemento(ident){
    document.getElementById(ident).style.color = "black";
    document.getElementById(ident).style.fontSize = "16px"
}

function voltarElemento(ident){
    document.getElementById(ident).style.color = "rgb(26, 204, 64)";
    document.getElementById(ident).style.fontSize = "12px"
}


function mudarBtn(){
    document.getElementById('btnCadastro').style.color = "rgb(26, 204, 64)";
    document.getElementById('btnCadastro').style.backgroundColor = "rgb(26, 204, 64)";
}

function voltarBtn(){
    document.getElementById('btnCadastro').style.color = "aliceblue";
    document.getElementById('btnCadastro').style.backgroundColor = "rgba(71, 255, 108, 0.473)";
}
