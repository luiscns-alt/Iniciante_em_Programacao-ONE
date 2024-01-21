function calcularIMC(altura, peso) {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
}

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1);
    }
}

function converterDolarParaReal(valorEmDolar) {
    const cotacaoDolar = 4.80;
    const valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}

function calcularAreaPerimetroRetangular(altura, largura) {
    const area = altura * largura;
    const perimetro = 2 * (altura + largura);
    console.log(`Área: ${area.toFixed(2)} metros quadrados | Perímetro: ${perimetro.toFixed(2)} metros`);
}

function calcularAreaPerimetroCircular(raio) {
    const pi = 3.14;
    const area = pi * (raio ** 2);
    const perimetro = 2 * pi * raio;
    console.log(`Área: ${area.toFixed(2)} metros quadrados | Perímetro: ${perimetro.toFixed(2)} metros`);
}

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

console.log("IMC:", calcularIMC(1.75, 70));
console.log("Fatorial de 5:", calcularFatorial(5));
console.log("Conversão de Dólar para Real:", converterDolarParaReal(50));
calcularAreaPerimetroRetangular(5, 10);
calcularAreaPerimetroCircular(3);
mostrarTabuada(7);
