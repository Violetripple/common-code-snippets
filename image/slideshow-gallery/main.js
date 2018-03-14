'use strict';
let slideIndex = 1;
function showSlide(n) {
  let slides = document.querySelectorAll('.slide');
  let demos = document.querySelectorAll('.demo');
  let captionText = document.querySelector('#caption');
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (const slide of slides) {
    slide.style.display = 'none';
  }
  for (const demo of demos) {
    demo.className = demo.className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  demos[slideIndex - 1].className += ' active';
  captionText.textContent = demos[slideIndex - 1].alt;
}
showSlide(slideIndex);
function plusSlide(n) {
    showSlide(slideIndex += n);
}
function currentSlide(n) {
    showSlide(slideIndex = n);
}