(function () {
    const path = window.location.pathname.toLowerCase();

    const check = (str, keyword) => {
        const cleanPath = str.endsWith('/') ? str.slice(0, -1) : str;
        return cleanPath.endsWith('/' + keyword);
    };

    if (check(path, 'g') || check(path, 'google')) {
        window.location.href = 'https://maps.app.goo.gl/w1RDYRPSAVcVG6oX7';
        return;
    }

    if (check(path, 'a') || check(path, 'apple')) {
        window.location.href = 'https://maps.apple/p/pLqNWw89_Q0SZD';
        return;
    }

    if (check(path, 'f') || check(path, 'facebook')) {
        window.location.href = 'https://www.facebook.com/camdongocha';
        return;
    }


    if (path !== '/' && !path.endsWith('/index.html')) {
        window.location.replace('/');
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const openBtn = document.getElementById('openLightboxBtn');
    const closeBtn = document.getElementById('closeLightboxBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = document.querySelectorAll('.slide');

    let currentSlide = 0;

    function showSlide(index) {
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');
    }

    function openLightbox() {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        currentSlide = 0;
        showSlide(0);
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', openLightbox);
    closeBtn.addEventListener('click', closeLightbox);

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showSlide(currentSlide + 1);
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('carousel-container')) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        switch (e.key) {
            case 'Escape': closeLightbox(); break;
            case 'ArrowLeft': showSlide(currentSlide - 1); break;
            case 'ArrowRight': showSlide(currentSlide + 1); break;
        }
    });
});
