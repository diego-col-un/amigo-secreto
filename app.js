let amigos = [];
let amigo;
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value; // Toma el valor que haya sido puesto en el input

    if (amigo!="") {                // Verifica que no sea un campo vacío
        amigos.push(amigo);         // Agrega el amigo en la lista de amigos
        actualizarLista();          // funcion
        document.querySelector("#amigo").value = '';  // Limpia el campo
    } else {
        alert("Porfavor, ingrese un nombre válido.") // Si intenta agregar un campo vacio aparece una alerta 
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // referencia del campo lista en html
    lista.innerHTML = ""; //limpia la lista
    for (let i = 0; i < amigos.length; i++) {  //Agrega 1 a 1 de los amigos en la lita a mostrar en pantalla
            if (amigos[i]) {
            let elemento = document.createElement("li");
            elemento.innerHTML = amigos[i];
            lista.appendChild(elemento);
        }
    }
}

function sortearAmigo() {             //Crea un numero random, ese numero es el indice que tiene el nombre del amigo secreto seleccionado y lo imprime en pantalla
    let numero = Math.floor(Math.random()*amigos.length);
    amigoSecreto = amigos[numero];
    let resultado= document.getElementById("resultado")
    resultado.innerHTML = "El amigo secreto es " + amigoSecreto;
    
}
