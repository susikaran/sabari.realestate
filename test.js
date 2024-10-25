
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('menu-toggle').addEventListener('click', function() {
            var navbarMenu = document.getElementById('navbarMenu');
            navbarMenu.classList.toggle('show');  // Toggle the "show" class to display or hide the menu
        });
    });


    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.carousel-image').length;

    function updateSlidePosition() {
        const slideWidth = document.querySelector('.carousel-image').clientWidth;
        document.getElementById('carousel-slide').style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    function moveSlide(direction) {
        currentSlide += direction;
        if (currentSlide < 0) {
            currentSlide = totalSlides - 1; // Wrap to the last slide
        } else if (currentSlide >= totalSlides) {
            currentSlide = 0; // Wrap to the first slide
        }
        updateSlidePosition();
    }

    // Update slide position on window resize to keep responsive
    window.addEventListener('resize', updateSlidePosition);

// Example: Animation when scrolling into view
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.stat-item');
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
});



