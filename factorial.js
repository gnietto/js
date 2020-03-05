'use strict'

function factorialize(num) {
  return (num <= 1) ? 1 : factorialize(num - 1) * num;
}

console.log(factorialize(5));

//se usa la definición recurrente de la operación factorial que indica:
// 1, si n = 0
// (n - 1)! * n, si n > 0
// saber algo de matemáticas sirve! jaja