let amigos = [];
let amigo;
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo!="") {
        amigos.push(amigo);
        console.log(amigos)
        actualizarLista();
        document.querySelector("#amigo").value = '';
    } else {
        alert("Porfavor, ingrese un nombre válido.")
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
            if (amigos[i]) {
            let elemento = document.createElement("li");
            elemento.innerHTML = amigos[i];
            lista.appendChild(elemento);
        }
    }
}
