'use strict';
let nodes = document.querySelectorAll('li');
for (const node of nodes) {
    let spanNode = document.createElement('SPAN');
    let textNode = document.createTextNode('\u00D7');
    spanNode.appendChild(textNode);
    spanNode.className = 'close';
    node.appendChild(spanNode);
}
let spanNodes = document.querySelectorAll('.close');
for (const spanNode of spanNodes) {
    spanNode.addEventListener('click', (e) => {
        e.currentTarget.parentElement.style.display = 'none';
    });
}

document.querySelector('.list').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') e.target.classList.toggle('checked');
}, false);

document.querySelector('.addBtn').addEventListener('click', () => {
    let li = document.createElement('LI');
    let inpputValue = document.querySelector('input').value;
    let textNode = document.createTextNode(inpputValue);
    li.appendChild(textNode);
    if (inpputValue === '') {
        alert('You must write something!');
    } else {
        document.querySelector('.list').appendChild(li);
    }
    document.querySelector('input').value = '';

    let spanNode = document.createElement('SPAN');
    let textNode$ = document.createTextNode('\u00D7');
    spanNode.appendChild(textNode$);
    spanNode.className = 'close';
    li.appendChild(spanNode);

    for (const spanNode$ of spanNodes) {
    spanNode$.addEventListener('click', (e) => {
        e.currentTarget.parentElement.style.display = 'none';
    });
}
}, false);