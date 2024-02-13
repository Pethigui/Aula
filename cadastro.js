function mudarElemento(ident){
    document.getElementById(ident).style.color = "rgb(32, 138, 67)";
    document.getElementById(ident).style.fontSize = "20px"
}

function voltarElemento(ident){
    document.getElementById(ident).style.color = "black";
    document.getElementById(ident).style.fontSize = "16px"
}


function mudarBtn(){
    document.getElementById('nomebtn').style.color = "white";
    document.getElementById('btnCadastro').style.backgroundColor = "black";
    document.getElementById('nomebtn').style.fontSize = "20px";
}

function voltarBtn(){
    document.getElementById('nomebtn').style.color = "black";
    document.getElementById('btnCadastro').style.backgroundColor = "rgb(32, 138, 67)";
    document.getElementById('nomebtn').style.fontSize = "16px";
}
