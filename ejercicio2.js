function comasAmigos(amigos) {
    // sort() por defecto ordena de menor a mayor
    let listaOrdenada = amigos.sort();
    let salida = "";
    for (const elemento of listaOrdenada) {
        if (elemento == listaOrdenada[listaOrdenada.length - 1]) {
            salida += elemento;
        } else {
            salida += elemento + ", ";
        }
    }

    /*
    * Nueva forma de iterar sobre la lista
    *
    listaOrdenada.array.forEach(elemento => {
        if (elemento == listaOrdenada[listaOrdenada.length - 1]) {
            salida += elemento;
        } else {
            salida += elemento + ", ";
        }
    });
    */

    return salida;
}

const amigos = ["mango", "juego", "Ann", "casa"];
console.log("Vamos a ordenar la lista: " + amigos);
console.log("Salida: " + comasAmigos(amigos));

