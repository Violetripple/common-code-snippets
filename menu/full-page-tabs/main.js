'use strict';
function openPage(pageName, elem, color) {
    let tabcontents, tablinks;
    tabcontents = document.querySelectorAll('.tabcontent');
    for (const tabcontent of tabcontents) {
        tabcontent.style.display = 'none';
    }
    tablinks = document.querySelectorAll('.tablink');
    for (const tablink of tablinks) {
        tablink.style.backgroundColor = '';
    }
    document.getElementById(pageName).style.display = 'block';
    elem.style.backgroundColor = color;
}
document.querySelector('#defaultOpen').click();