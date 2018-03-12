'use strict';
let accordions = document.querySelectorAll('.accordion');

// Method 1

// for (let i = 0; i < accordions.length; i++) {
//     accordions[i].addEventListener('click', function() {
//         this.classList.toggle('active');
//         let panel = this.nextElementSibling;

//         // if (panel.style.display === "block") {
//         //     panel.style.display = "none";
//         // } else {
//         //     panel.style.display = "block";
//         // }

//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + 'px';
//         }
//     });
// }

// Method 2

// Array.from(accordions).forEach(accordion => {
//     accordion.addEventListener('click', function() {
//         this.classList.toggle('active');
//         let panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + 'px';
//         }
//     })
// });

// Method 3, modern efficient javascript!

for (const accordion of accordions) {
  accordion.addEventListener('click', function() {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}
