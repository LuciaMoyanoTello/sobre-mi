//ESTADO ORIGINAL DE LA PÁGINA
let estadoOriginal;
estadoOriginal = window.onload = (guardarEstadoOriginal) => {

//TODOS LOS ELEMENTOS DE HTML NECESARIOS
const eleccionUsuario = document.getElementById("usuario");
const eleccionCompu = document.getElementById("computadora");
const resultado = document.getElementById("resultado");
const resultadoFinal = document.getElementById("resultado_final");
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const contUsua = document.getElementById("contador_usuario");
const contCompu = document.getElementById("contador_computadora");
const contEmp = document.getElementById("contador_empate");
const nombreInput = document.getElementById("nombre");
const comenzarButton = document.getElementById("comenzar");
const texto = document.getElementById("texto_principio");
const reiniciar = document.getElementById("reiniciar");

//TODOS LAS VARIABLES NECESARIAS
let opcUsuario;
let opcCompu;
let contadorUsuario = 0;
let contadorComputadora = 0;
let contadorEmpate = 0;
let partidasJugadas = 0;
let nombreUsuario = "";

//ESCONDER BOTÓN DE REINICIAR Y RESULTADO FINAL
reiniciar.style.display = "none";
resultadoFinal.style.display = "none";

//BOTÓN COMENZAR
comenzarButton.addEventListener("click", function () {
  nombreUsuario = nombreInput.value;

  if (nombreUsuario !== "") {
    // Oculta el formulario de inicio y muestra el juego.
    nombreInput.style.display = "none";
    comenzarButton.style.display = "none";
    texto.style.display = "none";
    juegoDiv.style.display = "block";
  } else {
    // Alerta en caso de no poner un nombre de usuario
    alert("Por favor, ingresa tu nombre antes de comenzar.");
  }
});

//OBTENER JUGADA USUARIO DEPENDIENDO QUE TOCA
piedra.addEventListener("click", function () {
  opcUsuario = "Piedra";
  jugadaComputadora();
});
papel.addEventListener("click", function () {
  opcUsuario = "Papel";
  jugadaComputadora();
});
tijera.addEventListener("click", function () {
  opcUsuario = "Tijera";
  jugadaComputadora();
});

//NÚMERO ALEATORIO PARA LA FUNCIÓN JUGADA COMPUTADORA
function numAleatorio() {
  let num = Math.floor(Math.random() * 3);
  return num;
}

//JUGADA COMPUTADORA
function jugadaComputadora() {
  let aleatorio = numAleatorio();

  if (aleatorio == 0) {
    opcCompu = "Piedra";
  } else if (aleatorio == 1) {
    opcCompu = "Papel";
  } else if (aleatorio == 2) {
    opcCompu = "Tijera";
  }

  juego();
}

//JUEGO
function juego() {
  if(!(nombreUsuario == "")){
  // Resultado de cada jugada y contadores para el resultado final
  if (opcUsuario == opcCompu) {
    resultado.innerHTML = "Empate";
    contadorEmpate++;
  } else if (
    (opcUsuario == "Piedra" && opcCompu == "Tijera") ||
    (opcUsuario == "Papel" && opcCompu == "Piedra") ||
    (opcUsuario == "Tijera" && opcCompu == "Papel")
  ) {
    resultado.innerHTML = "Gana " + nombreUsuario; //GANA + NOMBRE DEL USUARIO
    contadorUsuario++;
  } else {
    resultado.innerHTML = "Gana la computadora";
    contadorComputadora++;
  }

  // Mostrar lo que eligió el usuario y la computadora dentro del cuadro
  eleccionUsuario.textContent = nombreUsuario + ": " + opcUsuario;
  eleccionCompu.textContent = "Computadora: " + opcCompu;

  // Mostrar con número los resultados dependiendo de quien ganó o si es empate
  contUsua.textContent = "Contador " + nombreUsuario+": " + contadorUsuario;
  contCompu.textContent = "Contador Computadora: " + contadorComputadora;
  contEmp.textContent = "Contador Empate: " + contadorEmpate;

  // Contador de las jugadas
  partidasJugadas++;

  // Cantidad de partidas que se puede jugar (en este caso son 5) y al que llegue a 3
  if (!(partidasJugadas < 5) || (contadorUsuario == 3) || (contadorComputadora == 3)) {
    //muestra resultado final
    resultado.style.display = "none";
    resultadoFinal.style.display = "inline";
    mostrarResultadoFinal();

    //No deja seguir jugando
    piedra.addEventListener("click", siHaceClick);
    papel.addEventListener("click", siHaceClick);
    tijera.addEventListener("click", siHaceClick);
    // Aparece botón reiniciar
    reiniciar.style.display = "inline";
  }
} else {
  alert("Por favor, ingresa tu nombre antes de comenzar.");
}
}

//RESULTADO FINAL
function mostrarResultadoFinal() {
  if (
    (contadorEmpate > contadorUsuario &&
      contadorEmpate > contadorComputadora) ||
    contadorComputadora === contadorUsuario
  ) {
    resultadoFinal.textContent = "RESULTADO FINAL: " + "EMPATE";
  } else if (contadorUsuario > contadorComputadora) {
    resultadoFinal.textContent = "RESULTADO FINAL: " + "GANA " + nombreUsuario;
  } else {
    resultadoFinal.textContent = "RESULTADO FINAL: " + "GANA LA COMPUTADORA";
  }
}

// SI HACE CLICK EN PIEDRA, PAPEL O TIJERA LUEGO DEL RESULTADO FINAL APARACE ALERTA
function siHaceClick() {
  alert("Juego terminado tocar el botón reiniciar para volver a jugar");
}

//BOTÓN REINICIAR
function restablecerEstadoOriginal() {
  // Restablece todas las variables y elementos al estado original
  contadorUsuario = 0;
  contadorComputadora = 0;
  contadorEmpate = 0;
  partidasJugadas = 0;
  nombreUsuario = "";
  eleccionUsuario.textContent = "";
  eleccionCompu.textContent = "";
  resultado.textContent = "";
  resultadoFinal.textContent = "";
  contUsua.textContent = "Contador Usuario: 0";
  contCompu.textContent = "Contador Computadora: 0";
  contEmp.textContent = "Contador Empate: 0";
  nombreInput.style.display = "inline";
  comenzarButton.style.display = "inline";
  texto.style.display = "inline";
  resultado.style.display = "inline";
  resultadoFinal.style.display = "none";
  reiniciar.style.display = "none";

  // Vuelve a habilitar la elección del usuario
  piedra.removeEventListener("click", siHaceClick);
  papel.removeEventListener("click", siHaceClick);
  tijera.removeEventListener("click", siHaceClick);
}

reiniciar.addEventListener("click", function () {
  restablecerEstadoOriginal();
});

//GUARDAR EL ESTADO ORIGINAL DE LA PÁGINA PARA CUANDO SE REINICIE
function guardarEstadoOriginal() {
  estadoOriginal = document.body.innerHTML;
}
};