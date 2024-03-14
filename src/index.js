import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`click boton
//1ER INDICADOR

const cuadroDeTexto = document.querySelector("textarea[name = 'user-input']")
const primeraRespuesta = document.querySelector('li[data-testid="word count"]');
const segundaRespuesta = document.querySelector('li[data-testid="character-count"]');
const terceraRespuesta = document.querySelector('li[data-testid="character-no-spaces-count"]');
const cuartaRespuesta = document.querySelector('li[data-testid="number-count"]');
const quintaRespuesta = document.querySelector('li[data-testid="number-sum"]')
const sextaRespuesta = document.querySelector('li[ data-testid="word-length-average"]')

cuadroDeTexto.addEventListener("input", function () {

   //INDICADOR 1
   primeraRespuesta.textContent = "Recuento de palabras:" + analyzer.getWordCount(cuadroDeTexto.value);
   //INDICADOR 2
   segundaRespuesta.textContent = "Recuento de caracteres: " + analyzer.getCharacterCount(cuadroDeTexto.value);
   //INDICADOR 3
   terceraRespuesta.textContent = "Recuento de caracteres excluyendo espacios y signos de puntuación: " + analyzer.getCharacterCountExcludingSpaces(cuadroDeTexto.value);
   //INDICADOR 4
   cuartaRespuesta.textContent= "Recuento de números: " + analyzer.getNumberCount(cuadroDeTexto.value);
   //INDICADOR 5
   quintaRespuesta.textContent = "Suma total de números: " + analyzer.getNumberSum(cuadroDeTexto.value);
   //INDICADOR 6
   sextaRespuesta.textContent= "Longitud media de las palabras: " + analyzer.getAverageWordLength(cuadroDeTexto.value);

})

function limpiarTexto() {
   cuadroDeTexto.value = " ";          //LIMPIAR EL CUADRO DE TEXTO
   /*
   const indicadores = document.querySelectorAll('.li');          //RESTABLECER INDICADORES A 0
   indicadores.forEach(indicador => {
      indicador.innerHTML = indicador.dataset.testid + ": 0";
   });*/
}
document.getElementById('reset-button').addEventListener('click', () =>{
   limpiarTexto()
   primeraRespuesta.textContent = "Recuento de palabras: "
   segundaRespuesta.textContent = "Recuento de caracteres: "
   terceraRespuesta.textContent = "Recuento de caracteres excluyendo espacios y signos de puntuación: "
   cuartaRespuesta.textContent = "Recuento de números: " 
   quintaRespuesta.textContent = "Suma total de números: "
   sextaRespuesta.textContent = "Longitud media de las palabras: "
})




