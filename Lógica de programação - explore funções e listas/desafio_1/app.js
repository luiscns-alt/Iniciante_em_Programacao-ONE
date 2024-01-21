document.querySelector('#titulo').innerText = 'Hora do Desafio';

function exibirMensagem() {
    console.log('O botão foi clicado');
}

document.getElementById('botaoConsole').addEventListener('click', exibirMensagem);

function exibirAlerta() {
    alert('Eu amo JS');
}

document.querySelector('button').addEventListener('click', exibirAlerta);

function obterCidadeEExibirAlerta() {
    var cidade = prompt('Digite o nome de uma cidade do Brasil:');

    if (cidade === null || cidade === '') {
        alert('Você não inseriu o nome de uma cidade.');
    } else {
        alert(`Estive em ${cidade} e lembrei de você.`);
    }
}

document.querySelector('button').addEventListener('click', obterCidadeEExibirAlerta);

function obterNumerosEExibirSoma() {
    var numero1 = parseFloat(prompt('Digite o primeiro número:'));
    var numero2 = parseFloat(prompt('Digite o segundo número:'));

    if (!isNaN(numero1) && !isNaN(numero2)) {
        var soma = numero1 + numero2;

        alert(`A soma de ${numero1} e ${numero2} é: ${soma}`);
    } else {
        alert('Por favor, insira números válidos.');
    }
}

document.querySelector('button').addEventListener('click', obterNumerosEExibirSoma);