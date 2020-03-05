'use strict'

function findLongestWordLength(str) {
	let str2arr = Math.max(...str.split(' ').map(word => word.length));
	return str2arr;	
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

//encontrar palabra mas larga:
//separar str en array de palabras
//crear un nuevo array con la longitud de cada palabra
//seleccionar la palabra con la mayor 'longitud'
//retornar longitud
