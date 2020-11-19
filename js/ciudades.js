let ciudad1 = prompt("Indroduc la ciudad1: "); // Introducimos y guardamos los datos en la variables
let ciudad2 = prompt("Indroduc la ciudad2: "); // Introducimos y guardamos los datos en la variables
let ciudad3 = prompt("Indroduc la ciudad3: "); // Introducimos y guardamos los datos en la variables
let ciudad4 = prompt("Indroduc la ciudad4: "); // Introducimos y guardamos los datos en la variables
let ciudad5 = prompt("Indroduc la ciudad5: "); // Introducimos y guardamos los datos en la variables
let ciudad6 = prompt("Indroduc la ciudad6: "); // Introducimos y guardamos los datos en la variables

let barcelonaCiutats = []; // Array de la ciudad
let madridCiutats = []; // Array de la ciudad
let valenciaCiutats = []; // Array de la ciudad
let malagaCiutats = []; // Array de la ciudad
let cadizCiutats = []; // Array de la ciudad
let santanderCiutats = []; // Array de la ciudad

document.getElementById("respuesta").innerHTML += ciudad1 +"-"+ ciudad2 +"-"+ ciudad3 +"-"+ ciudad4 +"-"+ ciudad5 +"-"+ ciudad6+ ""; // Mostramos ciudades introducidas

/****************************************************************************** Fase 4 **********************************************************************/

for(i=0; i<ciudad1.length; i++){ // Guardamos letgra por letra en el array de la ciudad
    barcelonaCiutats.push(ciudad1.charAt(i));
}

for(i=0; i<ciudad2.length; i++){ // Guardamos letgra por letra en el array de la ciudad
    madridCiutats.push(ciudad2.charAt(i));
}

for(i=0; i<ciudad3.length; i++){ // Guardamos letgra por letra en el array de la ciudad
    valenciaCiutats.push(ciudad3.charAt(i));
}

for(i=0; i<ciudad4.length; i++){ // Guardamos letgra por letra en el array de la ciudad
    malagaCiutats.push(ciudad4.charAt(i));
}

for(i=0; i<ciudad5.length; i++){ // Guardamos letgra por letra en el array de la ciudad
    cadizCiutats.push(ciudad5.charAt(i));
}

for(i=0; i<ciudad6.length; i++){ // Guardamos letgra por letra en el array de la ciudad
    santanderCiutats.push(ciudad6.charAt(i));
}


document.getElementById("respuesta").innerHTML += "<br><br>"; // Pintamos espacio en el maquetado

for(i=barcelonaCiutats.length-1; i>=0; i--){ // Bucle para mostras array al reves
    document.getElementById("respuesta").innerHTML += "<b>" +barcelonaCiutats[i];
}

document.getElementById("respuesta").innerHTML += "<br><br>"; // Pintamos espacio en el maquetado

for(i=madridCiutats.length-1; i>=0; i--){ // Bucle para mostras array al reves
    document.getElementById("respuesta").innerHTML += "<b>" +madridCiutats[i];
}

document.getElementById("respuesta").innerHTML += "<br><br>"; // Pintamos espacio en el maquetado

for(i=valenciaCiutats.length-1; i>=0; i--){ // Bucle para mostras array al reves
    document.getElementById("respuesta").innerHTML += "<b>" +valenciaCiutats[i]; 
}

document.getElementById("respuesta").innerHTML += "<br><br>"; // Pintamos espacio en el maquetado

for(i=malagaCiutats.length-1; i>=0; i--){ // Bucle para mostras array al reves
    document.getElementById("respuesta").innerHTML += "<b>" +malagaCiutats[i];
}

document.getElementById("respuesta").innerHTML += "<br><br>"; // Pintamos espacio en el maquetado

for(i=cadizCiutats.length-1; i>=0; i--){ // Bucle para mostras array al reves
    document.getElementById("respuesta").innerHTML += "<b>" +cadizCiutats[i];
}

document.getElementById("respuesta").innerHTML += "<br><br>"; // Pintamos espacio en el maquetado

for(i=santanderCiutats.length-1; i>=0; i--){ // Bucle para mostras array al reves
    document.getElementById("respuesta").innerHTML += "<b>" +santanderCiutats[i];
}