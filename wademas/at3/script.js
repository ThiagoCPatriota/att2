function somar() {
    var num1 = window.prompt("Digite o primeiro número:");
    var num2 = window.prompt("Digite o segundo número:");
    var resultado = parseFloat(num1) + parseFloat(num2);
    window.alert("O resultado é: " + resultado);
}

function SomarVariosNumeros() {
    var resultado = 0;
    var num1 = 0;
    var num = 'sim';
    while (num == "sim") {
        num1 = window.prompt("Digite um número:");
        resultado = parseFloat(num1) + parseFloat(resultado);
        num = window.prompt("Deseja adicionar outro número? (sim/não)");
    }
    window.alert("O resultado é: " + resultado);
}

