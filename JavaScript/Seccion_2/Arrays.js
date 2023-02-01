/*
    Un array es un objeto que contiene una colección ordenada de valores. 
    Cada valor se almacena en una posición específica dentro del array, y se puede acceder a estos 
    mediante un índice numérico que determina su posicion.

    Los arrays en JavaScript son muy versátiles y se utilizan para almacenar y manipular datos de varios tipos, 
    como números, cadenas, objetos, etc. 
    
    Se pueden crear arrays vacíos o con elementos iniciales, y se pueden modificar y acceder a los elementos 
    de un array mediante métodos y propiedades específicas.
*/

let colores = ["Azul", "Verde", "Naranja", "Rojo","Beige"];

console.log(colores);

//¿Que es iterar?: Iterar es el proceso de recorrer un conjunto de datos, como una lista o un array.

//Acceder a indices
    console.log(colores[0]);
    console.log(colores[1]);
    console.log(colores[2]);
    console.log(colores[3]);
    console.log(colores[4]);
    console.log(colores[5]);







//Modificar Indice
    console.log(colores);

    colores[1]="Rosado";
    console.log(colores);





/* *******   Metodos de Arrays   ******* */

//length: Retorna la longitid de un array.
    console.log(colores.length);


//push: Agrega elementos al final de un array.

    console.log(colores);

    colores.push("Blanco","Negro");
    console.log(colores);









//unshift: Agrega elementos al inicio de un array.
    console.log(colores);

    colores.unshift("Gris","Plateado");
    console.log(colores);







//pop: Elimina solo 1er elemento al final de un array.
    console.log(colores);

    let ultimoEliminado = colores.pop();
    console.log(ultimoEliminado);

    console.log(colores);








//shift: Elimina el solo 1er elemento al inicio de un array.
    let primeroEliminado = colores.shift();
    console.log(primeroEliminado);
    console.log(colores);





//index-of: Devuelve la posición de la primera aparición de un valor en un array. (Si no existe el valor retorna -1)
    console.log(colores.indexOf("Beige"));
    console.log(colores[5]);



/*  filter(filtrar): es una función de los arrays que permite filtrar los elementos 
    mediante una función de retorno booleana. 

    La función de retorno booleana se aplica a cada elemento del array y solo los elementos 
    para los cuales la función devuelve true se incluyen en el nuevo array resultante.

    En pocas palabras, este método crea un nuevo array con todos los elementos que 
    pasan la prueba implementada por la función dada.
*/

    //Ejemplo 1 (filter):
let numeros = [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1];

let numerosPares = numeros.filter(
    function(numeros) {
    // Funcion de retorno booleana, donde se evalua si el numero es par, 
    // en caso positivo filter retorna el numero.
        return numeros % 2 === 0;
        //return numeros % 2 === 1;
    }
);

console.log(numerosPares);



//Ejemplo 2 (filter):
let frutas = ["🍇","🍍","🍇","🍓","🍇","🍎","🍇"]; 
console.log(frutas);


// Crear un nuevo array llamado uvas y filtrar todos los elementos 
// del array frutas que sean "🍇".

let uvas = frutas.filter(
    function(frutas) {
        return frutas === "🍇";
    }
);

console.log(uvas);


//Obtener correos que terminan en "@gmail.com" con .filter() y .endsWith()

let correos = [
    "juanito@yahoo.com",
    "pedrito@gmail.com",
    "rubencito@aol.com",
    "juanito@yahoo.com",
    "pedrito@gmail.com",
    "rubencito@aol.com",
    "juanito@yahoo.com",
    "pedrito@gmail.com",
    "rubencito@aol.com",
    "juanito@yahoo.com",
    "pedrito@gmail.com",
    "rubencito@aol.com",
    "juanito@yahoo.com",
    "pedrito@gmail.com",
    "rubencito@aol.com",
    "juanito@yahoo.com",
    "pedrito@gmail.com",
    "rubencito@aol.com",
    "juanito@yahoo.com",
    "pedrito@gmail.com",
    "rubencito@aol.com",
];


