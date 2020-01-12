'use strict';
const slider = {
    prev : document.querySelector('.prev'),
    next : document.querySelector('.next'),
    dots : document.querySelectorAll('.dots'),
    dotsWrapper : document.querySelector('.dots__wrapper'),
    slides : document.querySelectorAll('.clients'),
    sliderIndex : 0,

    changeSlide() {
        if (this.sliderIndex >= this.slides.length) {
            this.sliderIndex = 0;
        } else if (this.sliderIndex < 0) {
            this.sliderIndex = this.slides.length - 1;
        };

        this.slides.forEach(item => item.style.display = 'none');
        this.dots.forEach(item => item.style.background = '#fff');

        this.dots[this.sliderIndex].style.background = '#000';
        this.slides[this.sliderIndex].style.display = 'flex';
    },

    plusSlide(b) {
        this.sliderIndex += b;
        this.changeSlide();
    },
    changeDots(target) {
        for (let i = 0; i < this.dots.length; i++) {
            if (target.classList.contains('dots') && target == this.dots[i]) {
                this.sliderIndex = i;
                this.changeSlide();
                break;
            };
        };
    },
};
console.log(slider)

document.addEventListener("load", slider.changeSlide())
slider.prev.addEventListener('click', () => slider.plusSlide(-1));
slider.next.addEventListener('click', () => slider.plusSlide(1));
slider.dotsWrapper.addEventListener('click',(event) => slider.changeDots(event.target));