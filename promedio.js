//Variables
const btnAgregar = document.getElementById('btnAgregar');
const btnCalcular = document.getElementById('btnCalcular');
const fragment = document.createDocumentFragment();
let lista = document.querySelector('.lista');
let resultado = document.querySelector('.resultado');



let listNumbers = [];

btnAgregar.addEventListener('click', (e) => {
    e.preventDefault();
    const inputNumber = parseInt(document.getElementById("inputNumber").value);
    listNumbers.push(inputNumber);
    
    mostrarDatos();

    document.getElementById("inputNumber").value = "";
    
    
});

btnCalcular.addEventListener('click', e =>{
    e.preventDefault();
    const total = calcularMediaAritmetica(listNumbers).toFixed(1);

    const totalTexto = document.createElement('p');
    totalTexto.textContent = `El promedio de los ${listNumbers.length} números anteriores es: ${total}`;
    fragment.appendChild(totalTexto);

    resultado.appendChild(fragment);
});


function mostrarDatos() {
    lista.innerHTML = '';
    listNumbers.forEach(element => {
        const datoParrafo = document.createElement('li');
        datoParrafo.textContent = element;
        fragment.appendChild(datoParrafo);
    });
    
    lista.appendChild(fragment);
}


function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}