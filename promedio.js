function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
// for(let i = 0; i < lista.length; i++){
//     //sumalista1 es cero y se suma la posicion 0 que en este caso seria 100
//     sumaLista = sumaLista + lista[i]
// }

//.reduce acorta a un solo valor, de izquierda a derecha, 
//en este caso sumar, pero puede ser lo que la funcion diga

const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
);

const promedioLista = sumaLista / lista.length;

return promedioLista;
}