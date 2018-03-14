'use strict';
let slideIndex = 1;
function showSlides(n) {
    let slides = document.querySelectorAll('.mySlides');
    let dots = document.querySelectorAll('.dot');
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (const slide of slides) {
        slide.style.display = 'none';
    }
    for (const dot of dots) {
        dot.className = dot.className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Automatic Slideshow

// let slideIndex = 0;
// (function showSlides() {
//     let slides = document.querySelectorAll('.mySlides');
//     // let dots = document.querySelectorAll('.dot');
//     for (const slide of slides) {
//         slide.style.display = 'none';
//     }
//     // for (const dot of dots) {
//     //     dot.className = dot.className.replace(' active', '');
//     // }
//     slideIndex++;
//     slideIndex = slideIndex % slides.length;
//     // if (slideIndex > slides.length) slideIndex = 1;
//     slides[slideIndex - 1].style.display = 'block';
//     // dots[slideIndex - 1].className += ' active';
//     setInterval(showSlides, 2000);
// })();