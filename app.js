// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página. */

// Variables
let amigos = [];
let amigoSorteado = "";


function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    } else {
        amigos.push(amigo);
        mostrarAmigos()
        document.querySelector('#amigo').value='';
    }
}

function mostrarAmigos() {
    document.getElementById("listaAmigos").innerHTML = amigos.join("<br>"); 
}

function sortearAmigo() {
    elegido = Math.floor(Math.random()*amigos.length);
    amigoSorteado = amigos[elegido];
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
    amigos=[];
}
