//Función suma
function suma(nro1, nro2) {
  return nro1 + nro2;
}

//Función resta
function resta(nro1, nro2) {
  return nro1 - nro2;
}

//Función multiplicación
function multiplicacion(nro1, nro2) {
  return nro1 * nro2;
}

//Función división
function division(nro1, nro2) {
  return nro1 / nro2;
}

//Función calcular
function calcular() {
  //Obtener los ID de los números y la operación
  let num1 = parseFloat(document.getElementById("numero1").value);
  let num2 = parseFloat(document.getElementById("numero2").value);
  let operador = document.getElementById("operador").value;

  //Calcular
  switch (operador) {
    case "+":
      resultado = suma(num1,num2);
      break;
    case "-":
        resultado = resta(num1,num2);
        break;
    case "*":
        resultado = multiplicacion(num1,num2);
        break;
    case "/":
        resultado = division(num1,num2);
        break;
    default:
        alert("Operador no válido");
  }

  //Resultado en caso que el número sea mayor o menor y no acepta división por cero
  if(!num2 === 0 && (resultado > 99999999999 || resultado < -99999999999)){
    alert("El número es muy largo para mostrarse");
  } else {
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
  }
  
  //errores si da NaN y dividir por 0
  if(isNaN(num1) || isNaN(num2)){
    alert("Debe ingresar los números para poder realizar la operación");
    borrar();
  }

  if(num2 === 0){
    alert("No se puede dividir por cero");
  }

  //error de la coma
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;
  if(numero1.includes(",") || numero2.includes(",")){
    alert("Para realizar números con coma debe utilizar un punto");
    borrar();
  }
}

//Función Borrar
function borrar(){
  //Obtener los ID
  let num1 = document.getElementById("numero1");
  let num2 = document.getElementById("numero2");
  let operador = document.getElementById("operador");

  //borrar
  num1.value = "";
  num2.value = "";
  operador.value = "";

  //borrar resultado
  document.getElementById("resultado").textContent = "Resultado: ";
}