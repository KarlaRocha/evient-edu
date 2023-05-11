/**
 * 
 * @returns number[][] matrix
 * 
 * Ejercicio 8
 * 
 * El objetivo de este ejercicio es de crear un matrix
 * (una lista dentro de otra lista) de 3 x 3.
 * La primer columna debería contener el valor 1 y todos los
 * demás el valor 0.
 *
 * Resultado esperado:
 *   [
 *    [1, 0, 0],
 *    [1, 0, 0],
 *    [1, 0, 0],
 *   ]
 */


export function problem8Solution() {
  const fila = 3, columna = 3;
  let matrix = [];
  for (let i = 0; i < fila; i++) {
    let matrixColumna = []; 
    for (let j = 0; j < columna; j++) {
      if (j === 0) {
        matrixColumna.push("1");
      } else {
        matrixColumna.push("0");
      }
    }     
    matrix.push(matrixColumna);
  } 
  return matrix;
}
      