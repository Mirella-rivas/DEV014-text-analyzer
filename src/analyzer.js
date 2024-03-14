const analyzer = {  

 getWordCount: (text) => {
  text = text.trim(); //elimina los espacios en blanco que pueden haber en los extremos

  const words = text.split(/\s+/); //ayuda a dividir el texto con los espacios en blanco o tabulaciones o saltos para ver cuantas palabras hay

  return words.length;  
  
  //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },


//2DO INDICADOR
  getCharacterCount: (text) => {
    return text.length;
    
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  
  },


  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  const textolimpio= text.replace(/[^\w\s]/g, '').replace(/\s+/g, ''); //regex una expresion de comparacion estricta para numeros enteros y decimales(esunalimitante)
  return textolimpio.length;
  },



  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
   let count =0;  //encuentra todos los números en el texto
    
      for (let i = 0 ; i<text.length; i++){         // Para cada caracter del texto       
          if (!isNaN(text[i])) {                    // Verificar si el carácter actual es un número, si -(esto no es un numero) osea -*-=+ si esto es un num
            count++;                                // Incrementar el contador si es un número
           }
          }
      return count;
    },
  /*getNumberSum: (text) => {
     let suma = 0
    const numbers= text.match(/\d+/g);
    if (!numbers) {
      return 0;
    }
    else {
  
     //let suma = 0
      for ( let i=0 ; i< numbers.length ; i++) {
      suma = suma + numbers[i];
     }
     return suma;
    }
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  }, */

   
  getNumberSum: (text) => { 
  const numbers= text.match(/\d+/g);
    
  let suma = 0;
  if (numbers){
  for ( let i=0 ; i< numbers.length ; i++) {
      const digitos = numbers[i].split('');
  for ( let j=0 ; j<digitos.length; j++) {     
  suma = suma + parseInt(digitos[j]); 
  
  }
  }
  }
  return suma;
  },



  getAverageWordLength: (text) => {    
    if (!text.trim()){
      return 0
    }
    else {
      const words = text.split(/\s+/);
      const totalLength = words.reduce((acc, word) => acc + word.length, 0);
      const averageLength = totalLength / words.length;
      return averageLength;
    }
    
    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },


};

export default analyzer;
