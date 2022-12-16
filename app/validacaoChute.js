function validacaoChute(chute){
    const numero = +chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido: Não é um número. </div>';
        return
    }

    if (numeroForaAlcance(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fora do valor de ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class ="btn-restart">Jogar novamente!</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número é menor <i class="fa-solid fa-angles-down"></i></div>
        `
    } else{
        elementoChute.innerHTML += `
        <div>O número é maior <i class="fa-solid fa-angles-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForaAlcance(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})