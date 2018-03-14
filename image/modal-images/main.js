'use strict';
let modal = document.querySelector('#myModal');
let modalImg = document.querySelector('#img01');
let caption = document.querySelector('#caption');
document.querySelector('#myImg').addEventListener('click', function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    caption.textContent = this.alt;
});
document.querySelector('.close').addEventListener('click', (e) => {
    modal.style.display = 'none';
});