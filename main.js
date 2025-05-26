document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.romano-track');
    const trackWidth = track.scrollWidth;
    const viewportWidth = window.innerWidth;
    let requestId;

    function animate() {
        const scrollY = window.scrollY;
        // Velocidad ajustable (0.5 = más lento, 2 = más rápido)
        const offset = (scrollY * 0.8) % (trackWidth + viewportWidth);
        track.style.transform = `translateX(-${offset}px) translateY(-50%)`;
        requestId = requestAnimationFrame(animate);
    }

    window.addEventListener('scroll', () => {
        if (!requestId) {
            animate();
        }
    });

    // Optimización: Detener animación al salir de la pantalla
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate();
            } else {
                cancelAnimationFrame(requestId);
                requestId = null;
            }
        });
    });

    observer.observe(document.querySelector('.romano-multidivider'));
});

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.romano-trackb');
    const trackWidth = track.scrollWidth;
    const viewportWidth = window.innerWidth;
    let requestId;

    function animate() {
        const scrollY = window.scrollY;
        // Velocidad ajustable (0.5 = más lento, 2 = más rápido)
        const offset = (scrollY * 0.8) % (trackWidth + viewportWidth);
        track.style.transform = `translateX(-${offset}px) translateY(-50%)`;
        requestId = requestAnimationFrame(animate);
    }

    window.addEventListener('scroll', () => {
        if (!requestId) {
            animate();
        }
    });

    // Optimización: Detener animación al salir de la pantalla
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate();
            } else {
                cancelAnimationFrame(requestId);
                requestId = null;
            }
        });
    });

    observer.observe(document.querySelector('.romano-multidivider'));
});
