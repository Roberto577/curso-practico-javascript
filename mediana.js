const btnAgregar = document.getElementById('btnAgregar');
const btnCalcular = document.getElementById('btnCalcular');
const fragment = document.createDocumentFragment();
let lista = document.querySelector('.lista');
let resultado = document.querySelector('.resultado');

let listNumber = [];

btnAgregar.addEventListener('click', (e) => {
    e.preventDefault();

    const inputNumber = parseInt(document.getElementById("inputNumber").value);
    listNumber.push(inputNumber);
    console.log(listNumber);

    mostrarDatos();

    document.getElementById("inputNumber").value = "";
});



btnCalcular.addEventListener('click', (e) => {
    let mediana;

    e.preventDefault();    

    //Ordena la lista de menor a mayor
    ordenarLista(listNumber);

    //Mitadlista me da el lugar del objeto
    let mitadLista = Math.floor(listNumber.length / 2);


    if(esPar(listNumber.length)){
        //Mediana par
        //Toma el primer valor de la mediana
        const elemento1 = listNumber[mitadLista - 1];
        console.log(elemento1);
        //Toma el siguente resultado de la mediana
        const elemento2 = listNumber[mitadLista];
        console.log(elemento2);
    
        const promedioElementos1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    
        mediana = promedioElementos1y2;
    }else{
        //Mediana inpar
        //Me devuelve el valor que esta en esa posición
        mediana = listNumber[mitadLista];
    }

    const totalTexto = document.createElement('p');
    totalTexto.textContent = `La mediana de los ${listNumber.length} números anteriores es: ${mediana}`;
    fragment.appendChild(totalTexto);

    resultado.appendChild(fragment);
})

function mostrarDatos() {
    lista.innerHTML = '';
    listNumber.forEach(element => {
        const datoLista = document.createElement('li');
        datoLista.textContent = element;
        fragment.appendChild(datoLista);
    })
    lista.appendChild(fragment);
}

function ordenarLista(lista){
    lista.sort(comparacion);

    function comparacion(a,b){
        return a - b;
    }
}

function calcularMediaAritmetica(lista){

//Suma los parametros
const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
);

const promedioLista = sumaLista / lista.length;

return promedioLista;
}

function esPar(numero){
    //modulo de dos es cero
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}