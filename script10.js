// Valores dinámicos
const valores = [
    { titulo: "Sostenibilidad", descripcion: "Actuamos con responsabilidad ecológica en cada decisión." },
    { titulo: "Innovación", descripcion: "Promovemos soluciones tecnológicas para un futuro energético mejor." },
    { titulo: "Transparencia", descripcion: "Operamos con ética, honestidad y claridad." },
    { titulo: "Compromiso", descripcion: "Estamos comprometidos con clientes, empleados y el planeta." }
];

const contenedorValores = document.getElementById("valores-container");

valores.forEach(valor => {
    const card = document.createElement("div");
    card.className = "valor-card";
    card.innerHTML = `
        <h3>${valor.titulo}</h3>
        <p>${valor.descripcion}</p>
    `;
    contenedorValores.appendChild(card);
});

// Slider automático
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000); // cada 5 segundos