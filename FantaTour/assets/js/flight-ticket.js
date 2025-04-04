document.addEventListener('DOMContentLoaded', () => {
    // Menu điều hướng
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    } else {
        console.error("Không tìm thấy menuIcon hoặc navbar trong HTML");
    }

    // Slider hình ảnh
    const sliderImages = document.querySelector('.slider-images');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const slideWidth = 240;
    let currentSlide = 0;

    if (sliderImages && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentSlide < sliderImages.children.length - 3) {
                currentSlide++;
                updateSliderPosition();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateSliderPosition();
            }
        });

        function updateSliderPosition() {
            sliderImages.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }
    } else {
        console.error("Không tìm thấy sliderImages, nextBtn hoặc prevBtn trong HTML");
    }
});