// 1.Cambio de texto: Crea un botón que, al hacer clic en él, cambie el texto de un elemento div por "¡Hola Mundo!".
const cambioTexto = () => {
document.getElementById('cadena').textContent = "¡Hola Mundo!";
}

// 2.Cambio de estilo: Crea un botón que, al hacer clic en él, cambie el color de fondo de un elemento div.  LISTO
const cambioEstilo = (color) => {
    document.getElementById('cadena').style.backgroundColor = color;
}

// 3.Captura de eventos: Crea un botón que, al hacer clic en él, muestre una alerta con el mensaje "¡Haz hecho clic!".  LISTO
const mostrarAlerta = () => {
    alert('¡Haz hecho click!');
}

// 4.Cambio de texto: Crea un botón que, al hacer clic en él, cambie el estilo de un elemento div ocultandolo y cambiando su texto por ocultar o mostrar según sea el caso.
const ocultarTexto = () => {
    let cadena = document.getElementById('cadena');
    let boton = document.getElementById('boton1');

    if (boton.textContent == 'Ocultar') {
        boton.textContent = 'Mostrar';
        cadena.style.display ='none';
    } else {
        boton.textContent = 'Ocultar';
        cadena.style.display = 'block';
        cadena.textContent = '¡Hola!';
    }
}