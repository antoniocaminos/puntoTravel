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
///////////////////buttons/////////////////////////
// script.js

// Función para mostrar SweetAlert de Villa de Merlo
function mostrarAlertaVillaDeMerlo() {
    Swal.fire({
        title: 'VILLA DE MERLO',
        html: `<p>Villa de Merlo se encuentra situada en la provincia de San Luis, a los pies de las sierras. Reconocida mundialmente por su benigno microclima y sus hermosos paisajes naturales.</p>
               <p>Ofrece actividades como trekking, avistaje de aves, actividades de montaña y turismo aventura.</p>
               <p>Nuestro paquete incluye:</p>
               <ul>
                   <li>TRASLADO EN BUS MIX</li>
                   <li>ALOJAMIENTO</li>
                   <li>REGIMEN DE COMIDA: PENSIÓN COMPLETA</li>
                   <li>COORDINACION PERMANENTE</li>
                   <li>ASISTENCIA MÉDICA</li>
                   <li>EXCURSIONES OPCIONALES A CARGO DE CADA PASAJERO</li>
               </ul>
               <p>Te invitamos a sumarte con nosotros a un viaje a puro relax y descanso.</p>
               <p>¡Consultá próximas salidas y Reservá ahora!</p>`,
        icon: 'info',
        confirmButtonText: 'Cerrar'
    });
 }
 
 // Función para mostrar SweetAlert de Termas de Río Hondo
 function mostrarAlertaTermasDeRioHondo() {
    Swal.fire({
        title: 'TERMAS DE RIO HONDO',
        html: `<p>Ubicadas en la provincia de Santiago del Estero, sede de grandes eventos deportivos.</p>
               <p>Este destino ofrece actividades como el Dique Frontal y el Museo del Automóvil, entre otras.</p>
               <p>Conocido por sus aguas termales, ideales para disfrutar de sus propiedades curativas y relajarse.</p>
               <p>Nuestro paquete incluye:</p>
               <ul>
                   <li>Bus Mix desde Córdoba</li>
                   <li>Alojamiento</li>
                   <li>Coordinación permanente</li>
                   <li>Pensión completa</li>
                   <li>Full day en Santiago del Estero</li>
               </ul>
               <p>¡Viví este destino imperdible!</p>
               <p>¡Consultá próximas salidas y Reservá ahora!</p>`,
        icon: 'info',
        confirmButtonText: 'Cerrar'
    });
 }
 
 // Función para mostrar SweetAlert de Termas de Federación, Chajarí y Ayuí
 function mostrarAlertaTermasEntreRios() {
    Swal.fire({
        title: 'TERMAS DE FEDERACIÓN, TERMAS DE CHAJARÍ, TERMAS DE AYUÍ',
        html: `<p>Destinos ubicados en la provincia de Entre Ríos, con maravillosos parques de aguas termales y modernos servicios turísticos.</p>
               <p>Ofrecen actividades recreativas, de descanso, relax y terapéuticas.</p>
               <p>Nuestro paquete incluye:</p>
               <ul>
                   <li>TRASLADO EN BUS MIX DESDE CÓRDOBA Y CARLOS PAZ</li>
                   <li>ALOJAMIENTO</li>
                   <li>REGIMEN DE COMIDA: MEDIA PENSIÓN</li>
                   <li>COORDINACION PERMANENTE</li>
                   <li>ASISTENCIA MÉDICA</li>
                   <li>Excursiones a Termas de Ayuí, Termas de Concordia, Represa Salto Grande</li>
               </ul>
               <p>❌ NO INCLUYE TICKET DE ACCESO A LOS PARQUES ❌</p>
               <p>¡Consultá nuestras próximas salidas y Reservá ahora!</p>`,
        icon: 'info',
        confirmButtonText: 'Cerrar'
    });
 }
 
 // Función para mostrar SweetAlert de Puerto Madryn
 function mostrarAlertaPuertoMadryn() {
    Swal.fire({
        title: 'PUERTO MADRYN',
        html: `<p>Situada en la provincia de Chubut, conocida por la fauna marina de Península Valdés, como ballenas, pingüinos, elefantes y lobos marinos.</p>
               <p>Nuestro paquete incluye:</p>
               <ul>
                   <li>Bus Mix desde Córdoba</li>
                   <li>3 noches de alojamiento en Hotel Petit</li>
                   <li>Media pensión</li>
                   <li>Coordinación permanente</li>
                   <li>Seguro médico</li>
               </ul>
               <p>Excursiones incluidas: City tour en Puerto Madryn, Traslado a Puerto Pirámides, Visita a Las Grutas</p>
               <p>Excursiones opcionales disponibles</p>
               <ul>
                   <li>Pinguinera en Punta Tombo</li>
                   <li>Avistaje de Lobos Marinos en Punta Loma</li>
                   <li>Avistaje de Ballena en playa El Doradillo</li>
                   <li>Navegación en Puerto Pirámides</li>
               </ul>
               <p>¡Consultá y Reservá ahora!</p>`,
        icon: 'info',
        confirmButtonText: 'Cerrar'
    });
 }
 
 // Función para mostrar SweetAlert de Norte Argentino
 function mostrarAlertaNorteArgentino() {
    Swal.fire({
        title: 'NORTE ARGENTINO',
        html: `<p>Región maravillosa que incluye Salta y Jujuy, con múltiples paisajes y experiencias enriquecedoras.</p>
               <p>Nuestro paquete incluye:</p>
               <ul>
                   <li>BUS MIX DESDE CÓRDOBA</li>
                   <li>ALOJAMIENTO</li>
                   <li>MEDIA PENSIÓN</li>
                   <li>COORDINACIÓN PERMANENTE</li>
               </ul>
               <p>Puedes conocer:</p>
               <ul>
                   <li>CITY TOUR POR SALTA + TELEFÉRICO</li>
                   <li>JUJUY FULL DAY (HUMAHUACA, MAIMARÁ, PURMAMARCA)</li>
               </ul>
               <p>¡Prepará tu valija y sumate a este viaje maravilloso!</p>
               <p>Consultá próximas salidas y Reservá ahora!</p>`,
        icon: 'info',
        confirmButtonText: 'Cerrar'
    });
 }
 
 // Función para mostrar SweetAlert de Mendoza
 function mostrarAlertaMendoza() {
    Swal.fire({
        title: 'MENDOZA - SAN RAFAEL + FULL DAY LAS LEÑAS',
        html: `<p>San Rafael, al sur de Mendoza, ofrece bodegas, chocolaterías y actividades recreativas. Las Leñas invita con cerros nevados y turismo aventura.</p>
               <p>Nuestro paquete incluye:</p>
               <ul>
                   <li>SALIDA EN BUS MIX DESDE CÓRDOBA</li>
                   <li>ALOJAMIENTO</li>
                   <li>REGIMEN DE COMIDA: MEDIA PENSION</li>
                   <li>COORDINACION PERMANENTE</li>
                   <li>ASISTENCIA MÉDICA</li>
               </ul>
               <p>Actividades:</p>
               <ul>
                   <li>DEGUSTACIÓN DE VINOS EN BODEGA LASBIANO</li>
                   <li>CONOCER LA CHOCOLATERA (KETOBAC) Y ACEITERA</li>
                   <li>VISITAR EL LABERINTO DE BORGES</li>
                   <li>ACTIVIDADES DE TURISMO AVENTURA O EXTREMOS</li>
                   <li>ALQUILER DE TRAJES PARA ESQUIAR</li>
               </ul>
               <p>¡Sumate con nosotros a conocer estos dos destinos increíbles!</p>
               <p>Consultá próximas salidas y Reservá ahora!</p>`,
        icon: 'info',
        confirmButtonText: 'Cerrar'
    });
 }
 
 // Event listeners para los botones de las cards
 document.addEventListener('DOMContentLoaded', function() {
    // Botones de cada destino
 
    // Villa de Merlo
    document.getElementById('villa-merlo').addEventListener('click', function() {
        mostrarAlertaVillaDeMerlo();
    });
 
    // Termas de Río Hondo
    document.getElementById('termas-rio-hondo').addEventListener('click', function() {
        mostrarAlertaTermasDeRioHondo();
    });
 
    // Termas de Federación, Chajarí y Ayuí
    document.getElementById('termas-entre-rios').addEventListener('click', function() {
        mostrarAlertaTermasEntreRios();
    });
 
    // Puerto Madryn
    document.getElementById('puerto-madryn').addEventListener('click', function() {
        mostrarAlertaPuertoMadryn();
    });
 
    // Norte Argentino
    document.getElementById('norte-argentino').addEventListener('click', function() {
        mostrarAlertaNorteArgentino();
    });
 
    // Mendoza - San Rafael + Las Leñas
    document.getElementById('mendoza-san-rafael').addEventListener('click', function() {
        mostrarAlertaMendoza();
    });
 
    // Puedes agregar más listeners aquí para otros destinos si es necesario
 });
 ///////////////////buttons/////////////////////////