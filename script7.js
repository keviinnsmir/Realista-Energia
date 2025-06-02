// Acordeón Preguntas Frecuentes
document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".accordion-title");

  titles.forEach(title => {
    title.addEventListener("click", () => {
      const content = title.nextElementSibling;

      // Cierra todos
      document.querySelectorAll(".accordion-content").forEach(c => {
        if (c !== content) {
          c.style.maxHeight = null;
          c.previousElementSibling.classList.remove("active");
        }
      });

      // Toggle actual
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        title.classList.remove("active");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        title.classList.add("active");
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });
});
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mainNav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});