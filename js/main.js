document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.9)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.7)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Hero Carousel Rotation
    const carouselItems = document.querySelectorAll('.carousel-item');
    if (carouselItems.length > 0) {
        let currentIndex = 0;

        function rotateCarousel() {
            carouselItems.forEach(item => item.classList.remove('active', 'prev', 'next'));
            carouselItems[currentIndex].classList.add('active');

            const prevIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            const nextIndex = (currentIndex + 1) % carouselItems.length;

            carouselItems[prevIndex].classList.add('prev');
            carouselItems[nextIndex].classList.add('next');
        }

        let carouselInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            rotateCarousel();
        }, 5000);

        carouselItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                if (!item.classList.contains('active')) {
                    currentIndex = index;
                    rotateCarousel();
                    clearInterval(carouselInterval);
                    carouselInterval = setInterval(() => {
                        currentIndex = (currentIndex + 1) % carouselItems.length;
                        rotateCarousel();
                    }, 5000);
                }
            });
        });
    }
});
