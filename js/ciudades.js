let ciudad1 = prompt("Indroduc la ciudad1: ");
let ciudad2 = prompt("Indroduc la ciudad2: ");
let ciudad3 = prompt("Indroduc la ciudad3: ");
let ciudad4 = prompt("Indroduc la ciudad4: ");
let ciudad5 = prompt("Indroduc la ciudad5: ");
let ciudad6 = prompt("Indroduc la ciudad6: ");

let arrayCiutats = [];

document.getElementById("respuesta").innerHTML = ciudad1 +"-"+ ciudad2 +"-"+ ciudad3 +"-"+ ciudad4 +"-"+ ciudad5 +"-"+ ciudad6;

arrayCiutats.push(ciudad1);
arrayCiutats.push(ciudad2);
arrayCiutats.push(ciudad3);
arrayCiutats.push(ciudad4);
arrayCiutats.push(ciudad5);
arrayCiutats.push(ciudad6);

document.getElementById("respuesta").innerHTML += "<br><br><b>" +arrayCiutats.sort();
