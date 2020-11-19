let ciudad1 = prompt("Indroduc la ciudad1: "); // Introducimos y guardamos los datos en la variables
let ciudad2 = prompt("Indroduc la ciudad2: "); // Introducimos y guardamos los datos en la variables
let ciudad3 = prompt("Indroduc la ciudad3: "); // Introducimos y guardamos los datos en la variables
let ciudad4 = prompt("Indroduc la ciudad4: "); // Introducimos y guardamos los datos en la variables
let ciudad5 = prompt("Indroduc la ciudad5: "); // Introducimos y guardamos los datos en la variables
let ciudad6 = prompt("Indroduc la ciudad6: "); // Introducimos y guardamos los datos en la variables

let arrayCiutats = []; // Array de ciudades
let arrayCiutatsModificades = []; //Array de de ciudades modicando "a" por "4"

document.getElementById("respuesta").innerHTML = ciudad1 +"-"+ ciudad2 +"-"+ ciudad3 +"-"+ ciudad4 +"-"+ ciudad5 +"-"+ ciudad6;

/***************************************************** Fase 3 *******************************************************************/

arrayCiutats.push(ciudad1); // Agregamos la ciudade al array de Ciudades
arrayCiutats.push(ciudad2); // Agregamos la ciudade al array de Ciudades
arrayCiutats.push(ciudad3); // Agregamos la ciudade al array de Ciudades
arrayCiutats.push(ciudad4); // Agregamos la ciudade al array de Ciudades
arrayCiutats.push(ciudad5); // Agregamos la ciudade al array de Ciudades
arrayCiutats.push(ciudad6); // Agregamos la ciudade al array de Ciudades


    for(ciudad of arrayCiutats){
        arrayCiutatsModificades.push(ciudad.replace(/a/g,"4")); // Guardamos en la nueva Array el resultado de la modificacion
    }

arrayCiutatsModificades.sort(); // Ordenamos alfanumerico

document.getElementById("respuesta").innerHTML += "<br><br><b>" +arrayCiutatsModificades; //Mostramos por pantalla