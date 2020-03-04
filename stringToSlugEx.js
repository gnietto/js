'use strict'

var globalTitle = "Winter Is Coming";

function urlSlug(title) {
    return title.toLowerCase().trim().split(/\s+/).join('-');
}

let winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);

//recordar que la regexp /\s+/ significa "encontrar el caracter 'espacio en blanco' cuando presenta 1 ocurrencia o más (+)"
