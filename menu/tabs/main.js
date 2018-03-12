'use strict';
function openCity(event, cityName) {
    let tablinks, tabcontent;

    tabcontent = document.querySelectorAll('.tabcontent');
    for (const content of tabcontent) {
        content.style.display = 'none';
    }

    tablinks = document.querySelectorAll('.tablinks');
    for (const tablink of tablinks) {
        tablink.className = tablink.className.replace(' active', '');
    }
    document.getElementById(cityName).style.display = 'block';
    event.currentTarget.className += ' active';
}
// Get the element with id="defaultOpen" and click on it so it looks opned by default once loaded.
document.querySelector('#defaultOpen').click();
let toprights = document.querySelectorAll('.topright');
for (const topright of toprights) {
    topright.addEventListener('click', (e) => {
        e.currentTarget.parentElement.style.display = 'none';
    });
}