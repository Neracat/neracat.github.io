document.addEventListener('DOMContentLoaded', function () {
    const introOverlay = document.getElementById('intro-overlay');
    const mainContent = document.getElementById('main-content');
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    let isPlaying = false;

    musicToggle.addEventListener('click', function () {
        if (!isPlaying) {
            backgroundMusic.play();
            introOverlay.style.display = 'none';
            mainContent.style.display = 'flex';
        } else {
            backgroundMusic.pause();
        }
        isPlaying = !isPlaying;
    });

    const toggleStars = document.getElementById('toggle-stars');
    const stars = document.getElementById('stars');

    toggleStars.addEventListener('click', function () {
        if (stars.style.display === 'none' || stars.style.display === '') {
            stars.style.display = 'block';
            toggleStars.classList.add('active');
        } else {
            stars.style.display = 'none';
            toggleStars.classList.remove('active');
        }
    });

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 2; // losowy rozmiar 
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        stars.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 10000);
    }

    for (let i = 0; i < 200; i++) { //ilosc giwazd
        createStar();
    }

    setInterval(createStar, 100); // Czestotliwosc tworzenia
});
