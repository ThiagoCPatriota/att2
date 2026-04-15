var botao = document.querySelector("button");
var tabela = document.querySelector("table");

botao.addEventListener("click", function (event) {
    location.reload();
});

function DesenvolverTabela() {
    let elemetosDaTabela = '';
    for (var i = 0; i < 101; i++) {
        elemetosDaTabela += '<tr>';
        for (var j = 0; j < 1001; j++) {
            var numeroAleatorio = Math.floor(Math.random() * 100);
            var classe = ''
            if (numeroAleatorio % 2 === 0) {
                classe = 'par';
            } else {
                classe = 'impar';
            }
            elemetosDaTabela += '<td class="' + classe + '">' + numeroAleatorio + '</td>';
        }
        elemetosDaTabela += '</tr>';
    }
    tabela.innerHTML = elemetosDaTabela;

}

DesenvolverTabela();