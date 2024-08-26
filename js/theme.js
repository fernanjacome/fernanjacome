document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('radarChartAlexSoft').getContext('2d');
    const ctx2 = document.getElementById('radarChartPayConer').getContext('2d');

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // Elimina la leyenda
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Color de fondo del tooltip más opaco
                titleColor: '#fff', // Color del título del tooltip
                bodyColor: '#fff' // Color del cuerpo del tooltip
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#ffffff33' // Líneas de la cuadrícula semitransparentes
                },
                ticks: {
                    color: '#ffffff' // Color de las etiquetas de la escala
                }
            },
            x: {
                grid: {
                    color: '#ffffff33' // Líneas de la cuadrícula semitransparentes
                },
                ticks: {
                    color: '#ffffff' // Color de las etiquetas de la escala
                }
            }
        }
    };

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['React.js', 'HTML', 'CSS', 'JavaScript', 'C#', 'EFramework'],
            datasets: [{
                label: 'Experiencia AlexSoft',
                data: [8, 7, 7, 8, 5, 5], // Valores de ejemplo (en meses)
                backgroundColor: 'rgba(255, 99, 132, 0.5)', // Color opaco
                borderColor: 'rgba(255, 99, 132, 0.7)', // Color del borde opaco
                borderWidth: 1
            }]
        },
        options: options
    });

    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['JavaScript', 'Node.js', 'Automatización', 'CI/CD', 'PostgreSQL', 'GIT'],
            datasets: [{
                label: 'Experiencia PayConer',
                data: [6, 6, 7, 8, 4, 6], // Valores de ejemplo (en meses)
                backgroundColor: 'rgba(54, 162, 235, 0.5)', // Color opaco
                borderColor: 'rgba(54, 162, 235, 0.7)', // Color del borde opaco
                borderWidth: 1
            }]
        },
        options: options
    });

    

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
