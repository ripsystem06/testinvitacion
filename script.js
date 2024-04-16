document.addEventListener("DOMContentLoaded", function() {
    // Carga dinámica de imágenes de fondo
    const images = [
        'img/1.gif',
        'img/2.gif',
        'img/3.gif',
        'img/4.gif'
    ];

    const divs = document.querySelectorAll('.background-image');
    divs.forEach((div, index) => {
        div.style.backgroundImage = images[index];
    });
});
