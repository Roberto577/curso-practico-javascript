const lista1 = [
1,
2,
3,
2,
2,
3,
1,
5,
2
];

const lista1Count = {};

//map nos ayuda a recorrer
lista1.map(
    //anonima
    function(elemento){
        //Si encuentra un elemento lo va a sumar con el siguente que encuentre lo almacena en otra lista
        if(lista1Count[elemento]){
        lista1Count[elemento] += 1;
        }else{
        lista1Count[elemento] = 1;
        }
    }
);

//Almacena en un array nuestro objeto
// y... .sort ordena los elementos por la segunda posicion(cantidad de veces que se repite)
const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB){
        //Compara la segunda posicion
        return elementoA[1] - elementoB[1];
    }
);

//Me almacaneca el valor del ultimo array
const moda = lista1Array[lista1Array.length - 1];