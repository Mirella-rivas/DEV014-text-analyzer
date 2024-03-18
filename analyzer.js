const analyzer = {

  getWordCount: (text) => {
    text = text.trim();                                           //elimina los espacios en blanco que pueden haber en los extremos

    const words = text.split(/\s+/);                                     //ayuda a dividir el texto con los espacios en blanco o tabulaciones o saltos para ver cuantas palabras hay

    return words.length;

    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },


  //2DO INDICADOR
  getCharacterCount: (text) => {
    return text.length;

    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

  },


  /*getCharacterCountExcludingSpaces: (text) => {
    TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textolimpio = text.replace(/[^\w\s]/g, '').replace(/\s+/g, ''); //regex una expresion de comparacion estricta para numeros enteros y decimales(esunalimitante)
    return textolimpio.length;
  },*/

  getCharacterCountExcludingSpaces: (text) => {

    let count = 0;                                                                 // Inicializamos una variable para almacenar el conteo de caracteres

    // Recorremos cada carácter en el texto
    for (let i = 0; i < text.length; i++) {                                          // Si el carácter actual no es un espacio ni un signo de puntuación, incrementamos el contador

      if (text[i] !== ' ' && !(',.;:!?\'"-()[]{}').includes(text[i])) {                // el caracter en la posicion i
        count++;
      }
    }

    return count;

  },



  getNumberCount: (text) => {

    const groups = text.split(' ');                                                            // Dividimos la cadena en grupos separados por espacios

    let count = 0;                                                                               // Inicializamos el contador

    // Iteramos sobre cada grupo
    for (let i = 0; i < groups.length; i++) {
      let resultado = groups[i];

      console.log(`Analizando grupo: "${resultado}"`);


      if (resultado.endsWith('.')) {                                                         // Eliminamos los puntos al final de cada grupo
        resultado = resultado.slice(0, -1);
        console.log(`Se encontró un punto al final, eliminándolo: "${resultado}"`);
      }


      if (!isNaN(resultado)) {                                                           // Comprobamos si el grupo es un número después de quitar los puntos al final
        console.log(`El grupo "${resultado}" es un número.`);
        count++; // Incrementamos el contador si es un número válido

      }
    }

    // Devolvemos la cantidad de números encontrados
    return count;
  },




  /*getNumberCount: (text) => {
   const txt = text.trim(); // trim remueve espacios del inicio y final del texto
   const words = txt.split(" "); //
   let count = 0; // usado para contar caracteres numericos
   words.forEach(function (word) { // va tras cada caracter
     // Check if the character is a digit
     if (word.match(/^-?\d+$/) || word.match(/^\d+\.\d+$/)) { // regex expresion para comparacion estricta para numero enteros y decimales(limitante)
       // no hace nada
       // console.log("--", word)
       count++;
     }
   })
   return count;
 },*/


  getNumberSum: (text) => {

    const groups = text.split(' ');                                                        // Dividimos la cadena en grupos separados por espacios

    let sum = 0;                                                                         // Inicializamos el contador

    // Iteramos sobre cada grupo
    for (let i = 0; i < groups.length; i++) {
      let group = groups[i];

      console.log(`Analizando grupo: "${group}"`);

      // Eliminamos los puntos al final de cada grupo
      if (group.endsWith('.')) {
        group = group.slice(0, -1);
        console.log(`Se encontró un punto al final, eliminándolo: "${group}"`);
      }

      // Comprobamos si el grupo es un número después de quitar los puntos al final
      if (!isNaN(group)) {
        console.log(`El grupo "${group}" es un número.`);
        sum = sum + Number(group); // Incrementamos el contador si es un número válido
      }
    }

    // Devolvemos la cantidad de números encontrados
    return sum;
  },

  getAverageWordLength(text) {
    if (!text.trim()) {
      return 0;
    }

    const words = text.split(' ');
    let totalLength = 0;

    for (let i = 0; i < words.length; i++) {
      totalLength += words[i].length;
    }

    return parseFloat((totalLength / words.length).toFixed(2));
  }


  /*getAverageWordLength: (text) => {
    if (!text.trim()) {
      return 0
    }
    else {
      const words = text.split(/\s+/);
      const totalLength = words.reduce((acc, word) => acc + word.length, 0);
      const averageLength = totalLength / words.length;
      return parseFloat(averageLength.toFixed(2));
    }


    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  }, */


};

export default analyzer;
