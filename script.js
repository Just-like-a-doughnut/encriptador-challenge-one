const textArea = document.querySelector("#entradaUsuario");
const mensaje = document.querySelector("#textoEncriptado");
const copia = document.querySelector("#copiarTexto");
const noTexto = document.querySelector(".noTexto");
const textoEncriptadoDiv = document.querySelector("#contenedorTextoEncriptado");

// Ocultamos el contenedor de texto encriptado al inicio
textoEncriptadoDiv.style.display = "none";
copia.style.display = "none";  // También ocultamos el botón de copiar al inicio

// Función para validar el texto
function validarTexto() {
    let textoEscrito = textArea.value;
    let validador = textoEscrito.match(/^[a-z\s]*$/); // Permitir también espacios

    if (!validador || textoEscrito.trim() === "") {
        alert("Solo son permitidas letras minúsculas, sin acentos ni caracteres especiales");
        return false;
    }
    return true;
}

// Función para encriptar el texto
function btnEncriptar() {
    if (validarTexto()) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.textContent = textoEncriptado;
        textoEncriptadoDiv.style.display = "flex"; // Mostrar el contenedor del texto encriptado
        noTexto.style.display = "none"; // Ocultar el mensaje de "Ningún mensaje fue encontrado"
        copia.style.display = "block"; // Mostrar el botón de copiar
        textArea.value = ""; // Limpiar el área de texto
    }
}

// Función para desencriptar el texto
function btnDesencriptar() {
    if (validarTexto()) {
        const textoDesencriptado = desencriptar(textArea.value);
        mensaje.textContent = textoDesencriptado;
        textoEncriptadoDiv.style.display = "flex"; // Mostrar el contenedor del texto desencriptado
        noTexto.style.display = "none"; // Ocultar el mensaje de "Ningún mensaje fue encontrado"
        copia.style.display = "block"; // Mostrar el botón de copiar
        textArea.value = ""; // Limpiar el área de texto
    }
}

// Función de encriptación
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

// Función de desencriptación
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

// Función para copiar el texto encriptado/desencriptado
function copiar() {
    navigator.clipboard.writeText(mensaje.textContent);
    alert("Texto Copiado");
}

document.getElementById("encriptarTexto").addEventListener("click", btnEncriptar);
document.getElementById("desencriptarTexto").addEventListener("click", btnDesencriptar);
copia.addEventListener("click", copiar);
