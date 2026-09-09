const displayTiempo = document.getElementById("display-tiempo");
const btnIniciar = document.getElementById("btn-iniciar");
const btnPausar = document.getElementById("btn-pausar");
const btnReiniciar = document.getElementById("btn-reiniciar");

function formatearTiempo(segundosTotales) {
  const minutos = Math.floor(segundosTotales / 60);
  const segundos = segundosTotales % 60;
  const minutosTexto = String(minutos).padStart(2, "0");
  const segundosTexto = String(segundos).padStart(2, "0");
  return `${minutosTexto}:${segundosTexto}`;
}

let tiempoRestante = 5;
let intervaloId = null;

btnIniciar.addEventListener("click", function () {
    displayTiempo.textContent=formatearTiempo(tiempoRestante);
    intervaloId=setInterval(function () {
      tiempoRestante=tiempoRestante-1;
      displayTiempo.textContent=formatearTiempo(tiempoRestante);
    if (tiempoRestante <=0) {
        clearInterval(intervaloId);
      }
        
    },1000);
});
    
btnPausar.addEventListener("click", function () {
        clearInterval(intervaloId);
});

btnReiniciar.addEventListener("click",function(){
    clearInterval(intervaloId);
    tiempoRestante=5;
    displayTiempo.textContent=formatearTiempo(tiempoRestante);
      
});
