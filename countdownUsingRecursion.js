'use strict'

function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }  
}

console.log(countdown(5)); // [5, 4, 3, 2, 1]

// en línea 8: 
//.unshift(n) genera cuenta atrás
//.pop(n) genera cuenta adelante