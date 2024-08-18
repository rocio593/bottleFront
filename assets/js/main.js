//****INICIO SCRIPT****

$(document).ready(function(){
  // Se agrega Smoth Scrolling a los enlaces señalados
$("a").on('click', function(event) {

  // Se confirma que this.hash venga con un valor
   if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
  //Usando el método animate() de jQuery para Smoth Scroll
  // *800 milisegundos para desplazarse al área señalada
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      window.location.hash = hash;
    });
  } //Finalización de confirmación this.hash
});
});

// Función Tooltip para mostrar mensaje al pasar cursor por fotos de "Destacados"
$(function () {
$('[data-toggle="tooltip"]').tooltip()
})

// Profesional comprometido y con experiencia en las áreas de gestión y planificación de proyectos IT, con ganas de aprender y de enfrentar nuevos desafíos. 
// Me encuentro en proceso de búsqueda de una oportunidad laboral, en la que me pueda desarrollar como profesional
const typed = new Typed('.professions', {
  strings: [
    'Comprometido',
    'En constante aprendizaje',
    'Disfruto ver proyectos solucionando la vida de la gente'
  ],
  typeSpeed: 90,
  backSpeed: 15,
  loop: true
});

