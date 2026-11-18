
// Pedir edad y genero al usuario

let edad = Number(prompt("¿Cuántos años tenés?"));
let genero = prompt("¿Sos hombre o mujer?").toLowerCase();

// Extra Bonus: resolver con un solo if

if ((genero == "mujer" && edad >= 60) || (genero == "hombre" && edad >= 65)) {
    alert("¡Estás en edad de jubilarte!");
} else {
    alert("Todavía no estás en edad de jubilarte.");
}
