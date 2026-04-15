
function verificar(event) {
    event.preventDefault();

    let caixaResultado = document.getElementById('resultado');
    let alertas = "";


    if (document.getElementById('erro1').checked) {
        alertas = alertas + "<li>Mova-se para uma área ventilada com extintores.</li>";
    }
    if (document.getElementById('erro2').checked) {
        alertas = alertas + "<li>Coloque os EPIs exigidos imediatamente.</li>";
    }
    if (document.getElementById('erro3').checked) {
        alertas = alertas + "<li>Conecte a bateria primeiro, depois ligue na tomada.</li>";
    }
    if (document.getElementById('erro4').checked) {
        alertas = alertas + "<li>Use guinchos ou carrinhos, NUNCA levante pelos cabos.</li>";
    }
    if (document.getElementById('erro5').checked) {
        alertas = alertas + "<li>Isole a bateria, pois há suspeita de vazamento/desgaste.</li>";
    }
    if (document.getElementById('erro6').checked) {
        alertas = alertas + "<li>Atenção: Bateria com defeito! Contate a manutenção.</li>";
    }
    if (document.getElementById('erro7').checked) {
        alertas = alertas + "<li>Traga o kit de controle de derramamentos para perto.</li>";
    }


    if (alertas === "") {

        caixaResultado.innerHTML = "OPERAÇÃO SEGURA: Tudo certo para o manuseio.";
    } else {

        caixaResultado.innerHTML = "ATENÇÃO: Ação Necessária!<ul>" + alertas + "</ul>";
    }


    caixaResultado.style.display = "block";
}
