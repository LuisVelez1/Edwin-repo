let msg = "A continuación le estoy entregando una cadena de texto  que servirá como texto guía para realizar los siguientes ejercicios . "

// 1. ¿Qué método utiliza para saber la cantidad de caracteres?
// Imprima el resultado
console.log(msg.length);

// 2. Convierta la cadena de texto entregada a minúsculas e imprima por consola la salida.
console.log (msg.toLowerCase());

// 3. Si la cadena contiene la palabra filtro en algú lado imprima un mensaje por consola con el valor true.
console.log(msg.includes("filtro"))

// 4. Extrae la palabra "ejercicios" del mensaje entregado.
// imprime por consola
console.log(msg.substring(msg.indexOf('ejercicios')));

// 5. Reemplaza los espacio por el caracter "-" e imprime el resultado final.

   console.log(msg.replace(/ /g,"-"));   

// 6. Realiza en el DOM un software que compare si dos campos de password son iguales.

function ComparadorPassword(){
    let contraseña1 = document.getElementById('password1').value;           
    let contraseña2 = document.getElementById('password2').value;

    if(contraseña1 === contraseña2){
        document.getElementById("mesage").textContent = "Las contraseñas son iguales";
    }else{
        document.getElementById("mesage").textContent = "Las contraseñas no son iguales";
    }
}

// 7. Crea una función que valide cuántas vocales tiene el msg entregado.

let contador = 0;
for (let index = 0; index < msg.length; index++) {
    let letra = msg[index].toLowerCase();
    if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
        contador++
    }    
}
console.log(contador);

// 8. Realiza un programa basado en el mockup entregado, que guarde los comentarios agregados por el usuario, teniendo en cuenta lo siguiente:

// * No puede haber espacios ni al principio ni al final.
let commentTextArea = document.getElementById('comment');

function CheckCommentLength() {
    let counter = document.getElementById('counter');
    let commentTextArea = document.getElementById('comment');
    let commentText = commentTextArea.value.trim();
    

    // * debe tener un contador que va disminuyendo conforme van terminándose el límite de caracteres que este será de 255.
    if (commentText.length > 255) {
      commentTextArea.value = commentText.substring(0, 255);
      commentText = commentTextArea.trim();
      
    }
  
    counter.textContent = 255 - commentText.length;
  }
  
// * Debe poder convertirlos a mayúscula o a minúscula.
document.getElementById('to-upperCase').addEventListener('click', function(){
    commentTextArea.value = commentTextArea.value.toUpperCase();
    commentTextArea.classList.remove('capitalized');
});
document.getElementById('to-lowerCase').addEventListener('click', function (){
    commentTextArea.value = commentTextArea.value.toLowerCase();
    commentTextArea.classList.remove('capitalized');
});

//* Capitalizar el texto.
document.getElementById('capitalize').addEventListener('click', function(){
    let commentText = commentTextArea.value;
    let capitalizedText = commentText.replace(/\b\w/g, function(match) {
      return match.toUpperCase();
    });
    commentTextArea.value = capitalizedText;
  });


// * Los comentarios deberán salir en color verde y negrilla.

document.getElementById('submit-comment').addEventListener('click', function(){
    addComment();
})

function addComment() {
    let commentText  =commentTextArea.value.trim();
    let commentsList = document.getElementById('comment-list');
    if(commentText){
        let newComment = document.createElement('li');
        newComment.innerHTML = `<p><strong>Usuario:</strong> ${commentText}</p>`;
        newComment.style.color = 'green';
        newComment.style.fontWeight = 'bold';
        commentsList.appendChild(newComment);
        commentTextArea.value = '';
    }
    
}



// Fecha de entrega(por parejas) --> Jueves 19 de octubre de 2023 a las 11.30 pm -> Link del repositorio.
// Nombre completo de los integrantes