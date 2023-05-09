/**
 * 
 * @returns number[][] matrix
 * 
 * Ejercicio 5
 * 
 * El objetivo de este ejercicio es de crear un matrix
 * (una lista dentro de otra lista) de 3 x 3.
 * La primera fila debería contener el valor 1 y todo lo
 * demás el valor 0.
 *
 */


export function problem5Solution() {
  // console.log("--------------------------")
  const fila = 3, columna = 3;
  let matrix = [];
  for (let i = 0; i < fila; i++) {
    // console.info({i, matrix})
    let matrixFila = []; 
    for (let j = 0; j < columna; j++) {
      if (i === 0) {
        matrixFila.push("1");
      } else {
        matrixFila.push("0");
      }
      // console.info({i, j, matrixFila})
    }     
    matrix.push(matrixFila);
    // console.log(matrix)
  } 
  // console.info({matrix})
  return matrix;
}

