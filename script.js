let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Asegurarse de que el índice está en el rango correcto
    if (index >= totalSlides) {
        currentSlide = 0; // Volver al primer slide si llegamos al final
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Ir al último slide si pasamos el inicio
    } else {
        currentSlide = index;
    }

    // Ocultar todas las diapositivas
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Mostrar la diapositiva actual
    slides[currentSlide].style.display = 'block';
}

// Mover a la siguiente o anterior diapositiva
function moveSlide(n) {
    showSlide(currentSlide + n);
}

// Mostrar la primera diapositiva al cargar la página
showSlide(currentSlide);

// Reproducción de música
function playAudio() {
    const audio = document.getElementById("birthdayAudio");

    // Verificar si el archivo se está cargando correctamente
    if (!audio) {
        console.log("El elemento de audio no se encontró.");
        return;
    }

    // Intentar reproducir el audio
    audio.play().then(() => {
        console.log("Reproducción iniciada correctamente.");
    }).catch(error => {
        console.log("Error al reproducir el audio:", error);
        alert("El navegador ha bloqueado la reproducción automática o hay un problema con el archivo de audio.");
    });
}