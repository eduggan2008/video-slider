const slides = [...document.querySelectorAll(".slide")];

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        const activeSlide = document.querySelector('.slide.active');
        const activeSlideProps = Object.assign(activeSlide.getBoundingClientRect());
        const slideProps = slide.getBoundingClientRect();

        /* console.log(activeSlideProps);
        console.log(slideProps); */

        activeSlide.style.cssText = `width: ${slideProps.width}px; height: ${slideProps.height}px; top: ${slideProps.top}px; left: ${slideProps.left}px`;
        slide.style.cssText = `width: ${activeSlideProps.width}px; height: ${activeSlideProps.height}px; top: ${activeSlideProps.top}px; left: ${activeSlideProps.left}px`;

        activeSlide.classList.remove("active");
        slide.classList.add("active");
    });
});


