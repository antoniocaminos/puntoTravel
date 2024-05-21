// Función de saludo
function holamunde() {
    console.log("Hola Punto Travel");
}
holamunde(); // Llama a la función de saludo

// Inicialización del carrusel para que se desplace automáticamente

const carrusel = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
    
$(document).ready(function() {
    $('#carouselExampleFade').carousel({
        interval: 3000 // Establece el intervalo de desplazamiento en milisegundos (en este caso, 3 segundos)
    });
});
