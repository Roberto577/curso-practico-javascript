//Código del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}



//Código del triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function alturaTriangulo(lado1, base){
        const altura = Math.sqrt(lado1**2 - base **2 /4);
        return altura;
}

function areaTriangulo(base, altura){
    return (base * altura) /2;
}




//Código del circulo

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
    //Forma automatica de obtener diametro
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//area
function areaCirculo(radio){
    return (radio * radio) * PI;
}



//Interaccion con HTML
//Cuadrado

//Interaccion con los botones en HTML
function calcularPerimetroCuadrado(){
    //traemos el resultado del input
    //llamamos la funcion correspondiente
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    const resultado = document.getElementById("resultCuadrado");
    resultado.innerText = `El perimetro del cuadrado es: ${perimetro}`;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    const resultado = document.getElementById("resultCuadrado");
    resultado.innerText = `El area del cuadrado es: ${area}`;
}



//Interaccion con HTML
//Triángulo
function calcularPerimetroTriangulo(){
    const input = document.getElementById("inputTrianguloLado1");
    //Number()fuerza transformacion de string a number
    const valor1 = Number(input.value);

    const input1 = document.getElementById("inputTrianguloLado2");
    const valor2 = Number(input1.value);

    const input2 = document.getElementById("inputTrianguloBase");
    const baseTriangulo = Number(input2.value);

    const perimetro = perimetroTriangulo(valor1, valor2, baseTriangulo);
    
    const resultado = document.getElementById("resultTriangulo");
    resultado.innerText = `El perimetro del triangulo es: ${perimetro}`;
}

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("inputTrianguloLado1");
    const valor1 = Number(input1.value);

    const input3 = document.getElementById("inputTrianguloBase");
    const valorBase = Number(input3.value);

    const altura = alturaTriangulo(valor1,valorBase);

    const resultado = document.getElementById("resultTriangulo");
    resultado.innerText = `La altura del triangulo es: ${altura}`;
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputTrianguloLado1");
    const valor1 = Number(input1.value);

    const input2 = document.getElementById("inputTrianguloLado2");
    const valor2 = Number(input2.value);

    const input3 = document.getElementById("inputTrianguloBase");
    const valorBase = Number(input3.value);

    const altura = alturaTriangulo(valor1, valor2, valorBase);

    const area = areaTriangulo(valorBase, altura);
    
    const resultado = document.getElementById("resultTriangulo");
    resultado.innerText = `El área del triangulo es: ${area}`;
}

//Interaccion con HTML
//Círculo
function calcularDiametroCirculo(){
    const input1 = document.getElementById("inputCirculo");
    const valor1 = input1.value;

    const diametro = diametroCirculo(valor1);

    const resultado = document.getElementById("resultCirculo");
    resultado.innerText = `El diametro del circulo es: ${diametro}`;
}

function calcularPerimetroCirculo(){
    const input1 = document.getElementById("inputCirculo");
    const valor1 = input1.value;

    const perimetro = perimetroCirculo(valor1);

    const resultado = document.getElementById("resultCirculo");
    resultado.innerText = `El perimetro del circulo es: ${perimetro}`;
}

function calcularAreaCirculo(){
    const input1 = document.getElementById("inputCirculo");
    const valor1 = input1.value;

    const area = areaCirculo(valor1);

    const resultado = document.getElementById("resultCirculo");
    resultado.innerText = `El área del circulo es: ${area}`;
}