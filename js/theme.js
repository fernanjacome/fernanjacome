document.addEventListener("DOMContentLoaded", function () {
  let lazySections = document.querySelectorAll(".experience");

  let sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        let section = entry.target;
        // Cargar contenido o activar el elemento
        section.classList.add("visible");
        observer.unobserve(section);
      }
    });
  });

  lazySections.forEach(function (section) {
    sectionObserver.observe(section);
  });
});
