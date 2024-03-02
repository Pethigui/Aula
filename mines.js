var saldo = 0.00;
var aposta = 0.00;
var saque = 0.00;
var bonus = 0;
var contador = 0;

// Depósito

function deposito() {
    saldo = saldo + 50.00;
    document.getElementById('saldoAtual').innerHTML = "R$ " + saldo.toFixed(2);
}

function mudarDeposito(){
    document.getElementById('deposito').style.backgroundColor = "black";
}

function voltarDeposito(){
    document.getElementById('deposito').style.backgroundColor = "aliceblue";
}


// Aposta

function aumentarAposta() {
    aposta = aposta + 10.00
    document.getElementById('valorAposta').innerHTML = "R$ " + aposta.toFixed(2);
}

function diminuirAposta() {
    aposta = aposta - 10.00
    document.getElementById('valorAposta').innerHTML = "R$ " + aposta.toFixed(2);
}

function apostar() {
    saldo = saldo - aposta;
    saque = aposta
    aposta = 0.00
    document.getElementById('saldoAtual').innerHTML = "R$ " + saldo.toFixed(2);
    document.getElementById('valorAposta').innerHTML = "R$ " + aposta.toFixed(2);
    document.getElementById('valorSaque').innerHTML = "R$ " + saque.toFixed(2);
}

function mudarAposta(id){
    if (id == 1){
        document.getElementById('ap1').style.backgroundColor = "aliceblue";
        document.getElementById('ap1').style.color = "black";
    } else if (id == 2){
        document.getElementById('ap2').style.backgroundColor = "aliceblue";
        document.getElementById('ap2').style.color = "black";
    } else if (id == 3){
        document.getElementById('ap3').style.backgroundColor = "aliceblue";
        document.getElementById('ap3').style.color = "black";
    }
}

function voltarAposta(id){
    if (id == 1){
        document.getElementById('ap1').style.backgroundColor = "rgb(22, 22, 22)";
        document.getElementById('ap1').style.color = "aliceblue";
    } else if (id == 2){
        document.getElementById('ap2').style.backgroundColor = "rgb(22, 22, 22)";
        document.getElementById('ap2').style.color = "aliceblue";
    } else if (id == 3){
        document.getElementById('ap3').style.backgroundColor = "rgb(22, 22, 22)";
        document.getElementById('ap3').style.color = "aliceblue";
    }
}

// Saque

function sacar() {
    saldo = saldo + saque;
    saque = 0
    document.getElementById('saldoAtual').innerHTML = "R$ " + saldo.toFixed(2);
    document.getElementById('valorSaque').innerHTML = "R$ " + saque.toFixed(2);
}

function mudarSaque(){
    document.getElementById('saque').style.backgroundColor = "aliceblue";
    document.getElementById('saque').style.color = "black";
}

function voltarSaque(){
    document.getElementById('saque').style.backgroundColor = "rgba(29, 110, 74, 0.644)";
    document.getElementById('saque').style.color = "aliceblue";
}


// Jogo

document.addEventListener('DOMContentLoaded', function () {
    const campo = document.getElementById('campo');
    const tamanho = 5;
    const minas = 5;
    bonus = Math.floor(Math.random() * 5) + 1;

    function criarCampo() {
        for (let i = 0; i < tamanho; i++) {
            for (let j = 0; j < tamanho; j++) {
                const celula = document.createElement('div');
                celula.className = 'celula';
                celula.dataset.row = i;
                celula.dataset.col = j;
                campo.append(celula);
            }
        }
    }

    function addMinas() {
        const celulas = document.querySelectorAll('.celula');
        const embaralhar = Array.from(celulas).sort(() => Math.random() - 0.5);
        const celulasEmbaralhadas = embaralhar.slice(0, minas);
        celulasEmbaralhadas.forEach(celula => celula.classList.add('mina'));
    }

    function revelarCelula(celula) {
        celula.classList.add('revelar');
        const forMina = celula.classList.contains('mina');
        if (forMina) {
            saque = 0;
            document.getElementById('valorSaque').innerHTML = "R$ " + saque.toFixed(2);
            alert('Fim de Jogo! Você atingiu uma mina.');
            reiniciarJogo();
        } else {
            contador = contador + 1;
            saque = saque * 1.1;
            document.getElementById('valorSaque').innerHTML = "R$ " + saque.toFixed(2);
            if (contador == bonus) {
                saque = saque * 2;
                document.getElementById('valorSaque').innerHTML = "R$ " + saque.toFixed(2);
            }
        }
    }

    function reiniciarJogo() {
        const celulas = document.querySelectorAll('.celula');
        celulas.forEach(celula => {
            celula.classList.remove('revelar', 'mina');
            celula.textContent = '';
        });
        addMinas();
    }

    criarCampo();
    addMinas();

    campo.addEventListener('click', function (event) {
        const clickCelulas = event.target;
        if (clickCelulas.classList.contains('celula') && !clickCelulas.classList.contains('revelar')) {
            revelarCelula(clickCelulas);
        }
    });

    document.getElementById('reset').addEventListener('click', reiniciarJogo);
});
