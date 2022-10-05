// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var longitud=array.length;
  return array[longitud-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arreglo=[];
  for (let i = 0; i < array.length; i++) {
        arreglo.push(array[i]+1);
  }
  return arreglo;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var cadena="";
  for (let i = 0; i < palabras.length; i++) {
        cadena+=palabras[i]+" ";
  }
  return cadena.trim();
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.includes(elemento)) {
    return true;
  } else {
    return false;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var i=0;
  var suma=0;
  while (i<numeros.length) {
    suma+=numeros[i];
    i++;
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var i=0;
  var suma=0;
  var promedio=0;
  while (i<resultadosTest.length) {
    suma+=resultadosTest[i];
    i++;
  }
  promedio=suma/resultadosTest.length;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var espacio;
  for (let j = 0; j < numeros.length; j++) {
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i]>numeros[i+1]) {
         espacio=numeros[i];
         numeros[i]=numeros[i+1];
         numeros[i+1]=espacio;
      }
    }    
  }
  
  console.log(numeros);
  return numeros[numeros.length-1];

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var rst=1;
  for (let i = 0; i < arguments.length; i++) {
        rst=rst*arguments[i];
  }
  if (arguments.length===0) {
    return 0;
  }
  return rst;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var count=0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i]>18) {
      count++;
    }
    
  }
  return count;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  switch (numeroDeDia) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return "Es dia Laboral";
      break;
    case 1:
    case 7:
      return "Es fin de semana";
    break;
    default:
      break;
  }   
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var digitos=n.toString().length;
  var i=1;
  
  while(i<digitos){
    n=Math.trunc(n/10);
    i++;
  }
  if (n===9) {
    return true;
  } 
  return false;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var booleano=false;
  for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i]===arreglo[i+1]) {
        booleano=true;
      }
  }
  return booleano;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var arreglo=[];
  for (let i = 0; i < array.length; i++) {
    if (array[i]==="Enero") {
      arreglo.push(array[i]);
    }
    if (array[i]==="Marzo") {
      arreglo.push(array[i]);
    }
    if (array[i]==="Noviembre") {
      arreglo.push(array[i]);
    }
    
  }
  if (arreglo.length===3) {
    return arreglo;
  } 
  return "No se encontraron los meses pedidos"
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arreglo=[];
  for (let i = 0; i < array.length; i++) {
    if (array[i]>100) {
      arreglo.push(array[i]);
    }    
  }
  return arreglo;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var i=0;
  var arreglo=[];
  var suma=0;
  var num=numero;
  while (i<10) {
    num=num+2;
    suma=suma+num;
    arreglo.push(num);
    if (suma===(i+1)) {
      return "Se interrumpió la ejecución";
      break;
    }
    i++;
  }
  return arreglo;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var i=0;
  var arreglo=[];
  var suma=0;
  var num=numero;
  while (i<10) {
    if (i!==4) {
    num=num+2;
    suma=suma+num;
    arreglo.push(num);
    }
    i++;
  }
  return arreglo;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
