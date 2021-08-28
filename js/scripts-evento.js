let boton = document.getElementById('btnPrincipal');
boton.addEventListener('click', respuestaClick)

function respuestaClick() {
    console.log('Hello Universo');
}

// let boton2 = document.getElementById('btnPrincipal');
// boton2.onclick = () => { console.log('respuesta 2') };


let boton2 = document.getElementById('btnPrincipal');
boton2.onclick = () => {
    let divEjemplo = document.getElementById('divEjemplo');
    let parrafo = document.createElement('div');
    parrafo.innerHTML = '<h2>hola Universo</h2>';
    divEjemplo.appendChild(parrafo);


};

function sumar(valor) {
    var total = 0;
    valor = parseInt(valor);
}

total = document.getElementById('resultado').innerHTML;

total = (total == null || total == undefined || total == '') ? 0 : total;

total = (parseInt(total) + parseInt(valor));

document.getElementById('resultado').innerHTML = total;