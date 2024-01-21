function olaMundo() {
    console.log("Olá, mundo!");
}

function olaNome(nome) {
    console.log("Olá, " + nome + "!");
}

function dobroNumero(numero) {
    return numero * 2;
}

function mediaNumeros(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

function maiorNumero(a, b) {
    return a > b ? a : b;
}

function multiplicacaoPorSiMesmo(numero) {
    return numero * numero;
}

// Testando as funções
olaMundo();
olaNome("João");
console.log(dobroNumero(5));
console.log(mediaNumeros(10, 20, 30));
console.log(maiorNumero(15, 8));
console.log(multiplicacaoPorSiMesmo(4));
