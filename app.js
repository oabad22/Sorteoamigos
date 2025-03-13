// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Boton agregarAmigo()

let amigos=[];
muestraListaAmigos();
function agregarAmigo(){

    let amigoAgregado = document.getElementById('amigo').value;
        if (amigoAgregado ===''){
            alert("Por favor, inserte un nombre.");
        }
        else {
            amigos.push(amigoAgregado);
            muestraListaAmigos();
            document.querySelector('#amigo').value = '';
            console.log(amigos);
        }


}

function sortearAmigo(){
    actualizaLista();
}
function muestraListaAmigos(){
    let lista =document.getElementById('listaAmigos');
    lista.innerHTML="";
    console.log(lista);    
    for(let i=0; i < amigos.length;i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function actualizaLista(){
    document.querySelector('#amigo').value = '';
    amigos = [];
    console.log(amigos);
}
