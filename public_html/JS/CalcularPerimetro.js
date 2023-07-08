
function calcularPerimetro() {
    var radio = parseFloat(document.getElementById('radio').value);
    var perimetro = 2 * Math.PI * radio;
    document.getElementById('resultado').innerHTML = 'El perimetro del circulo es: ' + perimetro.toFixed(2);
}



