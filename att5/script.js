var visor = document.getElementById('visor');

var valorAtual = '';
var valorAnterior = '';
var operacaoAtual = '';

function atualizarVisor() {
    if (valorAtual === '') {
        visor.innerText = '0';
    } else {
        visor.innerText = valorAtual;
    }
}

var botoesNumeros = document.getElementsByClassName('numero');

for (var i = 0; i < botoesNumeros.length; i++) {
    botoesNumeros[i].onclick = function () {
        var numeroClicado = this.innerText;

        if (valorAtual === '0') {
            valorAtual = numeroClicado;
        } else {
            valorAtual = valorAtual + numeroClicado;
        }

        atualizarVisor();
    };
}

var botoesOperacoes = document.getElementsByClassName('operacao');

for (var i = 0; i < botoesOperacoes.length; i++) {
    botoesOperacoes[i].onclick = function () {
        if (valorAtual === '') {
            return;
        }

        if (valorAnterior !== '') {
            realizarCalculo();
        }

        operacaoAtual = this.innerText;
        valorAnterior = valorAtual;
        valorAtual = '';
    };
}

document.getElementById('igual').onclick = function () {
    realizarCalculo();
};

document.getElementById('limpar').onclick = function () {
    valorAtual = '';
    valorAnterior = '';
    operacaoAtual = '';
    atualizarVisor();
};

function realizarCalculo() {
    var resultado = 0;

    var anterior = Number(valorAnterior);
    var atual = Number(valorAtual);

    if (operacaoAtual === '+') {
        resultado = anterior + atual;
    }
    else if (operacaoAtual === '-') {
        resultado = anterior - atual;
    }
    else if (operacaoAtual === '*') {
        resultado = anterior * atual;
    }
    else if (operacaoAtual === '/') {
        if (atual === 0) {
            visor.innerText = "Erro";
            valorAtual = '';
            valorAnterior = '';
            operacaoAtual = '';
            return;
        }
        resultado = anterior / atual;
    }
    else {
        return;
    }

    valorAtual = String(resultado);
    operacaoAtual = '';
    valorAnterior = '';
    atualizarVisor();
}