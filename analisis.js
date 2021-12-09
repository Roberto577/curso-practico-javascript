//Creamos un array que almacene solo los salarios de las personas
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

//Nueva constante que almacena los valores anteriores de forma ordenada
const salarioColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

//Si numero es par retorna true
function esPar(numero){
    return (numero % 2 === 0);
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

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }else{
        //variable que almacena la persona que se encuentra justo en la mitad
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


//Separar al 10% mas rico

const medianaGaneralCol = medianaSalarios(salarioColSorted);


//El 90% de la población
const spliceStart = (salarioColSorted.length * 90) / 100;
//Le restamos y almacena lo que sobra
const spliceCount = salarioColSorted.length - spliceStart;

//Splice (PrimerParametro(lugar de corte), SegundoParametro(Cuantos vas a cortar))
const salariosColTop10 = salarioColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({medianaGaneralCol,medianaTop10Col,});