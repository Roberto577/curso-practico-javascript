const btnAgregar = document.getElementById('btnAgregar');
const btnCalcular = document.getElementById('btnCalcular');
const fragment = document.createDocumentFragment();
let lista = document.querySelector('.lista');
let resultado = document.querySelector('.resultado');

let listNumber = [];
const listNumberCount = [];

btnAgregar.addEventListener('click', (e) => {
    e.preventDefault();

    const inputNumber = parseInt(document.getElementById("inputNumber").value);
    listNumber.push(inputNumber);
    console.log(listNumber);

    mostrarDatos();

    document.getElementById("inputNumber").value = "";
})

btnCalcular.addEventListener('click', (e) => {
    e.preventDefault();

    listNumber.map(
        //anonima
        function(elemento){
            //Si encuentra un elemento lo va a sumar con el siguente que encuentre lo almacena en otra lista
            if(listNumberCount[elemento]){
            listNumberCount[elemento] += 1;
            }else{
            listNumberCount[elemento] = 1;
            }
        }
    );
    console.log(listNumber);

    //Almacena en un array nuestro objeto
    // y... .sort ordena los elementos por la segunda posicion(cantidad de veces que se repite)
    const lista1Array = Object.entries(listNumberCount).sort(
        function (elementoA, elementoB){
            //Compara la segunda posicion
            return elementoA[1] - elementoB[1];
        }
    );

    //Almacena el valor del ultimo array
    const moda = lista1Array[lista1Array.length - 1];

    console.log(lista1Array);

    const totalTexto = document.createElement('p');
    totalTexto.textContent = `Cantidades: ${lista1Array}
                                La moda es: ${moda}`;
    fragment.appendChild(totalTexto);

    resultado.appendChild(fragment);
});


function mostrarDatos() {
    lista.innerHTML = '';
    listNumber.forEach(element => {
        const datoLista = document.createElement('li');
        datoLista.textContent = element;
        fragment.appendChild(datoLista);
    });
    lista.appendChild(fragment);
};