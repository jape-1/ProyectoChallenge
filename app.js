
const textArea = document.querySelector('.encriptar');
const AreaResultado = document.querySelector('.evaluar');
const btnEncriptar = document.querySelector('.btn_encriptar');
const btnDesencriptar = document.querySelector('.btn_desencriptar');
const btnCopiar = document.querySelector('.btn_copiar');
const contenido1 = document.querySelector('.tarjeta_contenido');

function encriptar(texto) {
    let texto_encriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return texto_encriptado;
}


function desencriptar(texto) {
    let texto_desencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return texto_desencriptado;
}


btnEncriptar.addEventListener('click', () => {
    const texto = textArea.value;
    if (validarTexto(texto)) {
        contenido1.remove();
        AreaResultado.value = encriptar(texto);
        textArea.value = '';
    } else {
        alert('Solo se permiten letras minúsculas y sin acentos.');
    }
});


btnDesencriptar.addEventListener('click', () => {
    const texto = textArea.value;
    if (validarTexto(texto)) {
        contenido1.remove();
        AreaResultado.value = desencriptar(texto);
        textArea.value = '';
    } else {
        alert('Solo se permiten letras minúsculas y sin acentos.');
    }
});


btnCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(AreaResultado.value);
});


function validarTexto(texto) {
    const regex = /^[a-z\s]+$/; 
    return regex.test(texto);
}
