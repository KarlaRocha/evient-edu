/**
 * 
 * @param number[] numList
 * @returns number
 * 
 * Ejercicio 1
 * La función 'problema3Solution' va recibir un parametro llamad 'numList'.
 * El parametro 'numList' es un arreglo (o lista) de numeros aleatorios.
 * 
 * El objetivo de este ejercicio es encontrar el número más grande regresar
 * ese valor con el return.
 *
 */


export function problem3Solution(numList) {
    let masGrande = numList[0];
    for (let i = 1; i < numList.length; i++) {
      if (numList[i] > masGrande) {    
        masGrande = numList[i];
      }  
    }
    return masGrande;
}
