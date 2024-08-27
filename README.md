Text Encryptor
Descripción
Text Encryptor es una aplicación web sencilla diseñada para encriptar y desencriptar mensajes de texto. La interfaz está desarrollada utilizando HTML, CSS y JavaScript, permitiendo a los usuarios ingresar un texto y obtener un mensaje cifrado o descifrado basado en reglas predefinidas.

Funcionalidades
Encriptar: Convierte un texto ingresado en un mensaje cifrado.
Desencriptar: Restaura el mensaje cifrado a su texto original.
Copiar: Permite copiar el resultado obtenido en el portapapeles.

Requisitos
Para ejecutar esta aplicación, solo necesitas un navegador web moderno que soporte HTML5, CSS y JavaScript.

Instrucciones de Uso
Abre el archivo index.html en tu navegador.
Ingresa el texto que deseas encriptar o desencriptar en el campo de texto proporcionado.
Presiona el botón "Encriptar" para convertir el texto en un mensaje cifrado.
Presiona el botón "Desencriptar" para revertir el mensaje cifrado a su forma original.
Utiliza el botón "Copiar" para copiar el resultado en el portapapeles.
Nota: Asegúrate de ingresar solo letras minúsculas y sin acentos.


Estructura del Proyecto
index.html: Archivo principal que contiene la estructura de la aplicación.
./styles/style.css: Archivo de estilos que define la apariencia de la interfaz.
app.js: Archivo JavaScript que contiene la lógica de encriptación y desencriptación.
assets: carpeta donde estarán todos los logos e imagenes usados para la interfaz.

Lógica de Encriptación
La encriptación de los textos en esta aplicación se basa en la sustitución de las vocales por secuencias específicas de caracteres. La función encriptar toma el texto original y reemplaza cada vocal con la siguiente secuencia:

e se convierte en enter
i se convierte en imes
a se convierte en ai
o se convierte en ober
u se convierte en ufat
Por ejemplo, la palabra "hola" se encriptaría como "hoberlai".

La función desencriptar revierte este proceso, devolviendo el texto encriptado a su forma original al sustituir las secuencias por las vocales correspondientes.

Aquí está el código utilizado:

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

Autor

      Giancarlo C.Y.





