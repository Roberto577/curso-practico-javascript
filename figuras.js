//Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}


console.groupEnd();

//Código del triangulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function alturaTriangulo(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert("Triangulo Isosceles");
        const altura = Math.sqrt(lado1**2 - base **2 /4);
        alert("Altura " + altura);
        return altura;
    }
    else if(lado1 === lado2 && lado1 === base){
        alert("Triangulo Equilatero");
        const altura = Math.sqrt(lado1**2 - base **2 /4);
        alert("Altura " + altura);
        return altura;
    }
    else{
        alert("Triangulo Escaleno");
        const altura = Math.sqrt(lado1**2 - base **2 /4);
        alert("Altura " + altura);
        return altura;
    }
}

function areaTriangulo(base, altura){
    return (base * altura) /2;
}

console.groupEnd();


//Código del circulo
console.group("Círculos");


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

console.groupEnd();




//Interaccion con HTML
//Cuadrado

//Interaccion con los botones en HTML
function calcularPerimetroCuadrado(){
    //traemos el resultado del input
    //llamamos la funcion correspondiente
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
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
    alert(perimetro);
}

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("inputTrianguloLado1");
    const valor1 = Number(input1.value);

    const input2 = document.getElementById("inputTrianguloLado2");
    const valor2 = Number(input2.value);

    const input3 = document.getElementById("inputTrianguloBase");
    const valorBase = Number(input3.value);

    const altura = alturaTriangulo(valor1, valor2, valorBase);
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
    alert("Area " + area);
}

//Interaccion con HTML
//Círculo
function calcularDiametroCirculo(){
    const input1 = document.getElementById("inputCirculo");
    const valor1 = input1.value;

    const diametro = diametroCirculo(valor1);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const input1 = document.getElementById("inputCirculo");
    const valor1 = input1.value;

    const perimetro = perimetroCirculo(valor1);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input1 = document.getElementById("inputCirculo");
    const valor1 = input1.value;

    const area = areaCirculo(valor1);
    alert(area);
}