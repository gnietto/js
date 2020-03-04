'use strict'

var globalTitle = "Winter Is Coming";

function urlSlug(title) {
    return title.toLowerCase().trim().split(' ').join('-');
}

let winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);