let correosGmail = correos.filter(
    function(correos){
        return correos.endsWith("@gmail.com"); //Si el elemento termina con "@gmail.com"
    }
);

let correosAol = correos.filter(
    function(correos){
        return correos.endsWith("@aol.com"); //Si el elemento termina con "@aol.com"
    }
);

let correosYahoo = correos.filter(
    function(correos){
        return correos.endsWith("@yahoo.com"); //Si el elemento termina con "@yahoo.com"
    }
);




console.log(correosGmail);
console.log(correosYahoo);
console.log(correosAol);





// find(buscar): devuelve el valor del primer elemento del array que cumpla (retorne true) con la función definida. 
// Si ningún elemento cumple con la funcion (si retorna false), devuelve undefined.

let comidas = ["🍖","🥩","🧀","🥓","🥙"];
console.log(comidas);

//Ejemplo 1 (find):
let queso = comidas.find(
    function(comidas){
        return comidas === "🧀";
    }
);

console.log(queso);

//Ejemplo 2 (find):
//Si busco un elemento que no este en la lista, retorna undefined
let tomate = comidas.find(
    function(comidas){
        return comidas === "🍅";
    }
)

console.log(tomate);







//findindex: devuelve la posicion de la primera coincidencia de un elemento en un array.
console.log(comidas);

//Ejemplo 1 (¿Cual es la posicion de la tocineta?):
let indiceTocineta = comidas.findIndex(
    function(comidas){
        return comidas === "🥓";
    }
)

console.log(indiceTocineta);


//Ejemplo 2 (¿Cual es la posicion del mango?):
//Si no encuentra un elemento retorna undefined
let indexMango = comidas.find(
    function(comidas){
        return comidas === "🥭";
    }
)

console.log(indexMango);





//fill: Rellena el array con el elemento indicado desde un índice inicial hasta una posicion
// antes del indice final indicado.
// Ejemplo: array.fill(elementoNuevo, posicionDeInicio, posicionFinal)

let compra = ["🧃","🧁","🥑","🥦","🥕","🥩","🍞"];

//Como me gusta mucho el helado, voy reemplazar "🥑","🥦","🥕" y "🥩" por "🍦".
compra.fill("🍦", 2, 6);
console.log(compra);





//every(todos): devuelve true SI TODOS los elementos del array CUMPLEN con la función proporcionada,
//de lo contrario retorna false.


//Ejemplo 1 (¿Todo es par?)
let listaNumeros = [1,3,5,7,9,11];

//Se evalua si TODOS los elementos del array son pares
let todosPares = listaNumeros.every(
    function(number){
        return (number % 2) === 0;
    }
);
console.log(todosPares);


//Ejemplo 2 (¿Todo es impar?)

//Se evalua si todos los elementos del array son impares
let todosImpares = listaNumeros.every(
    function (numero){
        return (numero % 2) === 1;
    }
);

console.log(todosImpares);


//ejemplo 3 (¿Todo es carne?)
let comida = ["🥩","🥩","🥩","🥩","🥩"];

let todoCarne = comida.every(
    function esCarne(elemento){
        return elemento === "🥩"
    }
)

console.log(todoCarne);





//some(alguno): devuelve true si alguno de los elementos cumple con la funcion proporcionada,
//de lo contrario devuelve false.

let vegetales = ["🥦","🥕","🧅","🥬","🍫","🥔"];
//let vegetales = ["🥦","🥕","🧅","🥬","🍆","🥔"];

//Ejemplo 1 (Alguno es es un chocolate?).
let noVegetal = vegetales.some(
    function noEsVegetal(elemento){
        return elemento === "🍫";
    }
);

console.log(noVegetal);


//Ejemplo 2 (¿Alguno es el numero 2?)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numbers = [1,"2", 3, 4, 5, 6, 7, 8, 9, 10];

const someEven = numbers.some(
    function igual(number){
        return number  === 2;
    }
);

console.log(someEven);
