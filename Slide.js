function autoSlide() {
    let slides = document.querySelectorAll('.slide');
    let radioButtons = document.querySelectorAll('[name="radio-btn"]');
    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('first');
        radioButtons[currentSlide].checked = false;

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add('first');
        radioButtons[currentSlide].checked = true;
    }, 3000); 
}

window.onload = autoSlide;

