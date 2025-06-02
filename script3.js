document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('open'); // Cambia el estado del icono hamburguesa
    document.querySelector('.menu').classList.toggle('active'); // Muestra/oculta el menú
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        // Realizar validaciones o enviar el formulario
        // Si todo es correcto, el formulario será enviado
    });
});