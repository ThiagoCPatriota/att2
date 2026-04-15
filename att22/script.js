document.getElementById('formChumbo').addEventListener('submit', function (event) {
    event.preventDefault();

    const volume = parseFloat(document.getElementById('volumeSangue').value);
    const chumbo = parseFloat(document.getElementById('totalChumbo').value);

    const concentracao = chumbo / volume;

    const divResultado = document.getElementById('resultado');
    divResultado.style.display = 'block';

    if (concentracao > 10) {
        divResultado.innerHTML = `⚠️ ALERTA: Nível Tóxico!<br><br>
                                    Concentração: <strong>${concentracao} g/L</strong>.<br>
                                    O valor está acima do limite seguro.`;
    } else {
        divResultado.innerHTML = `✅ Nível Seguro.<br><br>
                                    Concentração: <strong>${concentracao} g/L</strong>.<br>
                                    O valor está dentro do limite aceitável.`;
    }


});

let pares = [2, 4, 6, 8, 10];
for (let i = 0; i < pares.length; i++) {
    console.log(pares[i]);
}

for (let item of pares) {
    console.log(item);
};

let soma = 0;
pares.forEach(function (numero) {
    soma += numero;
});