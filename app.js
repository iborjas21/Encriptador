document.addEventListener('DOMContentLoaded', (event) => {
    let textarea = document.getElementById('textoentrada');

    textarea.addEventListener('focus', () => {
        textarea.setAttribute('placeholder', '');
        textarea.value = ''; // Limpiar el contenido del textarea

    });

    textarea.addEventListener('blur', () => {
        if (textarea.value.trim() === '') {
            textarea.setAttribute('placeholder', 'Ingrese el texto aquí');
        }
    });
});



// Función para encriptar el texto
function encriptar() {
    let textoEntrada = document.getElementById('textoentrada').value;
    
    /*if (textoEntrada === '') {
        alert("Por favor ingrese texto antes de encriptar.");
        return;
    
    if (!textoEntrada.match(/^[a-z0-9  .,]+$/)) {
        alert('Solo se permiten letras minúsculas y sin acentos.');
        return;
    }*/

    if (textoEntrada === '') {
        swal("Por favor ingrese texto antes de encriptar.","","error");
        return;
    }
    
    if (!textoEntrada.match(/^[a-z0-9  .,]+$/)) {
        swal("Solo se permiten letras minúsculas y sin acentos.","","error");
        return;
    }
    
    let textoEncriptado = textoEntrada
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.querySelector('.resultado').value = textoEncriptado;
    actualizarMensaje(textoEncriptado);
    mostrarBotonCopiar();
    
    console.log(textoEntrada);
    console.log(textoEncriptado);
    
}


// Función para desencriptar el texto
function desencriptar() {
    let textoEntrada = document.getElementById('textoentrada').value;
/*
    if (textoEntrada === '') {
        alert('Por favor ingrese texto antes de desencriptar.');
        return;
    }

    if (!textoEntrada.match(/^[a-z0-9 .,]+$|^(enter|imes|ai|ober|ufat)+$/)) {
        alert('Solo se permiten letras minúsculas y sin acentos, o las palabras encriptadas válidas.');
        return;
    }
    */
    if (textoEntrada === '') {
        swal("Por favor ingrese texto antes de desencriptar.","","error");
        return;
    }

    if (!textoEntrada.match(/^[a-z0-9 .,]+$|^(enter|imes|ai|ober|ufat)+$/)) {
        swal("Solo se permiten letras minúsculas y sin acentos, o las palabras encriptadas válidas.","","error");
        return;
    }
    
    let textoDesencriptado = textoEntrada
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.querySelector('.resultado').value = textoDesencriptado;
    actualizarMensaje(textoDesencriptado);
    mostrarBotonCopiar();

    console.log(textoEntrada);
    console.log(textoDesencriptado);
    
}

// Función para copiar el texto encriptado/desencriptado
function copiar() {
    let textoResultado = document.querySelector('.resultado');
    textoResultado.select();
    document.execCommand('copy');
    /*alert('Texto copiado al portapapeles');*/
    swal("Texto copiado al portapapeles","","");
    console.log(resultado);
}

// Función para actualizar el mensaje en la sección tarjeta_textos
function actualizarMensaje(texto) {
    let muneco = document.querySelector('.imagen_muneco');
    let mensaje1 = document.querySelector('.mensaje1');
    let mensaje2 = document.querySelector('.mensaje2');
    let botonCopiar = document.querySelector('.boton-copiar');

    if (texto.trim() === "") {
        muneco.style.display = 'block';
        mensaje1.style.display = 'block';
        mensaje2.style.display = 'block';
        botonCopiar.style.visibility = 'hidden';
    } else {
        muneco.style.display = 'none';
        mensaje1.style.display = 'none';
        mensaje2.style.display = 'none';
        botonCopiar.style.visibility = 'visible';
    }
    
}

// Función para mostrar el botón de copiar
function mostrarBotonCopiar() {
    let botonCopiar = document.querySelector('.boton-copiar');
    botonCopiar.style.visibility = 'visible';
    
}
