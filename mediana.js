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


const lista1 = [
    100,
    500,
    150000,
    900,
    4000000
];


//Ordena la lista de menor a mayor
ordenarLista(lista1);
console.log(lista1);

//parseInt fuerza el resultado a un numero entero
//Mitadlista me da el lugar del objeto
const mitadLista1 = parseInt(lista1.length / 2);



function esPar(numero){
    //modulo de dos es cero
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if(esPar(lista1.length)){
    //Mediana par
    //Toma el primer valor de la mediana
    const elemento1 = lista1[mitadLista1 - 1];
    //Toma el siguente resultado de la mediana
    const elemento2 = lista1[mitadLista1];

    const promedioElementos1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElementos1y2;
}else{
    //Mediana inpar
    //Me devuelve el valor que esta en esa posición
    mediana = lista1[mitadLista1];
}